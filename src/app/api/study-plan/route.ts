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
  const { subject, examType, totalScore, targetScore, currentScore, days, dailyHours, grade } = await request.json()

  const gap = targetScore - currentScore
  const gapPercent = ((gap / totalScore) * 100).toFixed(1)
  const totalHours = days * dailyHours

  const prompt = `你是清华大帅，一位专业的学习老师和规划老师，请为学生制定一份详细的每日学习计划。

【学生信息】
- 年级：${grade}
- 学科：${subject}
- 考试类型：${examType}
- 试卷总分：${totalScore}分
- 目标分数：${targetScore}分
- 当前水平：${currentScore}分
- 差距：${gap}分（需提升${gapPercent}%）
- 备考时间：${days}天
- 每天学习时间：${dailyHours}小时
- 总学习时长：${totalHours}小时

【输出格式要求 - 必须严格遵循】

## 📊 整体分析
简要分析学生现状和提分策略

## 📅 每日学习计划

### 第1天
| 时间段 | 学习内容 | 预期目标 |
|--------|----------|----------|
| 0-30分钟 | 知识点复习 | 掌握核心概念 |
| 30-60分钟 | 例题练习 | 理解解题思路 |
| 60-90分钟 | 习题训练 | 正确率达到80% |

### 第2天
| 时间段 | 学习内容 | 预期目标 |
|--------|----------|----------|
| ... | ... | ... |

## 📈 进度追踪
- 当前进度：[████░░░░░░] 60%
- 目标进度：[████████] 100%

## 💡 重点提醒
- 易错点提示
- 学习建议

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
}
