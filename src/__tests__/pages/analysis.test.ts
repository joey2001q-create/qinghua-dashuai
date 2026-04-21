import { describe, it, expect } from 'vitest'

function validateAnalysisScores(currentScore: string, totalScore: string, questionScores: { type: string; totalScore: string; lostScore: string }[]) {
  const numCurrent = Number(currentScore)
  const numTotal = Number(totalScore)

  if (numTotal && numCurrent < 0) return '本次得分不能为负数'
  if (numTotal && numCurrent > numTotal) return '本次得分不能超过满分'

  const hasInvalidScore = questionScores.some(s => {
    if (!s.totalScore && !s.lostScore) return false
    if (Number(s.lostScore) < 0 || Number(s.totalScore) <= 0) return true
    if (Number(s.lostScore) > Number(s.totalScore)) return true
    return false
  })
  if (hasInvalidScore) return '失分数据有误'

  return null
}

function calcAnalysisData(totalScore: string, currentScore: string, questionScores: { type: string; totalScore: string; lostScore: string }[]) {
  const numTotal = Number(totalScore) || 100
  const numCurrent = Number(currentScore) || 0
  const totalLost = numTotal - numCurrent

  const pieData = questionScores
    .filter(s => s.lostScore && Number(s.lostScore) > 0)
    .map(s => ({ name: s.type, value: Number(s.lostScore) }))

  const barData = questionScores
    .filter(s => s.totalScore && Number(s.totalScore) > 0)
    .map(s => ({
      name: s.type,
      得分: Number(s.totalScore) - Number(s.lostScore || 0),
      失分: Number(s.lostScore || 0),
    }))

  return { numTotal, numCurrent, totalLost, pieData, barData }
}

describe('validateAnalysisScores', () => {
  it('should pass valid scores', () => {
    expect(validateAnalysisScores('85', '100', [])).toBeNull()
  })

  it('should reject negative current score', () => {
    expect(validateAnalysisScores('-5', '100', [])).toBe('本次得分不能为负数')
  })

  it('should reject current score exceeding total', () => {
    expect(validateAnalysisScores('110', '100', [])).toBe('本次得分不能超过满分')
  })

  it('should reject negative lost score', () => {
    expect(validateAnalysisScores('85', '100', [
      { type: '选择题', totalScore: '40', lostScore: '-5' },
    ])).toBe('失分数据有误')
  })

  it('should reject lost score exceeding total', () => {
    expect(validateAnalysisScores('85', '100', [
      { type: '选择题', totalScore: '40', lostScore: '50' },
    ])).toBe('失分数据有误')
  })

  it('should allow empty question scores', () => {
    expect(validateAnalysisScores('85', '100', [
      { type: '选择题', totalScore: '', lostScore: '' },
    ])).toBeNull()
  })
})

describe('calcAnalysisData', () => {
  const questionScores = [
    { type: '选择题', totalScore: '40', lostScore: '5' },
    { type: '填空题', totalScore: '30', lostScore: '10' },
    { type: '解答题', totalScore: '30', lostScore: '0' },
  ]

  it('should calculate totalLost', () => {
    expect(calcAnalysisData('100', '85', []).totalLost).toBe(15)
  })

  it('should generate pieData for non-zero lost scores', () => {
    const result = calcAnalysisData('100', '75', questionScores)
    expect(result.pieData).toHaveLength(2)
    expect(result.pieData[0].name).toBe('选择题')
    expect(result.pieData[0].value).toBe(5)
  })

  it('should generate barData for all question types with totalScore', () => {
    const result = calcAnalysisData('100', '75', questionScores)
    expect(result.barData).toHaveLength(3)
    expect(result.barData[0].得分).toBe(35)
    expect(result.barData[0].失分).toBe(5)
  })

  it('should default totalScore to 100 when empty', () => {
    expect(calcAnalysisData('', '85', []).numTotal).toBe(100)
  })
})
