'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, StepBar, MarkdownRenderer, ProgressBar, ExportButton, LoadingIndicator } from '@/components/common'
import { Subject } from '@/types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

const gradeGroups = [
  {
    label: '小学',
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
    examTypes: ['期中', '期末', '月考', '小升初'],
    subjects: ['数学', '语文', '英语']
  },
  {
    label: '初中',
    grades: ['初一', '初二', '初三'],
    examTypes: ['期中', '期末', '月考', '中考一模', '中考二模', '中考'],
    subjects: ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
  },
  {
    label: '高中',
    grades: ['高一', '高二', '高三'],
    examTypes: ['期中', '期末', '月考', '高考一模', '高考二模', '高考'],
    subjects: ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
  }
]

interface SubjectScore {
  subject: Subject
  currentScore: string
  fullScore: string
  targetScore: string
}

export default function RushPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([])
  const [subjectScores, setSubjectScores] = useState<SubjectScore[]>([])
  const [examName, setExamName] = useState('')
  const [daysUntilExam, setDaysUntilExam] = useState('')
  const [dailyHours, setDailyHours] = useState('2')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [showAnalysis, setShowAnalysis] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  const currentGradeGroup = gradeGroups.find(g => g.grades.includes(grade))
  const availableExamTypes = customGrade
    ? ['期中', '期末', '月考', '模拟考']
    : (currentGradeGroup?.examTypes || ['期中', '期末', '月考'])
  const availableSubjects = customGrade
    ? ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
    : (currentGradeGroup?.subjects || ['数学', '语文', '英语'])

  useEffect(() => {
    if (result && resultRef.current && !isUserScrolling.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  const steps = ['1️⃣ 年级', '2️⃣ 科目', '3️⃣ 备考信息', '4️⃣ 生成计划']

  const toggleSubject = (subject: Subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject))
      setSubjectScores(prev => prev.filter(s => s.subject !== subject))
    } else if (selectedSubjects.length < 3) {
      setSelectedSubjects([...selectedSubjects, subject])
      setSubjectScores(prev => [...prev, { subject, currentScore: '', fullScore: '100', targetScore: '' }])
    }
  }

  const updateSubjectScore = (subject: Subject, field: 'currentScore' | 'fullScore' | 'targetScore', value: string) => {
    setSubjectScores(prev => prev.map(s => 
      s.subject === subject ? { ...s, [field]: value } : s
    ))
  }

  const generatePlan = async () => {
    const finalGrade = customGrade || grade
    if (!finalGrade || selectedSubjects.length === 0 || !examName || !daysUntilExam) {
      alert('请填写完整信息')
      return
    }

    const hasInvalidScore = subjectScores.some(s => !s.currentScore || !s.targetScore || !s.fullScore)
    if (hasInvalidScore) {
      alert('请填写所有科目的分数信息')
      return
    }

    const hasNegative = subjectScores.some(s => Number(s.currentScore) < 0 || Number(s.targetScore) < 0 || Number(s.fullScore) <= 0)
    if (hasNegative) {
      alert('分数不能为负数，满分必须大于0')
      return
    }

    const hasExceedFull = subjectScores.some(s => Number(s.currentScore) > Number(s.fullScore) || Number(s.targetScore) > Number(s.fullScore))
    if (hasExceedFull) {
      alert('当前分数和目标分数不能超过满分')
      return
    }

    const hasInvalidTarget = subjectScores.some(s => Number(s.currentScore) >= Number(s.targetScore))
    if (hasInvalidTarget) {
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
          subjects: subjectScores.map(s => ({
            name: s.subject,
            currentScore: Number(s.currentScore),
            fullScore: Number(s.fullScore),
            targetScore: Number(s.targetScore)
          })),
          examName,
          daysUntilExam: Number(daysUntilExam),
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
      case 3: 
        if (!examName || !daysUntilExam) return false
        return subjectScores.every(s => s.currentScore && s.targetScore)
      default: return false
    }
  }

  const getDaysUntilExam = () => {
    return Number(daysUntilExam) || 0
  }

  const totalCurrent = subjectScores.reduce((sum, s) => sum + (Number(s.currentScore) || 0), 0)
  const totalTarget = subjectScores.reduce((sum, s) => sum + (Number(s.targetScore) || 0), 0)
  const totalFull = subjectScores.reduce((sum, s) => sum + (Number(s.fullScore) || 0), 0)
  const totalGap = totalTarget - totalCurrent
  const gapPercent = totalFull > 0 ? ((totalGap / totalFull) * 100).toFixed(1) : 0

  const barData = subjectScores.map(s => ({
    name: s.subject,
    当前: Number(s.currentScore) || 0,
    目标: Number(s.targetScore) || 0,
  }))

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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">年级</label>
                  <select
                    value={customGrade || grade}
                    onChange={(e) => { setCustomGrade(e.target.value); setGrade('') }}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm"
                  >
                    <option value="">请选择</option>
                    {gradeGroups.map(group => (
                      <optgroup key={group.label} label={group.label}>
                        {group.grades.map(g => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <Button onClick={() => setStep(2)} variant="primary" className="w-full" disabled={!grade && !customGrade}>
                    下一步 →
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {step === 2 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📐 选择科目（1-3科）</h3>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {availableSubjects.map((s) => (
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
                        <select
                          value={examName}
                          onChange={(e) => setExamName(e.target.value)}
                          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                        >
                          <option value="">请选择</option>
                          {availableExamTypes.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-1">距离考试天数</label>
                        <input
                          type="number"
                          value={daysUntilExam}
                          onChange={(e) => setDaysUntilExam(e.target.value)}
                          placeholder="如：30"
                          min="1"
                          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm text-slate-400">各科目分数</p>
                      {subjectScores.map((s) => (
                        <div key={s.subject} className="p-3 bg-slate-700/30 rounded-lg">
                          <p className="text-sm font-medium text-indigo-400 mb-2">{s.subject}</p>
                          <div className="grid grid-cols-3 gap-2">
                            <div>
                              <label className="block text-xs text-slate-500 mb-1">当前得分</label>
                              <input
                                type="number"
                                value={s.currentScore}
                                onChange={(e) => updateSubjectScore(s.subject, 'currentScore', e.target.value)}
                                placeholder="80"
                                className="w-full px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder:text-slate-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-500 mb-1">满分</label>
                              <input
                                type="number"
                                value={s.fullScore}
                                onChange={(e) => updateSubjectScore(s.subject, 'fullScore', e.target.value)}
                                className="w-full px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder:text-slate-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-500 mb-1">目标分数</label>
                              <input
                                type="number"
                                value={s.targetScore}
                                onChange={(e) => updateSubjectScore(s.subject, 'targetScore', e.target.value)}
                                placeholder="95"
                                className="w-full px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder:text-slate-500"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
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
                        setSubjectScores([])
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
                    <p>考试：{examName}（还有{daysUntilExam}天）</p>
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
                      current={totalCurrent}
                      target={totalTarget}
                      total={totalFull}
                      label="总分提分进度"
                      color="emerald"
                    />

                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-400">{totalCurrent}</div>
                        <div className="text-xs text-slate-400">当前总分</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-400">+{totalGap}</div>
                        <div className="text-xs text-slate-400">需提升</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-amber-400">{gapPercent}%</div>
                        <div className="text-xs text-slate-400">提升比例</div>
                      </div>
                    </div>

                    {daysUntilExam && (
                      <div className="text-center p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/30">
                        <div className="text-3xl font-bold text-white">{getDaysUntilExam()}</div>
                        <div className="text-sm text-slate-400">天后考试</div>
                      </div>
                    )}

                    {barData.length > 0 && (
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
                            <Bar dataKey="当前" fill="#6366f1" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="目标" fill="#10b981" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            )}
          </div>

          {(result || loading) && (
            <Card ref={resultRef} className="mt-6" onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-400">📋 你的冲刺计划</h3>
                <ExportButton 
                  content={`# ${examName}冲刺计划\n\n年级：${customGrade || grade}\n科目：${selectedSubjects.join('、')}\n距离考试：${daysUntilExam}天\n\n${result}`} 
                  filename={`${examName}冲刺计划`} 
                  label="导出"
                  disabled={loading || !result}
                />
              </div>
              <div className="prose prose-invert max-w-none">
                {loading && !result && <LoadingIndicator text="AI正在生成冲刺计划..." />}
                <MarkdownRenderer content={result} />
                {loading && result && (
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
