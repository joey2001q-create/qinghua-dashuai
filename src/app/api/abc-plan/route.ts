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
    const { goals } = await request.json()

    const prompt = `你是清华大帅，一位资深教育规划师。学生设定了以下ABC目标提分表：

${goals.map((g: { subject: string; fullScore: number; currentScore: number; targetScore: number; confidence: number }) => 
  `- ${g.subject}：当前${g.currentScore}/${g.fullScore}分 → 目标${g.targetScore}/${g.fullScore}分，信心等级${g.confidence}/10`
).join('\n')}

【输出格式要求】

## 📊 整体分析
简要分析各科目提分难度和可行性

## 📈 提分策略

### 各科分析
| 科目 | 提分难度 | 时间分配建议 | 具体策略 |
|------|----------|--------------|----------|
| 数学 | 中等 | 30% | ... |

## 🎯 优先级排序
按信心等级和提分空间排序

## 💡 重点提醒
- 关键建议

【注意事项】
1. 用简洁清晰的格式输出，适合学生阅读
2. 不要使用特殊字符或下划线命名，使用中文标题
3. 表格必须使用标准markdown格式`

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
    console.error('ABC plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
