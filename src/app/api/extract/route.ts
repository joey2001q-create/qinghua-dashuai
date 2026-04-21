import { NextRequest, NextResponse } from 'next/server'

const API_KEY = '584b8f96b7040464af809e8574ae5d6a:NDQ2NDc3Zjg0MDM4Nzc3MjJiOTZiNjlh'
const API_URL = 'https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions'
const MODEL_ID = 'astron-code-latest'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function* callAIStream(prompt: string): AsyncGenerator<string> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL_ID,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 4096,
      stream: true,
    }),
  })

  if (!response.ok) {
    throw new Error('AI API request failed')
  }

  const reader = response.body?.getReader()
  if (!reader) throw new Error('No response body')

  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || !trimmed.startsWith('data: ')) continue
      if (trimmed === 'data: [DONE]') continue

      const data = trimmed.slice(6)
      try {
        const json = JSON.parse(data)
        const content = json.choices?.[0]?.delta?.content
        if (content) yield content
      } catch {
        // skip
      }
    }
  }
}

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
