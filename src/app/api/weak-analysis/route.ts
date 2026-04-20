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
    const { grade, subject, examName, totalScore, currentScore, questionScores, text } = await request.json()

    const totalLost = (totalScore || 0) - currentScore
    const scoreRate = totalScore ? Math.round((currentScore / totalScore) * 100) : 0

    const questionScoreInfo = questionScores && questionScores.length > 0
      ? questionScores.map((s: { type: string; totalScore: number; lostScore: number }) => {
          const rate = s.totalScore > 0 ? Math.round(((s.totalScore - s.lostScore) / s.totalScore) * 100) : 0
          return `- ${s.type}：总分${s.totalScore}分，失分${s.lostScore}分，得分率${rate}%`
        }).join('\n')
      : '未提供各题型失分数据'

    const prompt = `你是清华大帅，一位资深学科诊断专家和${grade}${subject}教师。请深入分析学生的失分原因：

【学生信息】
- 年级：${grade}
- 学科：${subject}
- 考试：${examName || '未指定'}
- 满分：${totalScore || '未指定'}
- 本次得分：${currentScore}
- 总失分：${totalLost > 0 ? totalLost : 0}
- 得分率：${scoreRate}%

【各题型失分情况】
${questionScoreInfo}
${text ? `\n【学生补充描述】\n${text}` : ''}

【输出格式要求】

## 📊 整体诊断
根据得分率和失分分布，给出整体诊断结论

## 🔍 各题型失分分析
逐个题型分析失分原因：
| 题型 | 失分 | 主要原因 | 知识漏洞 |
|------|------|----------|----------|
| ... | ... | ... | ... |

## 📚 薄弱知识点清单
列出所有薄弱知识点，按严重程度排序

## 📈 提分策略
针对每个薄弱知识点给出具体提分建议

## 🎯 优先级排序
按提分效率排序，建议先攻克哪些知识点

## 💡 下阶段学习计划
给出1-2周的针对性学习计划

【注意事项】
1. 根据${grade}学生的认知水平分析
2. 用清晰的表格或列表格式输出
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
    console.error('Weak analysis API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
