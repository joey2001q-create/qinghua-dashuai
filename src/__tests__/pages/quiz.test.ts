import { describe, it, expect } from 'vitest'

function calcQuizAccuracy(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0
}

function adjustDifficulty(currentDifficulty: number, isCorrect: boolean): number {
  if (isCorrect && currentDifficulty < 3) return currentDifficulty + 1
  if (!isCorrect && currentDifficulty > 1) return currentDifficulty - 1
  return currentDifficulty
}

function updateKnowledgeStats(
  prev: Record<string, { correct: number; total: number }>,
  knowledgePoint: string,
  isCorrect: boolean
): Record<string, { correct: number; total: number }> {
  const existing = prev[knowledgePoint] || { correct: 0, total: 0 }
  return {
    ...prev,
    [knowledgePoint]: {
      correct: existing.correct + (isCorrect ? 1 : 0),
      total: existing.total + 1,
    },
  }
}

describe('calcQuizAccuracy', () => {
  it('should calculate accuracy percentage', () => {
    expect(calcQuizAccuracy(8, 10)).toBe(80)
  })

  it('should round correctly', () => {
    expect(calcQuizAccuracy(1, 3)).toBe(33)
  })

  it('should return 0 for zero total', () => {
    expect(calcQuizAccuracy(0, 0)).toBe(0)
  })

  it('should return 100 for perfect score', () => {
    expect(calcQuizAccuracy(10, 10)).toBe(100)
  })
})

describe('adjustDifficulty', () => {
  it('should increase difficulty on correct answer', () => {
    expect(adjustDifficulty(1, true)).toBe(2)
    expect(adjustDifficulty(2, true)).toBe(3)
  })

  it('should not exceed max difficulty 3', () => {
    expect(adjustDifficulty(3, true)).toBe(3)
  })

  it('should decrease difficulty on wrong answer', () => {
    expect(adjustDifficulty(3, false)).toBe(2)
    expect(adjustDifficulty(2, false)).toBe(1)
  })

  it('should not go below min difficulty 1', () => {
    expect(adjustDifficulty(1, false)).toBe(1)
  })
})

describe('updateKnowledgeStats', () => {
  it('should add new knowledge point', () => {
    const result = updateKnowledgeStats({}, '函数', true)
    expect(result['函数']).toEqual({ correct: 1, total: 1 })
  })

  it('should update existing knowledge point', () => {
    const prev = { '函数': { correct: 2, total: 3 } }
    const result = updateKnowledgeStats(prev, '函数', true)
    expect(result['函数']).toEqual({ correct: 3, total: 4 })
  })

  it('should track wrong answers', () => {
    const result = updateKnowledgeStats({}, '几何', false)
    expect(result['几何']).toEqual({ correct: 0, total: 1 })
  })

  it('should handle multiple knowledge points', () => {
    let stats: Record<string, { correct: number; total: number }> = {}
    stats = updateKnowledgeStats(stats, '函数', true)
    stats = updateKnowledgeStats(stats, '几何', false)
    stats = updateKnowledgeStats(stats, '函数', false)
    expect(stats['函数']).toEqual({ correct: 1, total: 2 })
    expect(stats['几何']).toEqual({ correct: 0, total: 1 })
  })
})
