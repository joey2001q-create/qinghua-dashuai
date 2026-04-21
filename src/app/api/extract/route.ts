import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAIStream } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { text, grade, subject } = await request.json()

    if (!text || !text.trim()) {
      return NextResponse.json({ result: null, error: '请提供文本内容' }, { status: 400 })
    }

    const prompt = `你是一个专业的教育内容分析助手。请分析以下OCR识别的文本内容，提取结构化信息。

文本内容：
"""
${text}
"""

请按以下JSON格式输出（只输出JSON，不要其他内容）：
{
  "type": "试卷" | "作业" | "笔记" | "教材" | "其他",
  "subject": "科目名称",
  "questions": [
    {
      "number": "题号",
      "content": "题目内容",
      "score": 分值(数字，如果无法确定填null),
      "type": "选择题" | "填空题" | "解答题" | "判断题" | "作文" | "其他",
      "difficulty": "简单" | "中等" | "困难",
      "knowledgePoints": ["知识点1", "知识点2"]
    }
  ],
  "summary": {
    "totalScore": 总分(数字，如果无法确定填null),
    "questionCount": 题目总数,
    "mainTopics": ["主要知识点1", "主要知识点2"]
  }
}

注意：
1. 如果文本不是试卷或作业，questions可以为空数组
2. 尽可能准确地识别题目类型和知识点
3. 分值如果无法确定，填null
4. 只输出JSON，不要输出任何其他文字`

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let fullContent = ''
          for await (const chunk of callAIStream(prompt)) {
            fullContent += chunk
          }
          
          try {
            const jsonMatch = fullContent.match(/\{[\s\S]*\}/)
            if (jsonMatch) {
              const result = JSON.parse(jsonMatch[0])
              controller.enqueue(encoder.encode(JSON.stringify({ result })))
            } else {
              controller.enqueue(encoder.encode(JSON.stringify({ result: null, raw: fullContent })))
            }
          } catch {
            controller.enqueue(encoder.encode(JSON.stringify({ result: null, raw: fullContent })))
          }
        } catch (error) {
          console.error('Stream error:', error)
          controller.enqueue(encoder.encode(JSON.stringify({ result: null, error: '解析失败' })))
        } finally {
          controller.close()
        }
      },
    })

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Extract API error:', error)
    return NextResponse.json(
      { result: null, error: '解析失败，请稍后重试' },
      { status: 500 }
    )
  }
}
