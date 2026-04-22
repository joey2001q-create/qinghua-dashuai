import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json()

    const systemPrompt = `你是一位学习笔记整理专家。请将学生上传的笔记内容进行整理归纳。

要求：
1. 提取核心知识点，分门别类
2. 补量重要性，标注重点、难点
3. 补充可能遗漏的知识点
4. 建立知识点之间的关联
5. 用Markdown格式输出，结构清晰

输出格式：
# 笔记整理

## 一、核心知识点
- 知识点1
- 知识点2
...

## 二、重点标注
⭐ 重点1：...
⭐ 重点2：...

## 三、难点解析
❗ 难点1：...
❗ 难点2：...

## 四、知识关联
- A与B的关系：...
- C是D的基础：...

## 五、补充建议
- 建议补充学习：...
- 建议复习巩固：...`

    const response = await fetch(AI_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_CONFIG.MODEL_ID,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `笔记内容：\n${content}` }
        ],
        temperature: 0.7,
        max_tokens: 4096,
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error('AI API request failed')
    }

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) {
          controller.close()
          return
        }

        const decoder = new TextDecoder()
        let buffer = ''

        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            buffer += decoder.decode(value, { stream: true })
            const lines = buffer.split('\n')
            buffer = lines.pop() || ''

            for (const line of lines) {
              const trimmed = line.trim()
              if (!trimmed || !trimmed.startsWith('data: ')) continue
              if (trimmed === 'data: [DONE]') continue

              const data = trimmed.slice(6)
              try {
                const json = JSON.parse(data)
                const content = json.choices?.[0]?.delta?.content
                if (content) {
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
                }
              } catch { /* skip */ }
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
        } catch (error) {
          console.error('Stream error:', error)
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: '生成失败' })}\n\n`))
        } finally {
          controller.close()
        }
      },
    })

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Note API error:', error)
    return NextResponse.json(
      { content: '抱歉，服务暂时不可用，请稍后再试。' },
      { status: 500 }
    )
  }
}
