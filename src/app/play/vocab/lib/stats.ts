import { VocabProgress } from './storage'
import { WORDS } from '@/lib/vocab-words'

export interface DailyStats {
  date: string
  learned: number
  correct: number
  total: number
  accuracy: number
}

export interface MasteryDistribution {
  unknown: number
  fuzzy: number
  known: number
}

export function getTodayStats(progress: VocabProgress): { learned: number; correct: number; total: number; accuracy: number } {
  const accuracy = progress.todayTotal > 0 
    ? Math.round((progress.todayCorrect / progress.todayTotal) * 100) 
    : 0
  return {
    learned: progress.todayLearned,
    correct: progress.todayCorrect,
    total: progress.todayTotal,
    accuracy,
  }
}

export function getOverallStats(progress: VocabProgress): { 
  consecutiveDays: number
  totalStudyTime: number
  totalLearned: number
  masteryRate: number 
} {
  const totalLearned = Object.keys(progress.wordRecords).length
  const masteredCount = Object.values(progress.wordRecords).filter(r => r.masteryLevel === 2).length
  const masteryRate = totalLearned > 0 ? Math.round((masteredCount / totalLearned) * 100) : 0
  
  return {
    consecutiveDays: progress.consecutiveDays,
    totalStudyTime: progress.totalStudyTime,
    totalLearned,
    masteryRate,
  }
}

export function getMasteryDistribution(progress: VocabProgress): MasteryDistribution {
  let unknown = 0
  let fuzzy = 0
  let known = 0
  
  for (const record of Object.values(progress.wordRecords)) {
    if (record.masteryLevel === 0) unknown++
    else if (record.masteryLevel === 1) fuzzy++
    else if (record.masteryLevel === 2) known++
  }
  
  return { unknown, fuzzy, known }
}

export function getStudyCalendar(progress: VocabProgress): Map<string, number> {
  const calendar = new Map<string, number>()
  
  for (const date of progress.studyDates) {
    const count = calendar.get(date) || 0
    calendar.set(date, count + 1)
  }
  
  return calendar
}

export function getRecentStats(progress: VocabProgress, days: number = 30): DailyStats[] {
  const stats: DailyStats[] = []
  const today = new Date()
  
  for (let i = 0; i < days; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toDateString()
    
    let dayLearned = 0
    let dayCorrect = 0
    let dayTotal = 0
    
    for (const record of Object.values(progress.wordRecords)) {
      if (record.lastReviewDate === dateStr) {
        dayLearned++
        dayTotal++
        if (record.masteryLevel === 2) dayCorrect++
        else if (record.masteryLevel === 1) dayCorrect += 0.5
      }
    }
    
    stats.push({
      date: dateStr,
      learned: dayLearned,
      correct: dayCorrect,
      total: dayTotal,
      accuracy: dayTotal > 0 ? Math.round((dayCorrect / dayTotal) * 100) : 0,
    })
  }
  
  return stats.reverse()
}

export function getMasteryCurve(progress: VocabProgress): { date: string; rate: number }[] {
  const curve: { date: string; rate: number }[] = []
  const sortedDates = [...progress.studyDates].sort((a, b) => 
    new Date(a).getTime() - new Date(b).getTime()
  )
  
  for (const date of sortedDates) {
    let known = 0
    let total = 0
    
    for (const record of Object.values(progress.wordRecords)) {
      if (new Date(record.firstLearnDate) <= new Date(date)) {
        total++
        if (record.masteryLevel >= 1) known++
      }
    }
    
    const rate = total > 0 ? Math.round((known / total) * 100) : 0
    curve.push({ date, rate })
  }
  
  return curve
}

export function formatStudyTime(seconds: number): string {
  if (seconds < 60) return `${seconds}秒`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}分钟`
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours}小时${minutes > 0 ? `${minutes}分钟` : ''}`
}

export function getProgressPercentage(progress: VocabProgress): number {
  const totalWords = WORDS.length
  const currentIndex = progress.currentIndex
  return Math.round(((currentIndex + 1) / totalWords) * 100)
}

export function getPerDayWords(targetDays: number): number {
  return Math.ceil(WORDS.length / targetDays)
}

export function getEstimatedEndDate(targetDays: number): string {
  const end = new Date()
  end.setDate(end.getDate() + targetDays)
  return end.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}