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
    const { grade, essayType, title, content } = await request.json()

    const prompt = `你是一位资深语文教师和作文批改专家。请批改以下作文：

年级：${grade}
作文类型：${essayType}
${title ? `题目：${title}` : ''}

作文内容：
${content}

请从以下维度批改：
1. 总体评价（优点和不足）
2. 内容分析（主题、立意、选材）
3. 结构分析（开头、结尾、过渡、段落安排）
4. 语言分析（词汇、句式、修辞）
5. 具体修改建议（指出具体句子并给出修改方案）
6. 参考评分（满分100分制，给出预估分数）
7. 提升建议

用清晰的格式输出，帮助学生提高写作能力。`

    const result = await callAI(prompt)
    return NextResponse.json({ content: result })
  } catch (error) {
    console.error('Essay API error:', error)
    return NextResponse.json(
      { content: '批改失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
