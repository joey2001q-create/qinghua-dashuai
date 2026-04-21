import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAIStream } from '@/lib/ai-config'

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

    const prompt = `你是清华大帅，一位专业的备考规划师。请为以下学生生成考前冲刺计划。

【学生信息】
- 年级：${grade}
- 考试名称：${examName}
- 距离考试还有：${daysUntilExam}天
- 每天学习时间：${dailyHours}小时
- 总学习时长：约${totalHours}小时

【各科目情况】
${subjectsInfo}

【总分情况】
- 当前总分：${totalCurrent}/${totalFull}分
- 目标总分：${totalTarget}分
- 需提升：${totalGap}分（${totalGapPercent}%）

【输出格式要求】

## 📊 整体分析
简要分析学生现状和各科目提分策略

## 📅 每日冲刺计划

### 第1天
| 时间段 | 学习内容 | 预期目标 |
|--------|----------|----------|
| 0-30分钟 | 知识点复习 | 掌握核心概念 |
| 30-60分钟 | 例题练习 | 理解解题思路 |

### 第2天
...

## 📈 进度追踪
- 当前进度：[████░░░░░░] 60%
- 目标进度：[████████] 100%

## 💡 重点提醒
- 易错点提示
- 考前注意事项

【注意事项】
1. 请确保计划具体、可执行
2. 每天的内容要明确到知识点和时间分配
3. 根据${grade}学生的认知水平调整内容难度
4. 合理分配各科目的学习时间
5. 不要使用特殊字符或下划线命名，使用中文标题
6. 表格必须使用标准markdown格式，列对齐用|分隔`

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of callAIStream(prompt)) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`))
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
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
  } catch (error) {
    console.error('Rush plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
