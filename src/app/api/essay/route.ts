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
    const { grade, essayType, title, content } = await request.json()

    const prompt = `你是清华大帅，一位资深语文教师和作文批改专家。请批改以下作文：

【学生信息】
- 年级：${grade}
- 作文类型：${essayType}
${title ? `- 题目：${title}` : ''}

【作文内容】
${content}

【输出格式要求】

## 📊 总体评价
优点和不足的总体评价

## 📝 内容分析
主题、立意、选材分析

## 🏗️ 结构分析
开头、结尾、过渡、段落安排分析

## 💬 语言分析
词汇、句式、修辞分析

## ✏️ 具体修改建议
指出具体句子并给出修改方案

## 📈 参考评分
满分100分制，给出预估分数

## 💡 提升建议
帮助学生提高写作能力的建议

【注意事项】
1. 用清晰的格式输出
2. 不要使用特殊字符或下划线命名，使用中文标题`

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
    console.error('Essay API error:', error)
    return NextResponse.json(
      { content: '批改失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
