'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, StepBar, MarkdownRenderer, ProgressBar } from '@/components/common'
import { Subject } from '@/types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

const gradeGroups = [
  {
    label: '小学',
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
  },
  {
    label: '初中',
    grades: ['初一', '初二', '初三']
  },
  {
    label: '高中',
    grades: ['高一', '高二', '高三']
  }
]

const subjects = ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']

export default function RushPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([])
  const [examName, setExamName] = useState('')
  const [examDate, setExamDate] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [fullScore, setFullScore] = useState('100')
  const [targetScore, setTargetScore] = useState('')
  const [dailyHours, setDailyHours] = useState('2')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [showAnalysis, setShowAnalysis] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  const steps = ['1️⃣ 年级', '2️⃣ 科目', '3️⃣ 备考信息', '4️⃣ 生成计划']

  const toggleSubject = (subject: Subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject))
    } else if (selectedSubjects.length < 3) {
      setSelectedSubjects([...selectedSubjects, subject])
    }
  }

  const generatePlan = async () => {
    const finalGrade = customGrade || grade
    if (!finalGrade || selectedSubjects.length === 0 || !examName || !examDate || !currentScore || !targetScore) {
      alert('请填写完整信息')
      return
    }

    if (Number(currentScore) >= Number(targetScore)) {
      alert('目标分数必须大于当前分数')
      return
    }

    setLoading(true)
    setResult('')
    setShowAnalysis(true)

    try {
      const response = await fetch('/api/rush-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade: finalGrade,
          subjects: selectedSubjects,
          examName,
          examDate,
          currentScore: Number(currentScore),
          fullScore: Number(fullScore),
          targetScore: Number(targetScore),
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
      setStep(4)
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1: return grade !== '' || customGrade !== ''
      case 2: return selectedSubjects.length > 0
      case 3: return examName && examDate && currentScore && targetScore
      default: return false
    }
  }

  const getDaysUntilExam = () => {
    if (!examDate) return 0
    const exam = new Date(examDate)
    const today = new Date()
    const diff = Math.ceil((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return Math.max(0, diff)
  }

  const current = Number(currentScore) || 0
  const target = Number(targetScore) || 0
  const total = Number(fullScore) || 100
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
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🗓️ 考前冲刺计划</h1>
          <p className="text-slate-400 mb-6">设定目标，AI生成每日冲刺清单</p>

          <StepBar steps={steps} currentStep={step} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              {step === 1 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📚 选择年级</h3>
                  <div className="space-y-4">
                    {gradeGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-sm text-slate-400 mb-2">{group.label}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {group.grades.map((g) => (
                            <button
                              key={g}
                              onClick={() => { setGrade(g); setCustomGrade('') }}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                                grade === g
                                  ? 'bg-indigo-500 text-white'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-slate-700">
                      <label className="block text-sm text-slate-400 mb-1">或自定义年级</label>
                      <input
                        type="text"
                        value={customGrade}
                        onChange={(e) => { setCustomGrade(e.target.value); setGrade('') }}
                        placeholder="如：小升初、大学期末、考研"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                  <Button onClick={() => setStep(2)} variant="primary" className="mt-4 w-full" disabled={!canProceed()}>
                    下一步 →
                  </Button>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📐 选择科目（1-3科）</h3>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {subjects.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleSubject(s)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                          selectedSubjects.includes(s)
                            ? 'bg-indigo-500 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 mb-4">
                    已选：<span className="text-indigo-400 font-medium">{selectedSubjects.join('、') || '待选择'}</span>
                  </p>
                  <div className="flex gap-3">
                    <Button onClick={() => setStep(1)} variant="outline">← 上一步</Button>
                    <Button onClick={() => setStep(3)} variant="primary" className="flex-1" disabled={!canProceed()}>
                      下一步 →
                    </Button>
                  </div>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">⏰ 备考信息</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-400 mb-1">考试名称</label>
                        <input
                          type="text"
                          value={examName}
                          onChange={(e) => setExamName(e.target.value)}
                          placeholder="如：中考一模、月考"
                          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-1">考试日期</label>
                        <input
                          type="date"
                          value={examDate}
                          onChange={(e) => setExamDate(e.target.value)}
                          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-slate-400 mb-1">当前得分</label>
                        <input
                          type="number"
                          value={currentScore}
                          onChange={(e) => setCurrentScore(e.target.value)}
                          placeholder="80"
                          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-1">满分</label>
                        <input
                          type="number"
                          value={fullScore}
                          onChange={(e) => setFullScore(e.target.value)}
                          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-1">目标分数</label>
                        <input
                          type="number"
                          value={targetScore}
                          onChange={(e) => setTargetScore(e.target.value)}
                          placeholder="95"
                          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">每天可投入时间</label>
                      <select
                        value={dailyHours}
                        onChange={(e) => setDailyHours(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                      >
                        <option value="1">1小时</option>
                        <option value="2">2小时</option>
                        <option value="3">3小时</option>
                        <option value="4">4小时</option>
                        <option value="5">5小时+</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button onClick={() => setStep(2)} variant="outline">← 上一步</Button>
                    <Button onClick={generatePlan} variant="orange" className="flex-1" disabled={loading}>
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          AI正在生成计划...
                        </span>
                      ) : (
                        '🚀 生成冲刺计划'
                      )}
                    </Button>
                  </div>
                </Card>
              )}

              {step === 4 && result && (
                <Card>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-emerald-400">✅ 计划已生成</h3>
                    <Button
                      onClick={() => {
                        setStep(1)
                        setResult('')
                        setGrade('')
                        setCustomGrade('')
                        setSelectedSubjects([])
                        setShowAnalysis(false)
                      }}
                      variant="ghost"
                      size="sm"
                    >
                      🔄 重新开始
                    </Button>
                  </div>
                  <div className="text-sm text-slate-400">
                    <p>年级：{customGrade || grade}</p>
                    <p>科目：{selectedSubjects.join('、')}</p>
                    <p>考试：{examName}（{examDate}）</p>
                  </div>
                </Card>
              )}
            </div>

            {showAnalysis && (
              <div className="space-y-6">
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

                    {examDate && (
                      <div className="text-center p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/30">
                        <div className="text-3xl font-bold text-white">{getDaysUntilExam()}</div>
                        <div className="text-sm text-slate-400">天后考试</div>
                      </div>
                    )}

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
              </div>
            )}
          </div>

          {(result || loading) && (
            <Card ref={resultRef} className="mt-6">
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📋 你的冲刺计划</h3>
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
