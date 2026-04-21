import { NextRequest, NextResponse } from 'next/server'
import { callAIStream } from '@/lib/ai-config'
import { buildPrompt } from '@/lib/prompt-builder'
import { globalMetricsCollector, evaluateOutputQuality } from '@/lib/quality-metrics'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { grade, subjects, examName, daysUntilExam, dailyHours } = data

    const subjectsInfo = subjects.map((s: { name: string; currentScore: number; fullScore: number; targetScore: number }) => {
      const gap = s.targetScore - s.currentScore
      const gapPercent = ((gap / s.fullScore) * 100).toFixed(1)
      return `- ${s.name}：当前${s.currentScore}/${s.fullScore}分，目标${s.targetScore}分，需提升${gap}分（${gapPercent}%）`
    }).join('\n')

    const totalCurrent = subjects.reduce((sum: number, s: { currentScore: number }) => sum + s.currentScore, 0)
    const totalTarget = subjects.reduce((sum: number, s: { targetScore: number }) => sum + s.targetScore, 0)
    const totalFull = subjects.reduce((sum: number, s: { fullScore: number }) => sum + s.fullScore, 0)
    const totalGap = totalTarget - totalCurrent
    const totalGapPercent = ((totalGap / totalFull) * 100).toFixed(1)

    const totalHours = daysUntilExam * dailyHours

    const prompt = buildPrompt('rush-plan', {
      grade,
      examName,
      daysUntilExam,
      dailyHours,
      totalHours,
      subjectsInfo,
      totalCurrent,
      totalFull,
      totalTarget,
      totalGap,
      totalGapPercent
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

          const qualityMetrics = evaluateOutputQuality('rush-plan', fullContent);
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
    console.error('Rush plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
