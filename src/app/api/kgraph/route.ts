import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG } from '@/lib/ai-config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const graphTypePrompts: Record<string, string> = {
  mindmap: '流程图形式的思维导图，展示知识点的层级结构',
  flow: '流程图，展示知识点的流程或步骤',
  structure: '结构图，展示知识点的组成结构',
  timeline: '时间线，展示知识点的发展历程',
  compare: '对比表，展示相关概念的对比',
  diagram: '示意图，展示知识点的原理或关系',
  auto: 'AI根据知识点特点选择最合适的图表类型',
}

export async function POST(request: NextRequest) {
  try {
    const { grade, subject, graphType, topic } = await request.json()

    const graphTypeDesc = graphTypePrompts[graphType] || graphTypePrompts.auto

    const systemPrompt = `你是一位知识图谱专家，擅长将知识点可视化。请为${grade}${subject}的"${topic}"知识点生成可视化图解。

【重要】Mermaid代码规范（必须严格遵守）：
1. 只使用 flowchart TD 或 flowchart LR，不要使用 mindmap、timeline 等不稳定的图表类型
2. 节点ID只能用英文字母、数字和下划线，如 A、B1、node_1
3. 节点内容用引号包裹，如 A["中文内容"]
4. 不要在节点内容中使用换行符<br/>，改用简短描述
5. 连接线使用 --> 或 ---，不要使用复杂语法
6. 子图使用 subgraph ... end

【正确示例】：
\`\`\`mermaid
flowchart TD
    A["知识点"]
    B["子知识点1"]
    C["子知识点2"]
    A --> B
    A --> C
\`\`\`

【错误示例】（禁止使用）：
- mindmap（不支持）
- A[中文不加引号]（会解析失败）
- 节点ID包含中文或特殊字符

输出格式：
\`\`\`mermaid
flowchart TD
    [规范的Mermaid代码]
\`\`\`

## 图解说明
[文字解释]

## 核心要点
- 要点1
- 要点2`

    const response = await fetch(AI_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_CONFIG.MODEL_ID,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `请为"${topic}"生成知识图谱，图表类型：${graphTypeDesc}` }
        ],
        temperature: 0.7,
        max_tokens: 4096,
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error('AI API request failed')
    }

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) {
          controller.close()
          return
        }

        const decoder = new TextDecoder()
        let buffer = ''

        try {
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
                if (content) {
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
                }
              } catch { /* skip */ }
            }
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
    console.error('KGraph API error:', error)
    return NextResponse.json(
      { content: '抱歉，服务暂时不可用，请稍后再试。' },
      { status: 500 }
    )
  }
}
