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
    const { examGoal, currentScore, days, dailyHours } = await request.json()

    const prompt = `你是一位资深学习规划师。学生需要制定学习计划：

考试目标：${examGoal}
当前水平：${currentScore}分
备考时间：${days}天
每天学习时间：${dailyHours}小时

请生成一份详细的学习计划，包括：
1. 总体目标拆解
2. 分阶段计划（按周或按阶段）
3. 每日学习安排建议
4. 重点攻克内容
5. 复习建议

用清晰的格式输出，适合学生执行。`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Study plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
