import { describe, it, expect } from 'vitest'

function parseUnderstandingScore(content: string): number | null {
  const match = content.match(/\[理解度:(\d)\/5\]/)
  return match ? parseInt(match[1]) : null
}

function calcAvgUnderstanding(history: number[]): string {
  return history.length > 0
    ? (history.reduce((a, b) => a + b, 0) / history.length).toFixed(1)
    : '0'
}

describe('parseUnderstandingScore', () => {
  it('should extract understanding score from AI response', () => {
    expect(parseUnderstandingScore('很好！[理解度:4/5]')).toBe(4)
  })

  it('should extract score 5', () => {
    expect(parseUnderstandingScore('[理解度:5/5]')).toBe(5)
  })

  it('should extract score 1', () => {
    expect(parseUnderstandingScore('需要改进 [理解度:1/5]')).toBe(1)
  })

  it('should return null for no match', () => {
    expect(parseUnderstandingScore('没有理解度标记')).toBeNull()
  })

  it('should parse out-of-range score (regex does not validate range)', () => {
    expect(parseUnderstandingScore('[理解度:6/5]')).toBe(6)
  })
})

describe('calcAvgUnderstanding', () => {
  it('should calculate average', () => {
    expect(calcAvgUnderstanding([3, 4, 5])).toBe('4.0')
  })

  it('should handle single value', () => {
    expect(calcAvgUnderstanding([3])).toBe('3.0')
  })

  it('should handle empty array', () => {
    expect(calcAvgUnderstanding([])).toBe('0')
  })

  it('should calculate decimal average', () => {
    expect(calcAvgUnderstanding([3, 4])).toBe('3.5')
  })
})
