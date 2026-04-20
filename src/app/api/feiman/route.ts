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
    const { topic } = await request.json()

    const prompt = `你是一位费曼学习法教练。学生要学习"${topic}"这个知识点。

请引导学生开始费曼学习：
1. 简要介绍这个知识点
2. 邀请学生用自己的话讲解
3. 提供一些引导问题帮助学生思考

保持友好和鼓励的语气，激发学生的学习兴趣。告诉学生："现在请尝试用你自己的话来讲解这个知识点，我会帮你检查理解是否正确。"`

    const content = await callAI(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Feiman API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
