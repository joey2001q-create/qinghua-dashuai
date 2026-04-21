import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAIStream } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { text, grade, subject } = await request.json()

    const prompt = `你是清华大帅，一位资深教育专家和${grade}${subject}教师。请分析以下考试大纲或知识点清单，检测考点覆盖情况：

【学生信息】
- 年级：${grade}
- 学科：${subject}

【考试大纲/知识点清单】
${text}

【输出格式要求】

## 📊 考点清单
列出所有知识点，并标注总数

## 📈 考点分析
| 考点 | 重要程度 | 建议掌握程度 | 学习优先级 | 考试频率 |
|------|----------|--------------|------------|----------|
| ... | 高/中/低 | 精通/熟练/了解 | 1 | 必考/常考/偶考 |

## 🔍 重点考点解读
对高频考点和重点考点进行详细解读

## 📋 考点分类
按知识模块分类整理

## 💡 复习建议
根据${grade}${subject}的考试特点，给出针对性复习建议：
1. 优先复习的高频考点
2. 容易失分的考点
3. 考点之间的关联性
4. 推荐的复习顺序

【注意事项】
1. 根据${grade}学生的认知水平调整考点深度
2. 用清晰的表格或列表格式输出
3. 不要使用特殊字符或下划线命名，使用中文标题
4. 表格必须使用标准markdown格式，列对齐用|分隔`

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
    console.error('Knowledge points API error:', error)
    return NextResponse.json(
      { content: '分析失败，请稍后重试。' },
      { status: 500 }
    )
  }
}
