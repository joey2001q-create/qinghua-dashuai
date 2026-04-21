import { describe, it, expect } from 'vitest'

function preprocessContent(content: string): string {
  let processed = content
  processed = processed.replace(/progress_tracking/gi, '📈 进度追踪')
  processed = processed.replace(/key_reminders/gi, '💡 重点提醒')
  processed = processed.replace(/student_analysis/gi, '📊 学生现状分析')
  processed = processed.replace(/study_suggestions/gi, '📝 学习建议')
  processed = processed.replace(/daily_plan/gi, '📅 每日学习计划')
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '**$1**')
  processed = processed.replace(/^[•·]\s*/gm, '- ')
  return processed
}

describe('preprocessContent (MarkdownRenderer)', () => {
  it('should replace progress_tracking with Chinese', () => {
    expect(preprocessContent('progress_tracking')).toBe('📈 进度追踪')
  })

  it('should replace key_reminders with Chinese', () => {
    expect(preprocessContent('key_reminders')).toBe('💡 重点提醒')
  })

  it('should replace student_analysis with Chinese', () => {
    expect(preprocessContent('student_analysis')).toBe('📊 学生现状分析')
  })

  it('should replace study_suggestions with Chinese', () => {
    expect(preprocessContent('study_suggestions')).toBe('📝 学习建议')
  })

  it('should replace daily_plan with Chinese', () => {
    expect(preprocessContent('daily_plan')).toBe('📅 每日学习计划')
  })

  it('should be case-insensitive', () => {
    expect(preprocessContent('PROGRESS_TRACKING')).toBe('📈 进度追踪')
  })

  it('should convert bullet points to markdown list', () => {
    expect(preprocessContent('• item1\n· item2')).toBe('- item1\n- item2')
  })

  it('should preserve bold text', () => {
    expect(preprocessContent('**bold**')).toBe('**bold**')
  })

  it('should handle multiple replacements', () => {
    const result = preprocessContent('progress_tracking and key_reminders')
    expect(result).toContain('📈 进度追踪')
    expect(result).toContain('💡 重点提醒')
  })

  it('should pass through normal text unchanged', () => {
    expect(preprocessContent('普通文本')).toBe('普通文本')
  })
})
