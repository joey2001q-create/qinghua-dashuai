import { NextRequest, NextResponse } from 'next/server'

const API_KEY = '584b8f96b7040464af809e8574ae5d6a:NDQ2NDc3Zjg0MDM4Nzc3MjJiOTZiNjlh'
const API_URL = 'https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions'
const MODEL_ID = 'astron-code-latest'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function* callAIStream(prompt: string): AsyncGenerator<string> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL_ID,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 4096,
      stream: true,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('AI API error:', errorText)
    throw new Error('AI API request failed')
  }

  const reader = response.body?.getReader()
  if (!reader) throw new Error('No response body')

  const decoder = new TextDecoder()
  let buffer = ''

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
        if (content) yield content
      } catch {
        // skip invalid JSON
      }
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { grade, subject, topic, goal } = await request.json()

    const prompt = `你是清华大帅，一位经验丰富的${grade}${subject}老师。学生要预习"${topic}"这个知识点。

【学生信息】
- 年级：${grade}
- 学科：${subject}
- 预习内容：${topic}
${goal ? `- 预习目标：${goal}` : ''}

【输出格式要求 - 预习导学案】

## 🎯 学习目标
明确本次预习需要掌握的核心目标

## 📖 知识点讲解
用简洁易懂的方式讲解这个知识点，适合${grade}学生的认知水平

## 📝 核心概念
列出核心概念、公式或定义，用表格或列表清晰展示

## 💡 典型例题
给出2-3道典型例题，附详细解题步骤

| 题目 | 解题思路 | 答案 |
|------|----------|------|
| ... | ... | ... |

## ⚠️ 易错提醒
列出学生容易犯的错误和注意事项

## 🧠 预习自测
给出2-3道简单自测题，检验预习效果

## 📚 拓展延伸
推荐相关的拓展内容或下节课预习方向

【注意事项】
1. 用学生容易理解的语言
2. 适合${grade}学生的认知水平
3. 不要使用特殊字符或下划线命名，使用中文标题
4. 表格必须使用标准markdown格式，列对齐用|分隔`

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of callAIStream(prompt)) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`))
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
    console.error('Preview API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
