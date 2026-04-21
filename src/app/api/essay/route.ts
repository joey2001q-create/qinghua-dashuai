import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAIStream } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { grade, essayType, title, content } = await request.json()

    const prompt = `你是清华大帅，一位资深语文教师和作文批改专家。请批改以下作文：

【学生信息】
- 年级：${grade}
- 作文类型：${essayType}
${title ? `- 题目：${title}` : ''}

【作文内容】
${content}

【输出格式要求】

## 📊 总体评价
优点和不足的总体评价

## 📝 内容分析
主题、立意、选材分析

## 🏗️ 结构分析
开头、结尾、过渡、段落安排分析

## 💬 语言分析
词汇、句式、修辞分析

## ✏️ 具体修改建议
指出具体句子并给出修改方案

## 📈 参考评分
满分100分制，给出预估分数

## 💡 提升建议
帮助学生提高写作能力的建议

【注意事项】
1. 用清晰的格式输出
2. 不要使用特殊字符或下划线命名，使用中文标题`

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
    console.error('Essay API error:', error)
    return NextResponse.json(
      { content: '批改失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
