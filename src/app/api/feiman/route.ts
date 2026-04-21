import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAIStream } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { grade, subject, topic } = await request.json()

    if (!grade || !subject || !topic) {
      return NextResponse.json(
        { content: '请提供完整的年级、学科和知识点信息。' },
        { status: 400 }
      )
    }

    const prompt = `你是清华大帅，一位经验丰富的${grade}${subject}老师。学生要学习"${topic}"这个知识点。

【重要校验】
首先判断"${topic}"是否属于${subject}学科的知识点：
- 如果明显不属于（如：选择数学但问古诗词、选择语文但问勾股定理），请在开头明确指出："⚠️ 提示：您输入的知识点【${topic}】似乎不属于${subject}学科，建议选择正确的学科后重新学习。"
- 如果勉强相关或不确定，可以继续但提醒学生注意
- 如果确实属于，则正常教学

【输出格式要求】

## 📖 知识点介绍
用简洁易懂的方式介绍这个知识点，适合${grade}学生的认知水平

## 🎯 核心概念
列出核心概念、公式或定义

## 💡 理解要点
帮助学生理解的关键点，用类比或生活实例解释

## 🤔 引导问题
提出2-3个引导性问题，激发学生思考：
1. ...
2. ...
3. ...

## 📝 讲解提示
给学生一些讲解方向的建议，告诉他们应该从哪些方面来讲解这个知识点

【注意事项】
1. 用学生容易理解的语言
2. 适合${grade}学生的认知水平
3. 不要使用特殊字符或下划线命名，使用中文标题
4. 表格必须使用标准markdown格式`

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
    console.error('Feiman API error:', error)
    return NextResponse.json(
      { content: '生成失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
