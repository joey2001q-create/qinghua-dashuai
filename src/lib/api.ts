const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function chat(messages: ChatMessage[], systemPrompt?: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, systemPrompt }),
    })
    
    if (!response.ok) {
      throw new Error('Chat request failed')
    }
    
    const data = await response.json()
    return data.content
  } catch (error) {
    console.error('Chat error:', error)
    throw error
  }
}

export async function analyzePaper(data: {
  grade: string
  examType: string
  subject: string
  fullScore: number
  currentScore: number
  targetScore: number
  images?: string[]
  text?: string
}): Promise<string> {
  const response = await fetch('/api/analyze-paper', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Paper analysis failed')
  }
  
  const result = await response.json()
  return result.content
}

export async function generateStudyPlan(data: {
  grade: string
  subjects: string[]
  examName: string
  examDate: string
  currentScore: number
  targetScore: number
  dailyHours: number
  materials?: string
}): Promise<string> {
  const response = await fetch('/api/study-plan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Study plan generation failed')
  }
  
  const result = await response.json()
  return result.content
}

export async function checkKnowledgePoints(text: string): Promise<string> {
  const response = await fetch('/api/knowledge-points', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  
  if (!response.ok) {
    throw new Error('Knowledge point check failed')
  }
  
  const result = await response.json()
  return result.content
}

export async function generateQuiz(data: {
  grade: string
  subject: string
  knowledge?: string
}): Promise<string> {
  const response = await fetch('/api/quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Quiz generation failed')
  }
  
  const result = await response.json()
  return result.content
}

export async function ocrImage(imageBase64: string): Promise<string> {
  const response = await fetch('/api/ocr', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: imageBase64 }),
  })
  
  if (!response.ok) {
    throw new Error('OCR failed')
  }
  
  const result = await response.json()
  return result.text
}
