const INTERVALS = [1, 2, 4, 7, 15, 30]

export type MasteryLevel = 0 | 1 | 2

export interface WordRecord {
  masteryLevel: MasteryLevel
  firstLearnDate: string
  lastReviewDate: string
  reviewCount: number
  nextReviewDate: string
  reviewInterval: number
  consecutiveCorrect: number
}

export function createWordRecord(): WordRecord {
  const today = new Date().toDateString()
  return {
    masteryLevel: 0,
    firstLearnDate: today,
    lastReviewDate: today,
    reviewCount: 0,
    nextReviewDate: getNextReviewDate(0, 0),
    reviewInterval: INTERVALS[0],
    consecutiveCorrect: 0,
  }
}

export function getNextReviewDate(currentInterval: number, daysToAdd: number): string {
  const date = new Date()
  date.setDate(date.getDate() + daysToAdd)
  return date.toDateString()
}

export function updateWordRecord(record: WordRecord, mastery: MasteryLevel): WordRecord {
  const today = new Date().toDateString()
  let newInterval: number
  let newConsecutiveCorrect: number

  if (mastery === 0) {
    newInterval = INTERVALS[0]
    newConsecutiveCorrect = 0
  } else if (mastery === 1) {
    newInterval = Math.max(1, Math.floor(record.reviewInterval * 0.5))
    newConsecutiveCorrect = record.consecutiveCorrect + 1
  } else {
    const currentIntervalIndex = INTERVALS.indexOf(record.reviewInterval)
    if (currentIntervalIndex === -1) {
      newInterval = INTERVALS[0]
    } else if (currentIntervalIndex < INTERVALS.length - 1) {
      newInterval = INTERVALS[currentIntervalIndex + 1]
    } else {
      newInterval = INTERVALS[INTERVALS.length - 1]
    }
    newConsecutiveCorrect = record.consecutiveCorrect + 1
  }

  return {
    ...record,
    masteryLevel: mastery,
    lastReviewDate: today,
    reviewCount: record.reviewCount + 1,
    nextReviewDate: getNextReviewDate(record.reviewInterval, newInterval),
    reviewInterval: newInterval,
    consecutiveCorrect: newConsecutiveCorrect,
  }
}

export function shouldReview(record: WordRecord): boolean {
  const today = new Date().toDateString()
  return new Date(record.nextReviewDate) <= new Date(today)
}

export function shouldRemoveFromFavorites(record: WordRecord): boolean {
  return record.consecutiveCorrect >= 3 && record.masteryLevel === 2
}

export function getDaysUntilReview(record: WordRecord): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const reviewDate = new Date(record.nextReviewDate)
  reviewDate.setHours(0, 0, 0, 0)
  const diffTime = reviewDate.getTime() - today.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}
