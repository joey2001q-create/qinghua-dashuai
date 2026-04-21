import { NextRequest, NextResponse } from 'next/server'
import { callAIStream } from '@/lib/ai-config'
import { buildPrompt } from '@/lib/prompt-builder'
import { globalMetricsCollector, evaluateOutputQuality } from '@/lib/quality-metrics'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { text, grade, subject } = await request.json()

    const prompt = buildPrompt('knowledge-points', {
      grade,
      subject,
      text
    })

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt build failed' }, { status: 500 })
    }

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let fullContent = ''
          for await (const chunk of callAIStream(prompt)) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`));
            fullContent += chunk;
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));

          const qualityMetrics = evaluateOutputQuality('knowledge-points', fullContent);
          globalMetricsCollector.addMetric(qualityMetrics);
        } catch (error) {
          console.error('Stream error:', error)
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: '生成失败' })}\n\n`));
        } finally {
          controller.close()
        }
      },
    })

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Knowledge points API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
