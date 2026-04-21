import { NextRequest, NextResponse } from 'next/server'
import { callAIStream } from '@/lib/ai-config'
import { buildPrompt } from '@/lib/prompt-builder'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { text, grade, subject } = await request.json()

    if (!text || !text.trim()) {
      return NextResponse.json({ result: null, error: '请提供文本内容' }, { status: 400 })
    }

    const prompt = buildPrompt('extract', {
      text
    })

    if (!prompt) {
      return NextResponse.json({ result: null, error: 'Prompt build failed' }, { status: 500 })
    }

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let fullContent = ''
          for await (const chunk of callAIStream(prompt)) {
            fullContent += chunk
          }

          try {
            const jsonMatch = fullContent.match(/\{[\s\S]*\}/)
            if (jsonMatch) {
              const result = JSON.parse(jsonMatch[0])
              controller.enqueue(encoder.encode(JSON.stringify({ result })))
            } else {
              controller.enqueue(encoder.encode(JSON.stringify({ result: null, raw: fullContent })))
            }
          } catch {
            controller.enqueue(encoder.encode(JSON.stringify({ result: null, raw: fullContent })))
          }
        } catch (error) {
          console.error('Stream error:', error)
          controller.enqueue(encoder.encode(JSON.stringify({ result: null, error: '解析失败' })))
        } finally {
          controller.close()
        }
      },
    })

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Extract API error:', error)
    return NextResponse.json(
      { result: null, error: '解析失败，请稍后重试' },
      { status: 500 }
    )
  }
}
