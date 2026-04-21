import { describe, it, expect } from 'vitest'

function calcRushPlan(subjects: { name: string; currentScore: number; fullScore: number; targetScore: number }[], daysUntilExam: number, dailyHours: number) {
  const subjectsInfo = subjects.map(s => {
    const gap = s.targetScore - s.currentScore
    const gapPercent = ((gap / s.fullScore) * 100).toFixed(1)
    return { name: s.name, gap, gapPercent }
  })

  const totalCurrent = subjects.reduce((sum, s) => sum + s.currentScore, 0)
  const totalTarget = subjects.reduce((sum, s) => sum + s.targetScore, 0)
  const totalFull = subjects.reduce((sum, s) => sum + s.fullScore, 0)
  const totalGap = totalTarget - totalCurrent
  const totalGapPercent = ((totalGap / totalFull) * 100).toFixed(1)
  const totalHours = daysUntilExam * dailyHours

  return { subjectsInfo, totalCurrent, totalTarget, totalFull, totalGap, totalGapPercent, totalHours }
}

describe('calcRushPlan', () => {
  const subjects = [
    { name: '数学', currentScore: 80, fullScore: 120, targetScore: 105 },
    { name: '英语', currentScore: 85, fullScore: 120, targetScore: 110 },
  ]

  it('should calculate totalCurrent correctly', () => {
    expect(calcRushPlan(subjects, 30, 2).totalCurrent).toBe(165)
  })

  it('should calculate totalTarget correctly', () => {
    expect(calcRushPlan(subjects, 30, 2).totalTarget).toBe(215)
  })

  it('should calculate totalFull correctly', () => {
    expect(calcRushPlan(subjects, 30, 2).totalFull).toBe(240)
  })

  it('should calculate totalGap correctly', () => {
    expect(calcRushPlan(subjects, 30, 2).totalGap).toBe(50)
  })

  it('should calculate totalHours correctly', () => {
    expect(calcRushPlan(subjects, 30, 2).totalHours).toBe(60)
    expect(calcRushPlan(subjects, 14, 3).totalHours).toBe(42)
  })

  it('should calculate per-subject gap', () => {
    const result = calcRushPlan(subjects, 30, 2)
    expect(result.subjectsInfo[0].gap).toBe(25)
    expect(result.subjectsInfo[1].gap).toBe(25)
  })

  it('should calculate gapPercent correctly', () => {
    const result = calcRushPlan(subjects, 30, 2)
    expect(result.totalGapPercent).toBe('20.8')
  })

  it('should handle single subject', () => {
    const single = [{ name: '数学', currentScore: 80, fullScore: 100, targetScore: 95 }]
    const result = calcRushPlan(single, 7, 4)
    expect(result.totalGap).toBe(15)
    expect(result.totalHours).toBe(28)
  })
})
