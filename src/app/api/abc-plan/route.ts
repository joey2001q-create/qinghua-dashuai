import { NextRequest, NextResponse } from 'next/server'
import { callAIStream } from '@/lib/ai-config'
import { buildPrompt } from '@/lib/prompt-builder'
import { globalMetricsCollector, evaluateOutputQuality } from '@/lib/quality-metrics'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { goals, grade, gradeGroup, planWeeks, dailyHours, totalWeeklyHours } = await request.json()

    const goalsFormatted = goals.map((g: { subject: string; fullScore: number; currentScore: number; lastScore: number; targetScore: number; confidence: number; gap: number; improvement: number; bTarget: number; trend: string }) =>
      `- ${g.subject}：上次${g.lastScore}/${g.fullScore}分 → 当前${g.currentScore}/${g.fullScore}分 → 目标${g.targetScore}/${g.fullScore}分，信心等级${g.confidence}/10，预期B目标${g.bTarget}分，趋势${g.trend === 'up' ? '上升' : g.trend === 'down' ? '下降' : '平稳'}，差距+${g.gap}分，预期提分+${g.improvement}分`
    ).join('\n')

    const prompt = buildPrompt('abc-plan', {
      grade,
      gradeGroup,
      goals: goalsFormatted,
      planWeeks,
      dailyHours,
      totalWeeklyHours
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

          const qualityMetrics = evaluateOutputQuality('abc-plan', fullContent);
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
    console.error('ABC plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
