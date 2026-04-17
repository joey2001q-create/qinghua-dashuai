import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.AI_API_KEY || ''
const API_URL = process.env.AI_API_URL || 'https://api.openai.com/v1/chat/completions'

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function POST(request: NextRequest) {
  try {
    const { messages, systemPrompt } = await request.json()

    const fullMessages: ChatMessage[] = [
      ...(systemPrompt ? [{ role: 'system' as const, content: systemPrompt }] : []),
      ...messages
    ]

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: fullMessages,
        temperature: 0.7,
        max_tokens: 2000,
      }),
    })

    if (!response.ok) {
      throw new Error('AI API request failed')
    }

    const data = await response.json()
    const content = data.choices[0]?.message?.content || '抱歉，我无法生成回复。'

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { content: '抱歉，服务暂时不可用，请稍后再试。' },
      { status: 500 }
    )
  }
}
