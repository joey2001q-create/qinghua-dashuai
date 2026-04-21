'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, ExportButton, MarkdownRenderer, LoadingIndicator } from '@/components/common'
import { Subject, Grade } from '@/types'
import { subjects, grades } from '@/lib/utils'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts'

interface ABCGoal {
  subject: Subject
  fullScore: number
  currentScore: number
  lastScore: number
  targetScore: number
  confidence: number
}

const confidenceLabels: Record<number, string> = {
  1: '完全没把握',
  2: '几乎没把握',
  3: '信心很低',
  4: '有些担忧',
  5: '有些思路',
  6: '略有把握',
  7: '基本有数',
  8: '较有把握',
  9: '胸有成竹',
  10: '志在必得',
}

const gradeGroups = [
  { label: '小学', grades: ['小一', '小二', '小三', '小四', '小五', '小六'] },
  { label: '初中', grades: ['初一', '初二', '初三'] },
  { label: '高中', grades: ['高一', '高二', '高三'] },
]

const gradeSubjects: Record<string, Subject[]> = {
  '小学': ['语文', '数学', '英语'],
  '初中': ['语文', '数学', '英语', '物理', '化学', '历史', '政治'],
  '高中': ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治'],
}

const gradeFullScore: Record<string, number> = {
  '小学': 100,
  '初中': 120,
  '高中': 150,
}

function calcBTarget(currentScore: number, targetScore: number, fullScore: number, confidence: number): number {
  const gap = targetScore - currentScore
  const scoreRatio = currentScore / fullScore
  const diminishingFactor = 1 - scoreRatio * 0.5
  const improvement = gap * (confidence / 10) * diminishingFactor
  return Math.round((currentScore + improvement) * 10) / 10
}

function getTrend(current: number, last: number): 'up' | 'stable' | 'down' {
  if (current - last >= 3) return 'up'
  if (last - current >= 3) return 'down'
  return 'stable'
}

export default function ABCPage() {
  const router = useRouter()
  const [goals, setGoals] = useState<ABCGoal[]>([])
  const [gradeGroup, setGradeGroup] = useState('初中')
  const [currentGrade, setCurrentGrade] = useState<Grade>('初二')
  const [currentSubject, setCurrentSubject] = useState<Subject>('数学')
  const [fullScore, setFullScore] = useState(120)
  const [currentScore, setCurrentScore] = useState(80)
  const [lastScore, setLastScore] = useState(75)
  const [targetScore, setTargetScore] = useState(105)
  const [confidence, setConfidence] = useState(5)
  const [analysisResult, setAnalysisResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [planWeeks, setPlanWeeks] = useState(4)
  const [dailyHours, setDailyHours] = useState(2)

  const availableSubjects = gradeSubjects[gradeGroup] || subjects

  const handleGradeGroupChange = (group: string) => {
    setGradeGroup(group)
    const gList = gradeGroups.find(g => g.label === group)?.grades || []
    if (gList.length > 0) setCurrentGrade(gList[0] as Grade)
    const sList = gradeSubjects[group] || subjects
    setCurrentSubject(sList[0])
    setFullScore(gradeFullScore[group] || 100)
  }

  const calculatedGoals = useMemo(() => {
    return goals.map(goal => {
      const gap = goal.targetScore - goal.currentScore
      const bTarget = calcBTarget(goal.currentScore, goal.targetScore, goal.fullScore, goal.confidence)
      const improvement = Math.round((bTarget - goal.currentScore) * 10) / 10
      const trend = getTrend(goal.currentScore, goal.lastScore)
      return {
        ...goal,
        gap,
        improvement,
        bTarget,
        aTarget: goal.targetScore,
        cTarget: goal.currentScore,
        trend,
      }
    })
  }, [goals])

  const totalImprovement = useMemo(() => {
    return calculatedGoals.reduce((sum, g) => sum + g.improvement, 0)
  }, [calculatedGoals])

  const radarData = useMemo(() => {
    if (calculatedGoals.length < 3) return []
    return calculatedGoals.map(g => ({
      subject: g.subject,
      'C目标(当前)': g.cTarget,
      'B目标(预期)': g.bTarget,
      'A目标(理想)': g.aTarget,
    }))
  }, [calculatedGoals])

  const addGoal = () => {
    if (goals.some(g => g.subject === currentSubject)) {
      alert('该科目已添加')
      return
    }
    if (currentScore >= targetScore) {
      alert('目标分数需大于当前分数')
      return
    }
    if (targetScore > fullScore) {
      alert('目标分数不能超过满分')
      return
    }
    if (currentScore < 0 || lastScore < 0) {
      alert('分数不能为负数')
      return
    }
    setGoals([...goals, {
      subject: currentSubject,
      fullScore,
      currentScore,
      lastScore,
      targetScore,
      confidence,
    }])
  }

  const removeGoal = (subject: Subject) => {
    setGoals(goals.filter(g => g.subject !== subject))
  }

  const updateConfidence = (subject: Subject, newConfidence: number) => {
    setGoals(goals.map(g =>
      g.subject === subject ? { ...g, confidence: newConfidence } : g
    ))
  }

  const getConfidenceColor = (c: number) => {
    if (c >= 8) return 'text-emerald-400'
    if (c >= 5) return 'text-amber-400'
    return 'text-red-400'
  }

  const getTrendIcon = (trend: 'up' | 'stable' | 'down') => {
    if (trend === 'up') return <span className="text-emerald-400">↑</span>
    if (trend === 'down') return <span className="text-red-400">↓</span>
    return <span className="text-slate-400">→</span>
  }

  const generateAnalysis = async () => {
    if (goals.length === 0) {
      alert('请先添加科目目标')
      return
    }
    setLoading(true)
    setAnalysisResult('')
    try {
      const response = await fetch('/api/abc-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          goals: calculatedGoals, 
          grade: currentGrade, 
          gradeGroup,
          planWeeks,
          dailyHours,
          totalWeeklyHours: planWeeks * dailyHours * 7
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
              setAnalysisResult((prev) => prev + json.content)
            }
          } catch {
            // skip
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

  const exportContent = `# ABC目标提分表

## 基本信息
- 年级：${currentGrade}（${gradeGroup}）
- 计划周期：${planWeeks}周
- 每日学习时长：${dailyHours}小时
- 每周学习时间：${dailyHours * 7}小时

## 各科目目标

| 科目 | 满分 | 上次分数 | C目标(当前) | B目标(预期) | A目标(理想) | 差距 | 预期提分 | 信心指数 | 趋势 |
|------|------|----------|-------------|-------------|-------------|------|----------|----------|------|
${calculatedGoals.map(g => `| ${g.subject} | ${g.fullScore} | ${g.lastScore} | ${g.cTarget} | ${g.bTarget} | ${g.aTarget} | +${g.gap} | +${g.improvement} | ${g.confidence}(${confidenceLabels[g.confidence]}) | ${g.trend === 'up' ? '上升' : g.trend === 'down' ? '下降' : '平稳'} |`).join('\n')}

## 总结
- 总提分空间：+${calculatedGoals.reduce((sum, g) => sum + g.gap, 0)}
- 预期总提分：+${Math.round(totalImprovement * 10) / 10}
- 平均信心指数：${goals.length > 0 ? (goals.reduce((sum, g) => sum + g.confidence, 0) / goals.length).toFixed(1) : 0}

${analysisResult ? `## AI分析与学习计划\n\n${analysisResult}` : ''}
`

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/plan')} className="mb-4">
            ← 返回学习规划
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🎯 ABC目标提分表</h1>
          <p className="text-slate-400 mb-6">设定各科目标，智能计算提分策略（含边际递减效应）</p>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-indigo-400 mb-4">添加科目目标</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">学段</label>
                  <div className="flex gap-2">
                    {gradeGroups.map(g => (
                      <button
                        key={g.label}
                        onClick={() => handleGradeGroupChange(g.label)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                          gradeGroup === g.label
                            ? 'bg-indigo-500 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">年级</label>
                  <select
                    value={currentGrade}
                    onChange={(e) => setCurrentGrade(e.target.value as Grade)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    {gradeGroups.find(g => g.label === gradeGroup)?.grades.map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">科目</label>
                  <select
                    value={currentSubject}
                    onChange={(e) => setCurrentSubject(e.target.value as Subject)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    {availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">满分</label>
                  <input
                    type="number"
                    value={fullScore}
                    onChange={(e) => setFullScore(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">上次分数</label>
                  <input
                    type="number"
                    value={lastScore}
                    onChange={(e) => setLastScore(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">当前分数</label>
                  <input
                    type="number"
                    value={currentScore}
                    onChange={(e) => setCurrentScore(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">目标分数</label>
                  <input
                    type="number"
                    value={targetScore}
                    onChange={(e) => setTargetScore(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">
                    信心指数：<span className={getConfidenceColor(confidence)}>{confidence} - {confidenceLabels[confidence]}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={confidence}
                      onChange={(e) => setConfidence(Number(e.target.value))}
                      className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                    <span className={`w-6 text-center font-bold text-sm ${getConfidenceColor(confidence)}`}>
                      {confidence}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">计划周数</label>
                  <select
                    value={planWeeks}
                    onChange={(e) => setPlanWeeks(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(w => (
                      <option key={w} value={w}>{w} 周</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">每日学习时长</label>
                  <select
                    value={dailyHours}
                    onChange={(e) => setDailyHours(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6].map(h => (
                      <option key={h} value={h}>{h} 小时</option>
                    ))}
                  </select>
                </div>
              </div>
              <Button onClick={addGoal} variant="primary">+ 添加科目</Button>
            </div>
          </Card>

          {goals.length > 0 && (
            <>
              <Card className="mb-6 overflow-x-auto">
                <h3 className="text-lg font-bold text-white mb-4">📊 ABC目标分析表</h3>
                <p className="text-sm text-slate-400 mb-4">
                  公式：提分 = 差距 × (信心指数 / 10) × (1 - 当前分/满分 × 0.5) ｜ B目标 = 当前分数 + 提分（含边际递减效应）
                </p>

                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-slate-400">科目</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-slate-400">满分</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-slate-400">上次</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-blue-400">C目标<br/><span className="text-xs font-normal">当前分数</span></th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-amber-400">B目标<br/><span className="text-xs font-normal">预期可达</span></th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-emerald-400">A目标<br/><span className="text-xs font-normal">理想目标</span></th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-purple-400">差距</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-pink-400">预期提分</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-indigo-400">信心指数</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-slate-400">趋势</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-slate-400">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculatedGoals.map((goal) => (
                      <tr key={goal.subject} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                        <td className="py-3 px-2 font-medium text-white">{goal.subject}</td>
                        <td className="py-3 px-2 text-center text-slate-400">{goal.fullScore}</td>
                        <td className="py-3 px-2 text-center text-slate-400">{goal.lastScore}</td>
                        <td className="py-3 px-2 text-center">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg font-semibold">
                            {goal.cTarget}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg font-semibold">
                            {goal.bTarget}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg font-semibold">
                            {goal.aTarget}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center text-purple-400 font-medium">
                          +{goal.gap}
                        </td>
                        <td className="py-3 px-2 text-center text-pink-400 font-medium">
                          +{goal.improvement}
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center justify-center gap-2">
                            <input
                              type="range"
                              min="1"
                              max="10"
                              value={goal.confidence}
                              onChange={(e) => updateConfidence(goal.subject, Number(e.target.value))}
                              className="w-20 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            <span className={`w-6 text-center font-bold text-sm ${getConfidenceColor(goal.confidence)}`}>
                              {goal.confidence}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-center text-lg">
                          {getTrendIcon(goal.trend)}
                        </td>
                        <td className="py-3 px-2 text-center">
                          <button
                            onClick={() => removeGoal(goal.subject)}
                            className="text-red-400 hover:text-red-300 text-sm px-2 py-1 hover:bg-red-500/10 rounded transition"
                          >
                            删除
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                <Card className="text-center py-6">
                  <div className="text-sm text-slate-400 mb-1">总提分空间</div>
                  <div className="text-3xl font-bold text-purple-400">
                    +{calculatedGoals.reduce((sum, g) => sum + g.gap, 0)}
                  </div>
                </Card>
                <Card className="text-center py-6">
                  <div className="text-sm text-slate-400 mb-1">预期总提分</div>
                  <div className="text-3xl font-bold text-pink-400">
                    +{Math.round(totalImprovement * 10) / 10}
                  </div>
                </Card>
                <Card className="text-center py-6">
                  <div className="text-sm text-slate-400 mb-1">平均信心指数</div>
                  <div className={`text-3xl font-bold ${getConfidenceColor(goals.reduce((sum, g) => sum + g.confidence, 0) / goals.length)}`}>
                    {(goals.reduce((sum, g) => sum + g.confidence, 0) / goals.length).toFixed(1)}
                  </div>
                </Card>
                <Card className="text-center py-6">
                  <div className="text-sm text-slate-400 mb-1">上升科目</div>
                  <div className="text-3xl font-bold text-emerald-400">
                    {calculatedGoals.filter(g => g.trend === 'up').length}/{goals.length}
                  </div>
                </Card>
              </div>

              {radarData.length > 0 && (
                <Card className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-4">🕸️ 多科雷达图</h3>
                  <p className="text-sm text-slate-400 mb-4">至少添加3个科目后显示雷达图，直观对比各科差距</p>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="#374151" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 13 }} />
                        <PolarRadiusAxis tick={{ fill: '#64748b', fontSize: 11 }} />
                        <Radar name="C目标(当前)" dataKey="C目标(当前)" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} strokeWidth={2} />
                        <Radar name="B目标(预期)" dataKey="B目标(预期)" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} strokeWidth={2} />
                        <Radar name="A目标(理想)" dataKey="A目标(理想)" stroke="#10b981" fill="#10b981" fillOpacity={0.15} strokeWidth={2} />
                        <Legend
                          wrapperStyle={{ color: '#9ca3af' }}
                          formatter={(value: string) => <span style={{ color: '#9ca3af' }}>{value}</span>}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              )}

              <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/30">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">💡 提分建议</h3>
                  <div className="flex gap-2">
                    <Button onClick={generateAnalysis} variant="primary" size="sm" disabled={loading}>
                      {loading ? 'AI分析中...' : 'AI分析'}
                    </Button>
                    <ExportButton content={exportContent} filename="ABC目标提分表" label="导出" disabled={loading} />
                  </div>
                </div>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <span className="text-emerald-400 font-medium">A目标</span>：理想情况下的最高目标，需要付出最大努力</li>
                  <li>• <span className="text-amber-400 font-medium">B目标</span>：基于信心指数和边际递减效应计算的预期可达目标</li>
                  <li>• <span className="text-blue-400 font-medium">C目标</span>：当前水平，是保底成绩</li>
                  <li>• 高分段提分更难（边际递减），B目标已自动调整</li>
                  <li>• 信心指数越高，预期提分越接近理想目标；建议优先提升信心较低的科目</li>
                  <li>• 趋势箭头：↑上升 ↓下降 →平稳（基于上次与当前分数对比，差距≥3分）</li>
                </ul>
              </Card>

              {(analysisResult || loading) && (
                <Card className="mt-6">
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📊 AI分析结果</h3>
                  <div className="prose prose-invert max-w-none">
                    {loading && !analysisResult && <LoadingIndicator text="AI正在分析目标策略..." />}
                    <MarkdownRenderer content={analysisResult} />
                    {loading && analysisResult && (
                      <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse ml-1" />
                    )}
                  </div>
                </Card>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  )
}
