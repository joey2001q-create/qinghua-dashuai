import { describe, it, expect } from 'vitest'

function calcWeakAnalysis(totalScore: number, currentScore: number, questionScores: { type: string; totalScore: number; lostScore: number }[]) {
  const totalLost = (totalScore || 0) - currentScore
  const scoreRate = totalScore ? Math.round((currentScore / totalScore) * 100) : 0

  const questionScoreInfo = questionScores && questionScores.length > 0
    ? questionScores.map(s => {
        const rate = s.totalScore > 0 ? Math.round(((s.totalScore - s.lostScore) / s.totalScore) * 100) : 0
        return { type: s.type, totalScore: s.totalScore, lostScore: s.lostScore, rate }
      })
    : []

  return { totalLost, scoreRate, questionScoreInfo }
}

describe('calcWeakAnalysis', () => {
  it('should calculate totalLost correctly', () => {
    const result = calcWeakAnalysis(100, 80, [])
    expect(result.totalLost).toBe(20)
  })

  it('should calculate scoreRate correctly', () => {
    expect(calcWeakAnalysis(100, 80, []).scoreRate).toBe(80)
    expect(calcWeakAnalysis(150, 120, []).scoreRate).toBe(80)
  })

  it('should handle zero totalScore', () => {
    const result = calcWeakAnalysis(0, 0, [])
    expect(result.scoreRate).toBe(0)
    expect(result.totalLost).toBe(0)
  })

  it('should calculate per-question-type score rate', () => {
    const result = calcWeakAnalysis(100, 80, [
      { type: '选择题', totalScore: 40, lostScore: 5 },
      { type: '填空题', totalScore: 30, lostScore: 10 },
    ])
    expect(result.questionScoreInfo[0].rate).toBe(88)
    expect(result.questionScoreInfo[1].rate).toBe(67)
  })

  it('should handle zero question totalScore', () => {
    const result = calcWeakAnalysis(100, 80, [
      { type: '其他', totalScore: 0, lostScore: 0 },
    ])
    expect(result.questionScoreInfo[0].rate).toBe(0)
  })

  it('should return 100% rate for perfect score', () => {
    const result = calcWeakAnalysis(100, 100, [])
    expect(result.scoreRate).toBe(100)
    expect(result.totalLost).toBe(0)
  })
})
