'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'
import { subjects, grades } from '@/lib/utils'

export default function SchedulePage() {
  const router = useRouter()
  const [examGoal, setExamGoal] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [days, setDays] = useState('')
  const [dailyHours, setDailyHours] = useState('2')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const generatePlan = async () => {
    if (!examGoal || !currentScore || !days) {
      alert('请填写完整信息')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/study-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          examGoal,
          currentScore: Number(currentScore),
          days: Number(days),
          dailyHours: Number(dailyHours),
        }),
      })
      const data = await response.json()
      setResult(data.content)
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/plan')} className="mb-4">
            ← 返回学习规划
          </Button>
          
          <h1 className="text-2xl font-bold text-white mb-2">📅 学习计划</h1>
          <p className="text-slate-400 mb-6">AI生成个性化冲刺方案</p>

          <Card className="mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">考试目标</label>
                <input 
                  type="text"
                  value={examGoal}
                  onChange={(e) => setExamGoal(e.target.value)}
                  placeholder="如：中考数学，目标135分"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">当前水平（预估分）</label>
                <input 
                  type="number"
                  value={currentScore}
                  onChange={(e) => setCurrentScore(e.target.value)}
                  placeholder="如：110分"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">距离考试还有多少天？</label>
                <input 
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="如：30"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">每天可投入时间</label>
                <select 
                  value={dailyHours}
                  onChange={(e) => setDailyHours(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  <option value="1">1小时</option>
                  <option value="2">2小时</option>
                  <option value="3">3小时</option>
                  <option value="4">4小时以上</option>
                </select>
              </div>
              <Button onClick={generatePlan} variant="primary" className="w-full" disabled={loading}>
                {loading ? '生成中...' : '📅 生成学习计划'}
              </Button>
            </div>
          </Card>

          {result && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📋 你的学习计划</h3>
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">{result}</div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
