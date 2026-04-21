import { describe, it, expect } from 'vitest'
import { calcBTarget, getTrend } from './abc-helpers'

describe('calcBTarget', () => {
  it('should return currentScore when confidence is 0', () => {
    expect(calcBTarget(80, 100, 120, 0)).toBe(80)
  })

  it('should return targetScore when confidence is 10 and currentScore is 0', () => {
    expect(calcBTarget(0, 100, 100, 10)).toBe(100)
  })

  it('should apply diminishing returns at high scores', () => {
    const low = calcBTarget(30, 100, 100, 5)
    const high = calcBTarget(80, 100, 100, 5)
    const lowImprovement = low - 30
    const highImprovement = high - 80
    expect(lowImprovement).toBeGreaterThan(highImprovement)
  })

  it('should increase B-target with higher confidence', () => {
    const c5 = calcBTarget(80, 100, 120, 5)
    const c8 = calcBTarget(80, 100, 120, 8)
    const c10 = calcBTarget(80, 100, 120, 10)
    expect(c5).toBeLessThan(c8)
    expect(c8).toBeLessThan(c10)
  })

  it('should not exceed targetScore at max confidence when currentScore > 0', () => {
    const result = calcBTarget(80, 100, 120, 10)
    expect(result).toBeLessThanOrEqual(100)
  })

  it('should handle equal current and target', () => {
    expect(calcBTarget(80, 80, 100, 5)).toBe(80)
  })

  it('should handle zero fullScore gracefully', () => {
    const result = calcBTarget(0, 100, 0, 5)
    expect(isNaN(result)).toBe(true)
  })

  it('should produce reasonable result for typical scenario', () => {
    const result = calcBTarget(80, 105, 120, 7)
    expect(result).toBeGreaterThan(80)
    expect(result).toBeLessThanOrEqual(105)
  })

  it('should return result rounded to 1 decimal', () => {
    const result = calcBTarget(73, 95, 100, 6)
    const rounded = Math.round(result * 10) / 10
    expect(result).toBe(rounded)
  })
})

describe('getTrend', () => {
  it('should return "up" when current exceeds last by 3+', () => {
    expect(getTrend(80, 77)).toBe('up')
    expect(getTrend(90, 80)).toBe('up')
  })

  it('should return "down" when last exceeds current by 3+', () => {
    expect(getTrend(77, 80)).toBe('down')
    expect(getTrend(70, 80)).toBe('down')
  })

  it('should return "stable" when difference is less than 3', () => {
    expect(getTrend(80, 78)).toBe('stable')
    expect(getTrend(78, 80)).toBe('stable')
    expect(getTrend(80, 80)).toBe('stable')
  })

  it('should return "up" at exactly 3 difference', () => {
    expect(getTrend(83, 80)).toBe('up')
  })

  it('should return "down" at exactly 3 difference', () => {
    expect(getTrend(80, 83)).toBe('down')
  })

  it('should return "stable" at exactly 2 difference', () => {
    expect(getTrend(82, 80)).toBe('stable')
    expect(getTrend(80, 82)).toBe('stable')
  })
})
