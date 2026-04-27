import { WordRecord, MasteryLevel, createWordRecord, updateWordRecord, shouldRemoveFromFavorites } from './ebbinghaus'
import { WORDS } from '@/lib/vocab-words'

export type StudyMode = 'sequence' | 'random' | 'favorites' | 'review'

export interface VocabProgress {
  currentIndex: number
  targetDays: number
  studyMode: StudyMode
  
  consecutiveDays: number
  totalStudyTime: number
  studyDates: string[]
  lastStudyDate: string
  
  todayLearned: number
  todayCorrect: number
  todayTotal: number
  
  wordRecords: Record<number, WordRecord>
  favorites: number[]
  
  wordOrder: number[]
}

const STORAGE_KEY = 'vocab_progress_v2'

export function getDefaultProgress(): VocabProgress {
  const wordOrder = Array.from({ length: WORDS.length }, (_, i) => i)
  shuffleArray(wordOrder)
  
  return {
    currentIndex: 0,
    targetDays: 30,
    studyMode: 'sequence',
    consecutiveDays: 0,
    totalStudyTime: 0,
    studyDates: [],
    lastStudyDate: '',
    todayLearned: 0,
    todayCorrect: 0,
    todayTotal: 0,
    wordRecords: {},
    favorites: [],
    wordOrder,
  }
}

function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export function loadProgress(): VocabProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const progress = JSON.parse(saved) as VocabProgress
      const today = new Date().toDateString()
      
      if (progress.lastStudyDate !== today) {
        progress.todayLearned = 0
        progress.todayCorrect = 0
        progress.todayTotal = 0
      }
      
      return progress
    }
  } catch (error) {
    console.error('Load progress error:', error)
  }
  return getDefaultProgress()
}

export function saveProgress(progress: VocabProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('Save progress error:', error)
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Clear progress error:', error)
  }
}

export function recordStudy(progress: VocabProgress, wordIndex: number, mastery: MasteryLevel): VocabProgress {
  const today = new Date().toDateString()
  const newProgress = { ...progress }
  
  let record = progress.wordRecords[wordIndex] || createWordRecord()
  record = updateWordRecord(record, mastery)
  newProgress.wordRecords = { ...progress.wordRecords, [wordIndex]: record }
  
  if (mastery === 0) {
    if (!newProgress.favorites.includes(wordIndex)) {
      newProgress.favorites = [...newProgress.favorites, wordIndex]
    }
  } else if (shouldRemoveFromFavorites(record)) {
    newProgress.favorites = newProgress.favorites.filter(i => i !== wordIndex)
  }
  
  newProgress.todayLearned += 1
  newProgress.todayTotal += 1
  if (mastery === 2) {
    newProgress.todayCorrect += 1
  } else if (mastery === 1) {
    newProgress.todayCorrect += 0.5
  }
  
  if (progress.lastStudyDate !== today) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const isConsecutive = progress.lastStudyDate === yesterday.toDateString()
    newProgress.consecutiveDays = isConsecutive ? progress.consecutiveDays + 1 : 1
    newProgress.studyDates = [...progress.studyDates, today]
  }
  newProgress.lastStudyDate = today
  
  return newProgress
}

export function getReviewWords(progress: VocabProgress): number[] {
  const today = new Date().toDateString()
  const reviewWords: number[] = []
  
  for (const [indexStr, record] of Object.entries(progress.wordRecords)) {
    const index = Number(indexStr)
    if (new Date(record.nextReviewDate) <= new Date(today)) {
      reviewWords.push(index)
    }
  }
  
  return reviewWords
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

export function shuffleWordOrder(progress: VocabProgress): VocabProgress {
  const newOrder = [...progress.wordOrder]
  shuffleArray(newOrder)
  return { ...progress, wordOrder: newOrder, currentIndex: 0 }
}

export function resetProgress(): VocabProgress {
  clearProgress()
  return getDefaultProgress()
}
