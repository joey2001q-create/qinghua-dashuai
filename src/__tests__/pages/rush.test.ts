import { describe, it, expect } from 'vitest'

function toggleSubject(
  subject: string,
  selected: string[],
  scores: { subject: string; currentScore: string; fullScore: string; targetScore: string }[]
): { selected: string[]; scores: typeof scores } {
  if (selected.includes(subject)) {
    return {
      selected: selected.filter(s => s !== subject),
      scores: scores.filter(s => s.subject !== subject),
    }
  } else if (selected.length < 3) {
    return {
      selected: [...selected, subject],
      scores: [...scores, { subject, currentScore: '', fullScore: '100', targetScore: '' }],
    }
  }
  return { selected, scores }
}

function validateRushScores(subjectScores: { currentScore: string; fullScore: string; targetScore: string }[]): string | null {
  const hasInvalidScore = subjectScores.some(s => !s.currentScore || !s.targetScore || !s.fullScore)
  if (hasInvalidScore) return '请填写所有科目的分数信息'

  const hasNegative = subjectScores.some(s => Number(s.currentScore) < 0 || Number(s.targetScore) < 0 || Number(s.fullScore) <= 0)
  if (hasNegative) return '分数不能为负数，满分必须大于0'

  const hasExceedFull = subjectScores.some(s => Number(s.currentScore) > Number(s.fullScore) || Number(s.targetScore) > Number(s.fullScore))
  if (hasExceedFull) return '当前分数和目标分数不能超过满分'

  const hasInvalidTarget = subjectScores.some(s => Number(s.currentScore) >= Number(s.targetScore))
  if (hasInvalidTarget) return '目标分数必须大于当前分数'

  return null
}

describe('toggleSubject', () => {
  it('should add subject when not selected', () => {
    const result = toggleSubject('数学', [], [])
    expect(result.selected).toEqual(['数学'])
    expect(result.scores).toHaveLength(1)
  })

  it('should remove subject when already selected', () => {
    const result = toggleSubject('数学', ['数学', '英语'], [
      { subject: '数学', currentScore: '80', fullScore: '100', targetScore: '95' },
      { subject: '英语', currentScore: '85', fullScore: '100', targetScore: '90' },
    ])
    expect(result.selected).toEqual(['英语'])
    expect(result.scores).toHaveLength(1)
  })

  it('should not exceed 3 subjects', () => {
    const result = toggleSubject('物理', ['数学', '英语', '语文'], [
      { subject: '数学', currentScore: '', fullScore: '100', targetScore: '' },
      { subject: '英语', currentScore: '', fullScore: '100', targetScore: '' },
      { subject: '语文', currentScore: '', fullScore: '100', targetScore: '' },
    ])
    expect(result.selected).toHaveLength(3)
  })

  it('should initialize score entry with default fullScore 100', () => {
    const result = toggleSubject('数学', [], [])
    expect(result.scores[0].fullScore).toBe('100')
  })
})

describe('validateRushScores', () => {
  it('should pass valid scores', () => {
    expect(validateRushScores([
      { currentScore: '80', fullScore: '100', targetScore: '95' },
    ])).toBeNull()
  })

  it('should reject missing scores', () => {
    expect(validateRushScores([
      { currentScore: '', fullScore: '100', targetScore: '95' },
    ])).toBe('请填写所有科目的分数信息')
  })

  it('should reject negative scores', () => {
    expect(validateRushScores([
      { currentScore: '-5', fullScore: '100', targetScore: '95' },
    ])).toBe('分数不能为负数，满分必须大于0')
  })

  it('should reject zero fullScore', () => {
    expect(validateRushScores([
      { currentScore: '80', fullScore: '0', targetScore: '95' },
    ])).toBe('分数不能为负数，满分必须大于0')
  })

  it('should reject score exceeding fullScore', () => {
    expect(validateRushScores([
      { currentScore: '110', fullScore: '100', targetScore: '95' },
    ])).toBe('当前分数和目标分数不能超过满分')
  })

  it('should reject target <= current', () => {
    expect(validateRushScores([
      { currentScore: '95', fullScore: '100', targetScore: '90' },
    ])).toBe('目标分数必须大于当前分数')
  })

  it('should reject equal current and target', () => {
    expect(validateRushScores([
      { currentScore: '80', fullScore: '100', targetScore: '80' },
    ])).toBe('目标分数必须大于当前分数')
  })
})
