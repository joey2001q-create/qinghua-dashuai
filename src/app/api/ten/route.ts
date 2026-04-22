import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { subject, question } = await request.json()

    const systemPrompt = `你是一位经验丰富的${subject}老师，擅长用多种方法解题。请为以下题目提供10种不同的解法。

要求：
1. 每种解法都要清晰、完整
2. 解法之间要有明显的思路差异（如：代数法、几何法、分析法、综合法、反证法、归纳法等）
3. 每种解法标注方法名称
4. 适合学生理解和学习
5. 用Markdown格式输出，结构清晰

【重要】数学公式格式规范：
- 行内公式用 $包裹，如：$x^2 + y^2 = 1$
- 块级公式用 $$包裹，如：$$\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$
- 分数用 \\frac{分子}{分母}
- 根号用 \\sqrt{内容}
- 上下标用 ^ 和 _
- 希腊字母用 \\alpha \\beta \\theta 等
- 绝对不要用 [ ] 或 ( ) 包裹公式，必须用 $ 或 $$

输出格式：
## 解法一：[方法名称]
[解题步骤，公式用$...$包裹]

## 解法二：[方法名称]
[解题步骤]

...以此类推到解法十`

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
          { role: 'user', content: `题目：\n${question}` }
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
    console.error('Ten solutions API error:', error)
    return NextResponse.json(
      { content: '抱歉，服务暂时不可用，请稍后再试。' },
      { status: 500 }
    )
  }
}
