import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  generateId,
  formatDate,
  formatDateShort,
  getDaysUntil,
  classNames,
  sleep,
  grades,
  subjects,
  examTypes,
} from '@/lib/utils'

describe('generateId', () => {
  it('should return a string', () => {
    expect(typeof generateId()).toBe('string')
  })

  it('should return unique ids on successive calls', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()))
    expect(ids.size).toBe(100)
  })

  it('should have length > 0', () => {
    expect(generateId().length).toBeGreaterThan(0)
  })
})

describe('formatDate', () => {
  it('should format a Date object to zh-CN long format', () => {
    const result = formatDate(new Date(2026, 3, 20))
    expect(result).toContain('2026')
    expect(result).toContain('4月')
    expect(result).toContain('20日')
  })

  it('should format a date string', () => {
    const result = formatDate('2026-04-20')
    expect(result).toContain('2026')
  })

  it('should handle ISO string input', () => {
    const result = formatDate('2026-12-25T00:00:00.000Z')
    expect(result).toContain('2026')
  })
})

describe('formatDateShort', () => {
  it('should format date to short zh-CN format', () => {
    const result = formatDateShort(new Date(2026, 3, 20))
    expect(result).toContain('4月')
    expect(result).toContain('20日')
  })

  it('should format a date string', () => {
    const result = formatDateShort('2026-04-20')
    expect(result).toContain('4月')
  })
})

describe('getDaysUntil', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-04-20T00:00:00.000Z'))
  })

  it('should return 0 for today', () => {
    expect(getDaysUntil('2026-04-20')).toBe(0)
  })

  it('should return positive for future dates', () => {
    expect(getDaysUntil('2026-04-25')).toBe(5)
  })

  it('should return negative for past dates', () => {
    expect(getDaysUntil('2026-04-15')).toBeLessThan(0)
  })

  it('should return 1 for tomorrow', () => {
    expect(getDaysUntil('2026-04-21')).toBe(1)
  })

  it('should handle far future dates', () => {
    expect(getDaysUntil('2027-04-20')).toBe(365)
  })

  afterEach(() => {
    vi.useRealTimers()
  })
})

describe('classNames', () => {
  it('should join string arguments', () => {
    expect(classNames('a', 'b', 'c')).toBe('a b c')
  })

  it('should filter out falsy values', () => {
    expect(classNames('a', false, 'b', undefined, 'c')).toBe('a b c')
  })

  it('should return empty string for all falsy', () => {
    expect(classNames(false, undefined, '')).toBe('')
  })

  it('should handle single argument', () => {
    expect(classNames('active')).toBe('active')
  })

  it('should handle no arguments', () => {
    expect(classNames()).toBe('')
  })
})

describe('sleep', () => {
  it('should resolve after specified ms', async () => {
    vi.useFakeTimers()
    const promise = sleep(1000)
    vi.advanceTimersByTime(1000)
    await expect(promise).resolves.toBeUndefined()
    vi.useRealTimers()
  })
})

describe('constants', () => {
  it('grades should contain 12 items', () => {
    expect(grades).toHaveLength(12)
  })

  it('grades should cover primary, middle and high school', () => {
    expect(grades).toContain('小一')
    expect(grades).toContain('初三')
    expect(grades).toContain('高三')
  })

  it('subjects should contain 9 items', () => {
    expect(subjects).toHaveLength(9)
  })

  it('subjects should contain core subjects', () => {
    expect(subjects).toContain('数学')
    expect(subjects).toContain('语文')
    expect(subjects).toContain('英语')
  })

  it('examTypes should contain 5 items', () => {
    expect(examTypes).toHaveLength(5)
  })

  it('examTypes should contain common exam types', () => {
    expect(examTypes).toContain('期中')
    expect(examTypes).toContain('期末')
  })
})
