'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'
import { VocabProgress, loadProgress, saveProgress, resetProgress } from '../lib/storage'
import { getOverallStats, getMasteryDistribution, formatStudyTime } from '../lib/stats'
import StudyChart from '../components/StudyChart'

export default function SettingsPage() {
  const router = useRouter()
  const [progress, setProgress] = useState<VocabProgress | null>(null)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  useEffect(() => {
    setProgress(loadProgress())
  }, [])

  if (!progress) return null

  const stats = getOverallStats(progress)
  const distribution = getMasteryDistribution(progress)

  const handleReset = () => {
    const newProgress = resetProgress()
    setProgress(newProgress)
    setShowResetConfirm(false)
    router.push('/play/vocab')
  }

  const handleClearAll = () => {
    resetProgress()
    router.push('/play/vocab')
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/play/vocab')} className="mb-4">
            ← 返回学习
          </Button>

          <h1 className="text-2xl font-bold text-white mb-6">⚙️ 设置</h1>

          {/* 学习统计 */}
          <Card className="mb-4">
            <h3 className="text-lg font-bold text-white mb-4">📊 学习统计</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-slate-700/50 rounded-xl">
                <p className="text-2xl font-bold text-orange-400">🔥 {stats.consecutiveDays}</p>
                <p className="text-xs text-slate-400 mt-1">连续学习天数</p>
              </div>
              <div className="text-center p-3 bg-slate-700/50 rounded-xl">
                <p className="text-2xl font-bold text-blue-400">⏱️ {formatStudyTime(stats.totalStudyTime)}</p>
                <p className="text-xs text-slate-400 mt-1">总学习时长</p>
              </div>
              <div className="text-center p-3 bg-slate-700/50 rounded-xl">
                <p className="text-2xl font-bold text-green-400">📈 {stats.masteryRate}%</p>
                <p className="text-xs text-slate-400 mt-1">掌握率</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-red-500/10 rounded-xl">
                <p className="text-xl font-bold text-red-400">{distribution.unknown}</p>
                <p className="text-xs text-slate-400 mt-1">😵 不认识</p>
              </div>
              <div className="text-center p-3 bg-amber-500/10 rounded-xl">
                <p className="text-xl font-bold text-amber-400">{distribution.fuzzy}</p>
                <p className="text-xs text-slate-400 mt-1">🤔 模糊</p>
              </div>
              <div className="text-center p-3 bg-emerald-500/10 rounded-xl">
                <p className="text-xl font-bold text-emerald-400">{distribution.known}</p>
                <p className="text-xs text-slate-400 mt-1">😊 认识</p>
              </div>
            </div>
          </Card>

          {/* 学习日历 */}
          <Card className="mb-4">
            <StudyChart progress={progress} type="heatmap" />
          </Card>

          {/* 掌握率曲线 */}
          <Card className="mb-4">
            <StudyChart progress={progress} type="curve" />
          </Card>

          {/* 生词本 */}
          <Card className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">❤️ 生词本</h3>
                <p className="text-sm text-slate-400">{progress.favorites.length} 个生词</p>
              </div>
              <Button
                variant="primary"
                onClick={() => router.push('/play/vocab/review')}
                disabled={progress.favorites.length === 0}
              >
                进入专项复习
              </Button>
            </div>
          </Card>

          {/* 重置选项 */}
          <Card className="mb-4">
            <h3 className="text-lg font-bold text-white mb-4">🔄 重置选项</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowResetConfirm(true)}
              >
                🔄 重新开始（清除进度，保留学习记录）
              </Button>
              <Button
                variant="outline"
                className="w-full text-red-400 border-red-400/50 hover:bg-red-400/10"
                onClick={handleClearAll}
              >
                🗑️ 清除所有数据
              </Button>
            </div>
          </Card>

          {/* 重置确认弹窗 */}
          {showResetConfirm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <Card className="max-w-sm mx-4">
                <h3 className="text-lg font-bold text-white mb-2">确认重新开始？</h3>
                <p className="text-sm text-slate-400 mb-4">
                  进度将重置为0，单词顺序将重新打乱，但学习记录会保留。
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => setShowResetConfirm(false)}>
                    取消
                  </Button>
                  <Button variant="primary" className="flex-1" onClick={handleReset}>
                    确认
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
