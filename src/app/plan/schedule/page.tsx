'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, ExportButton } from '@/components/common'
import MarkdownRenderer from '@/components/common/MarkdownRenderer'
import ProgressBar from '@/components/common/ProgressBar'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

const subjects = ['数学', '语文', '英语', '物理', '化学', '生物', '历史', '地理', '政治']
const examTypes = ['月考', '期中', '期末', '周测', '模拟考']
const grades = ['初一', '初二', '初三']

export default function SchedulePage() {
  const router = useRouter()
  const [subject, setSubject] = useState('数学')
  const [examType, setExamType] = useState('期末')
  const [grade, setGrade] = useState('初二')
  const [totalScore, setTotalScore] = useState('')
  const [targetScore, setTargetScore] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [days, setDays] = useState('')
  const [dailyHours, setDailyHours] = useState('2')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [showChart, setShowChart] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  useEffect(() => {
    if (result && resultRef.current && !isUserScrolling.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  const generatePlan = async () => {
    if (!totalScore || !targetScore || !currentScore || !days) {
      alert('请填写完整信息')
      return
    }

    if (Number(totalScore) <= 0 || Number(currentScore) < 0 || Number(targetScore) < 0) {
      alert('分数不能为负数，满分必须大于0')
      return
    }

    if (Number(currentScore) > Number(totalScore) || Number(targetScore) > Number(totalScore)) {
      alert('当前分数和目标分数不能超过满分')
      return
    }

    if (Number(currentScore) >= Number(targetScore)) {
      alert('当前水平必须小于目标分数')
      return
    }

    setLoading(true)
    setResult('')
    setShowChart(true)

    try {
      const response = await fetch('/api/study-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          examType,
          grade,
          totalScore: Number(totalScore),
          targetScore: Number(targetScore),
          currentScore: Number(currentScore),
          days: Number(days),
          dailyHours: Number(dailyHours),
        }),
      })

      if (!response.ok) throw new Error('请求失败')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || !trimmed.startsWith('data: ')) continue
          if (trimmed === 'data: [DONE]') continue

          const data = trimmed.slice(6)
          try {
            const json = JSON.parse(data)
            if (json.content) {
              setResult((prev) => prev + json.content)
            }
          } catch {
            // skip invalid JSON
          }
        }
      }
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const current = Number(currentScore) || 0
  const target = Number(targetScore) || 0
  const total = Number(totalScore) || 100
  const gap = target - current
  const gapPercent = total > 0 ? ((gap / total) * 100).toFixed(1) : 0

  const barData = [
    { name: '当前', 分数: current },
    { name: '目标', 分数: target },
    { name: '满分', 分数: total },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/plan')} className="mb-4">
            ← 返回学习规划
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">📅 学习计划</h1>
          <p className="text-slate-400 mb-6">AI生成个性化冲刺方案</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="mb-6 lg:mb-0">
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📝 填写信息</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">年级</label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                    >
                      {grades.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">学科</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">考试类型</label>
                    <select
                      value={examType}
                      onChange={(e) => setExamType(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                    >
                      {examTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">总分</label>
                    <input
                      type="number"
                      value={totalScore}
                      onChange={(e) => setTotalScore(e.target.value)}
                      placeholder="如：150"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">目标分数</label>
                    <input
                      type="number"
                      value={targetScore}
                      onChange={(e) => setTargetScore(e.target.value)}
                      placeholder="如：135"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">当前水平</label>
                    <input
                      type="number"
                      value={currentScore}
                      onChange={(e) => setCurrentScore(e.target.value)}
                      placeholder="如：110"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">距离考试天数</label>
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
                </div>
                <Button onClick={generatePlan} variant="primary" className="w-full" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      AI正在生成计划...
                    </span>
                  ) : (
                    '📅 生成学习计划'
                  )}
                </Button>
              </div>
            </Card>

            {showChart && (
              <Card>
                <h3 className="text-lg font-bold text-emerald-400 mb-4">📊 分数分析</h3>
                <div className="space-y-6">
                  <ProgressBar
                    current={current}
                    target={target}
                    total={total}
                    label="提分进度"
                    color="emerald"
                  />

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-400">{current}</div>
                      <div className="text-xs text-slate-400">当前分数</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-400">+{gap}</div>
                      <div className="text-xs text-slate-400">需提升</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-amber-400">{gapPercent}%</div>
                      <div className="text-xs text-slate-400">提升比例</div>
                    </div>
                  </div>

                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1e293b',
                            border: '1px solid #374151',
                            borderRadius: '8px',
                          }}
                        />
                        <Bar dataKey="分数" fill="#6366f1" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {(result || loading) && (
            <Card ref={resultRef} onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-400">📋 你的学习计划</h3>
                {result && (
                  <ExportButton 
                    content={`# ${subject}${examType}学习计划\n\n年级：${grade}\n总分：${totalScore}\n目标：${targetScore}\n当前：${currentScore}\n\n${result}`} 
                    filename={`${subject}${examType}学习计划.md`} 
                    label="导出" 
                  />
                )}
              </div>
              <div className="prose prose-invert max-w-none">
                <MarkdownRenderer content={result} />
                {loading && (
                  <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse ml-1" />
                )}
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
