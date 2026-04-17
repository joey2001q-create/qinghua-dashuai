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
    const { text } = await request.json()

    const prompt = `你是一位资深教育专家。请分析以下考试大纲或知识点清单，检测考点覆盖情况：

${text}

请输出：
1. 考点清单（列出所有知识点）
2. 每个考点的重要程度（高/中/低）
3. 建议掌握程度
4. 学习优先级排序
5. 复习建议

用清晰的表格或列表格式输出。`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Knowledge points API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
