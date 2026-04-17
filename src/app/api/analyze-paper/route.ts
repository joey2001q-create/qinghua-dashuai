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
    const { grade, examType, subject, fullScore, currentScore, targetScore, images, text } = await request.json()

    const prompt = `你是一位资深试卷分析专家。请分析学生的考试情况：

年级：${grade}
考试类型：${examType || '未指定'}
学科：${subject}
满分：${fullScore}
本次得分：${currentScore}
下次目标：${targetScore || '未设定'}
${text ? `学生描述：${text}` : ''}

请分析：
1. 失分原因诊断
2. 薄弱知识点识别
3. 提分策略建议
4. 下阶段学习重点
5. 具体练习建议

用清晰的格式输出，帮助学生针对性提升。`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Analyze paper API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
