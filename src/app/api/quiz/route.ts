import { NextRequest, NextResponse } from 'next/server'
import { AI_CONFIG, callAI } from '@/lib/ai-config'

export async function POST(request: NextRequest) {
  try {
    const { grade, subject, knowledge, difficulty } = await request.json()

    const difficultyMap: Record<number, string> = {
      1: '基础题（考查基本概念和简单应用）',
      2: '提高题（考查综合应用和变形）',
      3: '挑战题（考查深度理解和创新思维）',
    }

    const difficultyDesc = difficultyMap[difficulty] || difficultyMap[1]

    const prompt = `你是一位${grade}${subject}出题专家。请出一道选择题：

年级：${grade}
学科：${subject}
难度：${difficultyDesc}
${knowledge ? `知识点范围：${knowledge}` : ''}

请严格按照以下JSON格式输出（不要有其他内容）：
{
  "question": "题目内容",
  "options": ["选项A", "选项B", "选项C", "选项D"],
  "correctIndex": 0,
  "explanation": "答案解析",
  "knowledgePoint": "本题考查的知识点名称",
  "difficulty": ${difficulty || 1}
}

要求：
1. 题目难度符合${difficultyDesc}的要求
2. 题目符合${grade}学生的认知水平
3. 选项要有迷惑性，干扰项要合理
4. 解析要详细说明解题思路和方法
5. correctIndex是正确答案的索引（0-3）
6. knowledgePoint是简洁的知识点名称（2-6个字）`

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
