import { NextRequest, NextResponse } from 'next/server'
import { callAI } from '@/lib/ai-config'
import { buildPrompt } from '@/lib/prompt-builder'

export async function POST(request: NextRequest) {
  try {
    const { grade, subject, knowledge, difficulty } = await request.json()

    const difficultyMap: Record<number, string> = {
      1: '基础题（考查基本概念和简单应用）',
      2: '提高题（考查综合应用和变形）',
      3: '挑战题（考查深度理解和创新思维）',
    }

    const difficultyDesc = difficultyMap[difficulty] || difficultyMap[1]

    const prompt = buildPrompt('quiz', {
      grade,
      subject,
      difficultyDesc,
      knowledge: knowledge || ''
    })

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt build failed' }, { status: 500 })
    }

    const content = await callAI(prompt)

    try {
      let jsonStr = content.trim()
      const codeBlockMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/)
      if (codeBlockMatch) {
        jsonStr = codeBlockMatch[1].trim()
      }
      const firstBrace = jsonStr.indexOf('{')
      const lastBrace = jsonStr.lastIndexOf('}')
      if (firstBrace !== -1 && lastBrace !== -1) {
        jsonStr = jsonStr.slice(firstBrace, lastBrace + 1)
      }
      const quiz = JSON.parse(jsonStr)
      return NextResponse.json(quiz)
    } catch (parseError) {
      console.error('JSON parse error:', parseError, 'Content:', content)
      return NextResponse.json({
        question: '题目生成失败，请重试',
        options: ['A', 'B', 'C', 'D'],
        correctIndex: 0,
        explanation: '请重新生成题目',
        knowledgePoint: '未知',
        difficulty: difficulty || 1,
      })
    }
  } catch (error) {
    console.error('Quiz API error:', error)
    return NextResponse.json(
      { question: '服务暂时不可用', options: ['A', 'B', 'C', 'D'], correctIndex: 0, explanation: '', knowledgePoint: '未知', difficulty: 1 },
      { status: 500 }
    )
  }
}
