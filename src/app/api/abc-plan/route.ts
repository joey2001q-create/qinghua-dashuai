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
    const { goals, grade, gradeGroup } = await request.json()

    const prompt = `你是清华大帅，一位资深教育规划师，擅长目标管理和学习策略制定。学生（${grade}，${gradeGroup}）设定了以下ABC目标提分表：

${goals.map((g: { subject: string; fullScore: number; currentScore: number; lastScore: number; targetScore: number; confidence: number; gap: number; improvement: number; bTarget: number; trend: string }) =>
  `- ${g.subject}：上次${g.lastScore}/${g.fullScore}分 → 当前${g.currentScore}/${g.fullScore}分 → 目标${g.targetScore}/${g.fullScore}分，信心等级${g.confidence}/10，预期B目标${g.bTarget}分，趋势${g.trend === 'up' ? '上升' : g.trend === 'down' ? '下降' : '平稳'}，差距+${g.gap}分，预期提分+${g.improvement}分`
).join('\n')}

【输出格式要求 - 必须严格遵循】

## 📊 整体分析
1. 各科目提分难度评估（结合当前分数占比和边际递减效应）
2. 总体目标可行性判断（预期总提分是否合理）
3. 趋势分析（哪些科目在进步，哪些在退步，需要警惕）

## 📈 各科提分策略

| 科目 | 提分难度 | 时间分配比例 | 核心突破点 | 具体策略 |
|------|----------|-------------|-----------|----------|
| 数学 | 较高 | 30% | 函数综合 | 每天专项训练1道压轴题 |

## 🎯 优先级排序
按"提分性价比"排序（提分空间×信心指数/所需时间），说明为什么这样排

## 📅 学习路径规划
- 第一阶段（前1/3时间）：基础巩固，重点攻克哪些科目
- 第二阶段（中间1/3时间）：专项突破，重点攻克哪些科目
- 第三阶段（最后1/3时间）：冲刺提分，重点攻克哪些科目

## 💪 心理建设
- 针对信心指数较低的科目，给出具体的信心提升建议
- 如何应对考试焦虑和目标压力
- 每日激励建议

## ⚠️ 风险提示
- 最可能达不到目标的科目及原因
- 需要额外关注的薄弱环节
- 时间分配冲突的解决方案

【注意事项】
1. 用简洁清晰的格式输出，适合${gradeGroup}学生阅读
2. 不要使用特殊字符或下划线命名，使用中文标题
3. 表格必须使用标准markdown格式
4. 策略要具体到可执行的行动，不要空泛建议
5. 考虑${gradeGroup}学生的认知水平和学习特点`

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
