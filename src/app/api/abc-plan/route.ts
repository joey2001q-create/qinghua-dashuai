import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAIStream } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { goals, grade, gradeGroup, planWeeks, dailyHours, totalWeeklyHours } = await request.json()

    const prompt = `你是清华大帅，一位资深教育规划师，擅长目标管理和学习策略制定。学生（${grade}，${gradeGroup}）设定了以下ABC目标提分表：

${goals.map((g: { subject: string; fullScore: number; currentScore: number; lastScore: number; targetScore: number; confidence: number; gap: number; improvement: number; bTarget: number; trend: string }) =>
  `- ${g.subject}：上次${g.lastScore}/${g.fullScore}分 → 当前${g.currentScore}/${g.fullScore}分 → 目标${g.targetScore}/${g.fullScore}分，信心等级${g.confidence}/10，预期B目标${g.bTarget}分，趋势${g.trend === 'up' ? '上升' : g.trend === 'down' ? '下降' : '平稳'}，差距+${g.gap}分，预期提分+${g.improvement}分`
).join('\n')}

计划周期：${planWeeks}周，每日学习时长：${dailyHours}小时，每周总学习时间：${dailyHours * 7}小时

【输出格式要求 - 必须严格遵循】

## 📊 整体分析
1. 各科目提分难度评估（结合当前分数占比和边际递减效应）
2. 总体目标可行性判断（预期总提分是否合理）
3. 趋势分析（哪些科目在进步，哪些在退步，需要警惕）

## 📈 各科提分策略

| 科目 | 提分难度 | 时间分配比例 | 核心突破点 | 具体策略 |
|------|----------|-------------|-----------|----------|
| 数学 | 较高 | 30% | 函数综合 | 每天专项训练1道压轴题 |

## 🎯 优先级排序
按"提分性价比"排序（提分空间×信心指数/所需时间），说明为什么这样排

## 📅 周计划表

| 周次 | 重点科目 | 学习内容 | 周目标 | 预计时长 | 完成打勾 |
|------|----------|----------|--------|----------|----------|
| 第1周 | 数学 | 函数基础复习+练习 | 掌握基本概念 | ${Math.round(dailyHours * 7 * 0.3)}h | □ |

（必须填写完整的${planWeeks}周计划，每周都要有具体内容）

## 📝 日任务清单

| 日期 | 科目 | 任务内容 | 时长 | 完成打勾 |
|------|------|----------|------|----------|
| 周一 | 数学 | 函数练习题3道 | 45min | □ |
| 周二 | 英语 | 单词背诵50个+阅读1篇 | 60min | □ |

（必须填写完整一周7天的任务，每天都要有具体任务，格式：周一到周日）

## 📚 知识点关联推荐

| 科目 | 核心知识点 | 推荐练习类型 | 难度 | 预计提分 |
|------|-----------|-------------|------|----------|
| 数学 | 二次函数 | 历年真题函数大题 | ⭐⭐⭐ | 5-8分 |

（为每个科目列出2-3个核心知识点及对应练习）

## 💪 心理建设
- 针对信心指数较低的科目，给出具体的信心提升建议
- 如何应对考试焦虑和目标压力
- 每日激励建议

## ⚠️ 风险提示
- 最可能达不到目标的科目及原因
- 需要额外关注的薄弱环节
- 时间分配冲突的解决方案

【注意事项】
1. 用简洁清晰的格式输出，适合${gradeGroup}学生阅读
2. 不要使用特殊字符或下划线命名，使用中文标题
3. 表格必须使用标准markdown格式
4. 策略要具体到可执行的行动，不要空泛建议
5. 考虑${gradeGroup}学生的认知水平和学习特点
6. 周计划表必须完整覆盖${planWeeks}周
7. 日任务清单必须覆盖一周7天，每天任务要具体可执行
8. 每日任务总时长要符合每日${dailyHours}小时的设定`

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
    console.error('ABC plan API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
