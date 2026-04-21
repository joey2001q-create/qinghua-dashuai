export const AI_CONFIG = {
  API_KEY: '7823359434488ac3bb15a321400f225f:NjkwNjVkOGM3MDk5NTc3YTg4ZTUyNmI5',
  API_URL: 'https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions',
  MODEL_ID: 'astron-code-latest',
}

export async function* callAIStream(prompt: string): AsyncGenerator<string> {
  const response = await fetch(AI_CONFIG.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AI_CONFIG.API_KEY}`,
    },
    body: JSON.stringify({
      model: AI_CONFIG.MODEL_ID,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 4096,
      stream: true,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('AI API error:', errorText)
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
        // skip invalid JSON
      }
    }
  }
}

export async function callAI(prompt: string, temperature = 0.7): Promise<string> {
  const response = await fetch(AI_CONFIG.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AI_CONFIG.API_KEY}`,
    },
    body: JSON.stringify({
      model: AI_CONFIG.MODEL_ID,
      messages: [{ role: 'user', content: prompt }],
      temperature,
      max_tokens: 4096,
      stream: false,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('AI API error:', errorText)
    throw new Error('AI API request failed')
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || ''
}
