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
    const { subject, scores } = await request.json()

    const prompt = `你是一位资深学科诊断专家。请分析学生的失分原因：

学科：${subject}
成绩情况：${scores}

请分析：
1. 失分原因诊断
2. 薄弱知识点识别
3. 知识漏洞分析
4. 针对性提升建议
5. 练习资源推荐

用清晰的格式输出，帮助学生找到提分突破口。`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Weak analysis API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
