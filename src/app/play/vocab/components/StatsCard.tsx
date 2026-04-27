'use client'

import { VocabProgress } from '../lib/storage'
import { getTodayStats, getOverallStats } from '../lib/stats'

interface StatsCardProps {
  progress: VocabProgress
  reviewCount: number
}

export default function StatsCard({ progress, reviewCount }: StatsCardProps) {
  const todayStats = getTodayStats(progress)
  const overallStats = getOverallStats(progress)

  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      <div className="bg-slate-800 rounded-xl p-3">
        <p className="text-xl font-bold text-orange-400">🔥</p>
        <p className="text-lg font-bold text-white">{overallStats.consecutiveDays}</p>
        <p className="text-xs text-slate-500">连续天数</p>
      </div>
      <div className="bg-slate-800 rounded-xl p-3">
        <p className="text-xl font-bold text-blue-400">⏱️</p>
        <p className="text-lg font-bold text-white">
          {Math.floor(progress.totalStudyTime / 60)}
        </p>
        <p className="text-xs text-slate-500">分钟</p>
      </div>
      <div className="bg-slate-800 rounded-xl p-3">
        <p className="text-xl font-bold text-green-400">📈</p>
        <p className="text-lg font-bold text-white">{overallStats.masteryRate}%</p>
        <p className="text-xs text-slate-500">掌握率</p>
      </div>
      <div className="bg-slate-800 rounded-xl p-3">
        <p className="text-xl font-bold text-purple-400">📅</p>
        <p className="text-lg font-bold text-white">{reviewCount}</p>
        <p className="text-xs text-slate-500">待复习</p>
      </div>
    </div>
  )
}