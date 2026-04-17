export type Grade = 
  | '小一' | '小二' | '小三' | '小四' | '小五' | '小六'
  | '初一' | '初二' | '初三'
  | '高一' | '高二' | '高三'
  | string

export type Subject = '数学' | '语文' | '英语' | '物理' | '化学' | '生物' | '历史' | '地理' | '政治' | string

export type ExamType = '月考' | '期中' | '期末' | '周测' | '模拟考' | string

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface StudyPlan {
  id: string
  examName: string
  examDate: string
  grade: Grade
  subjects: Subject[]
  currentScore: number
  targetScore: number
  dailyHours: number
  plan: DailyTask[]
}

export interface DailyTask {
  day: number
  date: string
  tasks: Task[]
}

export interface Task {
  subject: Subject
  content: string
  duration: number
  completed: boolean
}

export interface PaperAnalysis {
  id: string
  grade: Grade
  examType: ExamType
  subject: Subject
  fullScore: number
  currentScore: number
  targetScore: number
  weakPoints: WeakPoint[]
  suggestions: string[]
}

export interface WeakPoint {
  topic: string
  reason: string
  priority: 'high' | 'medium' | 'low'
  improvement: string
}

export interface KnowledgePoint {
  id: string
  name: string
  mastery: 'mastered' | 'learning' | 'unknown'
  importance: 'high' | 'medium' | 'low'
}

export interface Quiz {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  knowledgePoint: string
}

export interface QuizResult {
  quizId: string
  selectedIndex: number
  isCorrect: boolean
  timeSpent: number
}

export interface VocabCard {
  id: string
  word: string
  meaning: string
  example?: string
  pronunciation?: string
  difficulty: 'easy' | 'medium' | 'hard'
  status: 'new' | 'learning' | 'mastered'
}

export interface ABCGoal {
  id: string
  subject: Subject
  currentScore: number
  targetScore: number
  confidence: 'A' | 'B' | 'C'
  priority: number
}

export interface RushPlanData {
  grade: Grade
  subjects: Subject[]
  examName: string
  examDate: string
  currentScore: number
  fullScore: number
  targetScore: number
  dailyHours: number
  materials?: string
}

export interface QganState {
  grade: Grade
  subject: Subject
  knowledge?: string
  mode: 'quick' | 'challenge'
}

export interface PointCheckResult {
  points: KnowledgePoint[]
  coverage: number
  suggestions: string[]
}
