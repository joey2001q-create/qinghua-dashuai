import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAIStream } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { grade, examType, subject, fullScore, currentScore, targetScore, text } = await request.json()

    const prompt = `你是清华大帅，一位资深试卷分析专家。请分析学生的考试情况：

【学生信息】
- 年级：${grade}
- 考试类型：${examType || '未指定'}
- 学科：${subject}
- 满分：${fullScore}
- 本次得分：${currentScore}
- 下次目标：${targetScore || '未设定'}
${text ? `- 学生描述：${text}` : ''}

【输出格式要求】

## 📊 整体分析
简要分析学生考试表现

## 🔍 失分原因诊断
分析主要失分原因

## 📚 薄弱知识点
识别需要加强的知识点

## 📈 提分策略
给出具体的提分建议

## 💡 下阶段学习重点
列出重点学习内容

【注意事项】
1. 用清晰的格式输出，帮助学生针对性提升
2. 不要使用特殊字符或下划线命名，使用中文标题
3. 表格必须使用标准markdown格式`

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
    console.error('Analyze paper API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
