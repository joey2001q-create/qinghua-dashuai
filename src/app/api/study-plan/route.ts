import { NextRequest, NextResponse } from 'next/server'
import { callAIStream } from '@/lib/ai-config'
import { buildPrompt } from '@/lib/prompt-builder'
import { globalMetricsCollector, evaluateOutputQuality } from '@/lib/quality-metrics'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const weakLabels: Record<string, string> = {
  knowledge: '知识漏洞',
  technique: '解题技巧',
  careless: '粗心失误',
  application: '综合应用',
}

export async function POST(request: NextRequest) {
  const { subject, examType, totalScore, targetScore, currentScore, days, dailyHours, grade, gradeGroup, weaknesses } = await request.json()

  const gap = targetScore - currentScore
  const gapPercent = ((gap / totalScore) * 100).toFixed(1)
  const totalHours = days * dailyHours
  const weakDesc = (weaknesses as string[]).map(w => weakLabels[w] || w).join('、')

  const phase1Days = Math.ceil(days * 0.35)
  const phase2Days = Math.ceil(days * 0.40)
  const phase3Days = days - phase1Days - phase2Days

  const prompt = buildPrompt('study-plan', {
    grade,
    gradeGroup,
    subject,
    examType,
    totalScore,
    targetScore,
    currentScore,
    gap,
    gapPercent,
    days,
    dailyHours,
    totalHours,
    weakDesc,
    phase1Days,
    phase2Days,
    phase3Days
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

        const qualityMetrics = evaluateOutputQuality('study-plan', fullContent);
        globalMetricsCollector.addMetric(qualityMetrics)
      } catch (error) {
        console.error('Stream error:', error)
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: '生成失败' })}\n\n`))
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
}
