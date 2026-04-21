import { describe, it, expect } from 'vitest'

function calcEssayStats(content: string) {
  const charCount = content.replace(/\s/g, '').length
  const paragraphCount = content.split(/\n\s*\n/).filter(p => p.trim()).length
  return { charCount, paragraphCount }
}

function parseEssayScores(fullContent: string) {
  const contentScoreMatch = fullContent.match(/内容[：:]\s*(\d+)/)
  const structureScoreMatch = fullContent.match(/结构[：:]\s*(\d+)/)
  const languageScoreMatch = fullContent.match(/语言[：:]\s*(\d+)/)
  const writingScoreMatch = fullContent.match(/书写[：:]\s*(\d+)/)
  const totalScoreMatch = fullContent.match(/总分[：:]\s*(\d+)/)

  const scores: Record<string, number> = {}
  if (contentScoreMatch) scores.content = parseInt(contentScoreMatch[1])
  if (structureScoreMatch) scores.structure = parseInt(structureScoreMatch[1])
  if (languageScoreMatch) scores.language = parseInt(languageScoreMatch[1])
  if (writingScoreMatch) scores.writing = parseInt(writingScoreMatch[1])
  const totalScore = totalScoreMatch ? parseInt(totalScoreMatch[1]) : 0

  return { scores, totalScore }
}

describe('calcEssayStats', () => {
  it('should count characters excluding whitespace', () => {
    expect(calcEssayStats('你好世界').charCount).toBe(4)
  })

  it('should exclude spaces from char count', () => {
    expect(calcEssayStats('你 好 世 界').charCount).toBe(4)
  })

  it('should count paragraphs separated by blank lines', () => {
    const content = '第一段\n\n第二段\n\n第三段'
    expect(calcEssayStats(content).paragraphCount).toBe(3)
  })

  it('should handle single paragraph', () => {
    expect(calcEssayStats('只有一段').paragraphCount).toBe(1)
  })

  it('should handle empty content', () => {
    expect(calcEssayStats('').charCount).toBe(0)
    expect(calcEssayStats('').paragraphCount).toBe(0)
  })

  it('should filter out empty paragraphs', () => {
    const content = '第一段\n\n\n\n第二段'
    expect(calcEssayStats(content).paragraphCount).toBe(2)
  })
})

describe('parseEssayScores', () => {
  it('should parse all dimension scores', () => {
    const content = '内容：20\n结构：18\n语言：22\n书写：23\n总分：83'
    const result = parseEssayScores(content)
    expect(result.scores.content).toBe(20)
    expect(result.scores.structure).toBe(18)
    expect(result.scores.language).toBe(22)
    expect(result.scores.writing).toBe(23)
    expect(result.totalScore).toBe(83)
  })

  it('should handle Chinese colon variant', () => {
    const content = '内容:15\n总分:60'
    const result = parseEssayScores(content)
    expect(result.scores.content).toBe(15)
    expect(result.totalScore).toBe(60)
  })

  it('should return empty scores for no matches', () => {
    const result = parseEssayScores('没有分数信息')
    expect(Object.keys(result.scores)).toHaveLength(0)
    expect(result.totalScore).toBe(0)
  })

  it('should handle partial scores', () => {
    const content = '内容：20\n结构：18'
    const result = parseEssayScores(content)
    expect(result.scores.content).toBe(20)
    expect(result.scores.structure).toBe(18)
    expect(result.scores.language).toBeUndefined()
  })
})
