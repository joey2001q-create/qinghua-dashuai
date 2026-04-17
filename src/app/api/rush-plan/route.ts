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
      max_tokens: 3000,
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
    const data = await request.json()
    const { grade, subjects, examName, examDate, currentScore, fullScore, targetScore, dailyHours, materials } = data

    const prompt = `你是一位资深备考规划师。请为以下学生生成考前冲刺计划：

年级：${grade}
重点科目：${subjects?.join('、')}
考试名称：${examName}
考试日期：${examDate}
当前得分：${currentScore}/${fullScore}
目标分数：${targetScore}
每天学习时间：${dailyHours}小时
${materials ? `学习资料：${materials}` : ''}

请生成：
1. 冲刺总体策略
2. 每日详细计划（按天列出）
3. 各科目重点攻克内容
4. 模拟考试安排
5. 考前注意事项

用清晰的格式输出，便于学生执行。`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Rush plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
