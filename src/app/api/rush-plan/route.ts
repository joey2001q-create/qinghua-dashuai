import { NextRequest, NextResponse } from 'next/server'

const API_KEY = '2e1cead4fb8c5945d133fcfb649b98cb:NmZjNjVmNDNkZWYzMGFjMTBiOGFmZmEw'
const API_URL = 'https://maas-api.cn-huabei-1.xf-yun.com/v2/chat/completions'
const MODEL_ID = 'xopdeepseekv32'

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
    const data = await request.json()
    const { grade, subjects, examName, examDate, currentScore, fullScore, targetScore, dailyHours } = data

    const gap = targetScore - currentScore
    const gapPercent = ((gap / fullScore) * 100).toFixed(1)

    const exam = new Date(examDate)
    const today = new Date()
    const daysUntilExam = Math.ceil((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    const totalHours = daysUntilExam * dailyHours

    const prompt = `你是清华大帅，一位专业的备考规划师。请为以下学生生成考前冲刺计划。

【学生信息】
- 年级：${grade}
- 重点科目：${subjects?.join('、')}
- 考试名称：${examName}
- 考试日期：${examDate}（距离考试还有${daysUntilExam}天）
- 当前得分：${currentScore}/${fullScore}
- 目标分数：${targetScore}
- 差距：${gap}分（需提升${gapPercent}%）
- 每天学习时间：${dailyHours}小时
- 总学习时长：约${totalHours}小时

【输出格式要求】

## 📊 整体分析
简要分析学生现状和提分策略

## 📅 每日冲刺计划

### 第1天
| 时间段 | 学习内容 | 预期目标 |
|--------|----------|----------|
| 0-30分钟 | 知识点复习 | 掌握核心概念 |
| 30-60分钟 | 例题练习 | 理解解题思路 |

### 第2天
...

## 📈 进度追踪
- 当前进度：[████░░░░░░] 60%
- 目标进度：[████████] 100%

## 💡 重点提醒
- 易错点提示
- 考前注意事项

【注意事项】
1. 请确保计划具体、可执行
2. 每天的内容要明确到知识点和时间分配
3. 根据${grade}学生的认知水平调整内容难度
4. 不要使用特殊字符或下划线命名，使用中文标题
5. 表格必须使用标准markdown格式，列对齐用|分隔`

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
    console.error('Rush plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
