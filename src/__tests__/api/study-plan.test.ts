import { describe, it, expect } from 'vitest'

const weakLabels: Record<string, string> = {
  knowledge: '知识漏洞',
  technique: '解题技巧',
  careless: '粗心失误',
  application: '综合应用',
}

function calcPhaseDays(days: number) {
  const phase1Days = Math.ceil(days * 0.35)
  const phase2Days = Math.ceil(days * 0.40)
  const phase3Days = days - phase1Days - phase2Days
  return { phase1Days, phase2Days, phase3Days }
}

describe('weakLabels mapping', () => {
  it('should map all known weakness keys', () => {
    expect(weakLabels.knowledge).toBe('知识漏洞')
    expect(weakLabels.technique).toBe('解题技巧')
    expect(weakLabels.careless).toBe('粗心失误')
    expect(weakLabels.application).toBe('综合应用')
  })

  it('should return undefined for unknown key', () => {
    expect(weakLabels.unknown).toBeUndefined()
  })
})

describe('calcPhaseDays', () => {
  it('should split 30 days into phases', () => {
    const result = calcPhaseDays(30)
    expect(result.phase1Days).toBe(11)
    expect(result.phase2Days).toBe(12)
    expect(result.phase3Days).toBe(7)
    expect(result.phase1Days + result.phase2Days + result.phase3Days).toBe(30)
  })

  it('should split 10 days into phases', () => {
    const result = calcPhaseDays(10)
    expect(result.phase1Days).toBe(4)
    expect(result.phase2Days).toBe(4)
    expect(result.phase3Days).toBe(2)
    expect(result.phase1Days + result.phase2Days + result.phase3Days).toBe(10)
  })

  it('should split 7 days into phases', () => {
    const result = calcPhaseDays(7)
    expect(result.phase1Days + result.phase2Days + result.phase3Days).toBe(7)
  })

  it('should handle 1 day', () => {
    const result = calcPhaseDays(1)
    expect(result.phase1Days + result.phase2Days + result.phase3Days).toBe(1)
  })

  it('should always sum to total days', () => {
    for (let d = 1; d <= 100; d++) {
      const r = calcPhaseDays(d)
      expect(r.phase1Days + r.phase2Days + r.phase3Days).toBe(d)
    }
  })

  it('phase1 should be approximately 35% of total', () => {
    const result = calcPhaseDays(100)
    expect(result.phase1Days).toBe(35)
  })

  it('phase2 should be approximately 40% of total', () => {
    const result = calcPhaseDays(100)
    expect(result.phase2Days).toBe(40)
  })
})
