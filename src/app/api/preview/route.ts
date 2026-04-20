import { NextRequest, NextResponse } from 'next/server'

const API_KEY = '584b8f96b7040464af809e8574ae5d6a:NDQ2NDc3Zjg0MDM4Nzc3MjJiOTZiNjlh'
const API_URL = 'https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions'
const MODEL_ID = 'astron-code-latest'

async function callAI(prompt: string): Promise<string> {
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
    const { grade, subject, topic } = await request.json()

    const prompt = `你是一位${grade}${subject}老师。学生要预习"${topic}"这个知识点。

请用简洁易懂的方式讲解：
1. 这个知识点是什么
2. 核心概念和公式
3. 常见题型和解题方法
4. 易错点提醒
5. 预习建议

用学生容易理解的语言，适合${grade}学生的认知水平。`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Preview API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
