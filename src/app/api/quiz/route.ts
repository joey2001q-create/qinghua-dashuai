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
      temperature: 0.8,
      max_tokens: 1500,
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
    const { grade, subject, knowledge } = await request.json()

    const prompt = `你是一位${grade}${subject}出题专家。请出一道选择题：

年级：${grade}
学科：${subject}
${knowledge ? `知识点范围：${knowledge}` : ''}

请严格按照以下JSON格式输出（不要有其他内容）：
{
  "question": "题目内容",
  "options": ["选项A", "选项B", "选项C", "选项D"],
  "correctIndex": 0,
  "explanation": "答案解析"
}

要求：
1. 题目难度适中，符合年级水平
2. 选项要有迷惑性
3. 解析要详细说明解题思路
4. correctIndex是正确答案的索引（0-3）`

    const content = await callAI(prompt)

    try {
      const quiz = JSON.parse(content)
      return NextResponse.json(quiz)
    } catch {
      return NextResponse.json({
        question: '题目生成失败，请重试',
        options: ['A', 'B', 'C', 'D'],
        correctIndex: 0,
        explanation: '请重新生成题目'
      })
    }
  } catch (error) {
    console.error('Quiz API error:', error)
    return NextResponse.json(
      { question: '服务暂时不可用', options: ['A', 'B', 'C', 'D'], correctIndex: 0, explanation: '' },
      { status: 500 }
    )
  }
}
