import { NextRequest, NextResponse } from 'next/server'
import { callAIStream } from '@/lib/ai-config'
import { buildPrompt } from '@/lib/prompt-builder'
import { globalMetricsCollector, evaluateOutputQuality } from '@/lib/quality-metrics'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { grade, subject, examName, totalScore, currentScore, questionScores, text } = await request.json()

    const totalLost = (totalScore || 0) - currentScore
    const scoreRate = totalScore ? Math.round((currentScore / totalScore) * 100) : 0

    const questionScoreInfo = questionScores && questionScores.length > 0
      ? questionScores.map((s: { type: string; totalScore: number; lostScore: number }) => {
          const rate = s.totalScore > 0 ? Math.round(((s.totalScore - s.lostScore) / s.totalScore) * 100) : 0
          return `- ${s.type}：总分${s.totalScore}分，失分${s.lostScore}分，得分率${rate}%`
        }).join('\n')
      : '未提供各题型失分数据'

    const prompt = buildPrompt('weak-analysis', {
      grade,
      subject,
      examName,
      totalScore,
      currentScore,
      totalLost,
      scoreRate,
      questionScoreInfo,
      text: text || ''
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

          const qualityMetrics = evaluateOutputQuality('weak-analysis', fullContent);
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
    console.error('Weak analysis API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
