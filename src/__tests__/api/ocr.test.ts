import { describe, it, expect } from 'vitest'

function extractBase64(image: string): string {
  return image.includes(',') ? image.split(',')[1] : image
}

function parseOCRResult(result: unknown): string {
  let text = ''
  if (result && typeof result === 'object' && 'results' in result && Array.isArray((result as any).results)) {
    text = (result as any).results
      .map((item: { text?: string; words?: string }) => item.text || item.words || '')
      .filter(Boolean)
      .join('\n')
  } else if (result && typeof result === 'object' && 'data' in result && Array.isArray((result as any).data)) {
    text = (result as any).data
      .map((item: { text?: string; words?: string }) => item.text || item.words || '')
      .filter(Boolean)
      .join('\n')
  } else if (Array.isArray(result)) {
    text = result
      .map((item: { text?: string; words?: string }[]) =>
        item.map((i) => i.text || i.words || '').join('')
      )
      .filter(Boolean)
      .join('\n')
  }
  return text
}

describe('extractBase64', () => {
  it('should strip data URL prefix', () => {
    expect(extractBase64('data:image/png;base64,abc123')).toBe('abc123')
  })

  it('should return raw string if no comma', () => {
    expect(extractBase64('abc123')).toBe('abc123')
  })

  it('should handle empty string', () => {
    expect(extractBase64('')).toBe('')
  })

  it('should handle data URL with jpeg prefix', () => {
    expect(extractBase64('data:image/jpeg;base64,xyz789')).toBe('xyz789')
  })
})

describe('parseOCRResult', () => {
  it('should parse results array format', () => {
    const result = { results: [{ text: '你好' }, { text: '世界' }] }
    expect(parseOCRResult(result)).toBe('你好\n世界')
  })

  it('should parse data array format', () => {
    const result = { data: [{ words: 'Hello' }, { words: 'World' }] }
    expect(parseOCRResult(result)).toBe('Hello\nWorld')
  })

  it('should parse raw array format', () => {
    const result = [[{ text: 'A' }, { text: 'B' }], [{ text: 'C' }]]
    expect(parseOCRResult(result)).toBe('AB\nC')
  })

  it('should handle mixed text and words fields', () => {
    const result = { results: [{ text: '你好' }, { words: '世界' }] }
    expect(parseOCRResult(result)).toBe('你好\n世界')
  })

  it('should filter out empty entries', () => {
    const result = { results: [{ text: '你好' }, { text: '' }, { text: '世界' }] }
    expect(parseOCRResult(result)).toBe('你好\n世界')
  })

  it('should return empty string for unrecognized format', () => {
    expect(parseOCRResult({ foo: 'bar' })).toBe('')
    expect(parseOCRResult(null)).toBe('')
    expect(parseOCRResult(undefined)).toBe('')
  })

  it('should return empty string for empty arrays', () => {
    expect(parseOCRResult({ results: [] })).toBe('')
    expect(parseOCRResult({ data: [] })).toBe('')
  })
})
