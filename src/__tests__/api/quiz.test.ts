import { describe, it, expect } from 'vitest'

const difficultyMap: Record<number, string> = {
  1: '基础题（考查基本概念和简单应用）',
  2: '提高题（考查综合应用和变形）',
  3: '挑战题（考查深度理解和创新思维）',
}

function parseQuizResponse(content: string, difficulty: number) {
  try {
    const quiz = JSON.parse(content)
    return quiz
  } catch {
    return {
      question: '题目生成失败，请重试',
      options: ['A', 'B', 'C', 'D'],
      correctIndex: 0,
      explanation: '请重新生成题目',
      knowledgePoint: '未知',
      difficulty: difficulty || 1,
    }
  }
}

describe('difficultyMap', () => {
  it('should map 1 to basic', () => {
    expect(difficultyMap[1]).toContain('基础题')
  })

  it('should map 2 to intermediate', () => {
    expect(difficultyMap[2]).toContain('提高题')
  })

  it('should map 3 to challenge', () => {
    expect(difficultyMap[3]).toContain('挑战题')
  })

  it('should fallback to basic for unknown difficulty', () => {
    expect(difficultyMap[4] || difficultyMap[1]).toContain('基础题')
  })
})

describe('parseQuizResponse', () => {
  it('should parse valid JSON', () => {
    const content = JSON.stringify({
      question: '1+1=?',
      options: ['1', '2', '3', '4'],
      correctIndex: 1,
      explanation: '1+1=2',
      knowledgePoint: '加法',
      difficulty: 1,
    })
    const result = parseQuizResponse(content, 1)
    expect(result.question).toBe('1+1=?')
    expect(result.correctIndex).toBe(1)
  })

  it('should return fallback for invalid JSON', () => {
    const result = parseQuizResponse('not json', 2)
    expect(result.question).toBe('题目生成失败，请重试')
    expect(result.difficulty).toBe(2)
  })

  it('should return fallback with default difficulty 1', () => {
    const result = parseQuizResponse('bad', 0)
    expect(result.difficulty).toBe(1)
  })
})
