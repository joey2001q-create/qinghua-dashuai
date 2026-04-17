import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.AI_API_KEY || ''
const API_URL = process.env.AI_API_URL || 'https://api.openai.com/v1/chat/completions'

async function callAI(prompt: string): Promise<string> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 2000,
    }),
  })

  if (!response.ok) {
    throw new Error('AI API request failed')
  }

  const data = await response.json()
  return data.choices[0]?.message?.content || ''
}

export async function POST(request: NextRequest) {
  try {
    const { goals } = await request.json()

    const prompt = `你是一位资深教育规划师。学生设定了以下ABC目标提分表：

${goals.map((g: { subject: string; fullScore: number; currentScore: number; targetScore: number; confidence: number }) => 
  `- ${g.subject}：当前${g.currentScore}/${g.fullScore}分 → 目标${g.targetScore}/${g.fullScore}分，信心等级${g.confidence}/10`
).join('\n')}

请分析：
1. 各科提分难度评估
2. 时间分配建议（按信心等级和提分空间）
3. 每科具体的提分策略
4. 优先级排序建议

用简洁清晰的格式输出，适合学生阅读。`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('ABC plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
