'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, ExportButton, MarkdownRenderer } from '@/components/common'
import { Subject } from '@/types'
import { subjects } from '@/lib/utils'

interface ABCGoal {
  subject: Subject
  fullScore: number
  currentScore: number
  targetScore: number
  confidence: number
}

export default function ABCPage() {
  const router = useRouter()
  const [goals, setGoals] = useState<ABCGoal[]>([])
  const [currentSubject, setCurrentSubject] = useState<Subject>('数学')
  const [fullScore, setFullScore] = useState(100)
  const [currentScore, setCurrentScore] = useState(80)
  const [targetScore, setTargetScore] = useState(95)
  const [confidence, setConfidence] = useState(5)
  const [analysisResult, setAnalysisResult] = useState('')
  const [loading, setLoading] = useState(false)

  const calculatedGoals = useMemo(() => {
    return goals.map(goal => {
      const gap = goal.targetScore - goal.currentScore
      const improvement = Math.round(gap * (goal.confidence / 10) * 10) / 10
      const bTarget = Math.round((goal.currentScore + improvement) * 10) / 10
      return {
        ...goal,
        gap,
        improvement,
        bTarget,
        aTarget: goal.targetScore,
        cTarget: goal.currentScore
      }
    })
  }, [goals])

  const totalImprovement = useMemo(() => {
    return calculatedGoals.reduce((sum, g) => sum + g.improvement, 0)
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
    setGoals([...goals, { 
      subject: currentSubject, 
      fullScore, 
      currentScore, 
      targetScore, 
      confidence 
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

  const getConfidenceBg = (c: number) => {
    if (c >= 8) return 'bg-emerald-500/20'
    if (c >= 5) return 'bg-amber-500/20'
    return 'bg-red-500/20'
  }

  const generateAnalysis = async () => {
    if (goals.length === 0) {
      alert('请先添加科目目标')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('/api/abc-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goals: calculatedGoals }),
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

## 各科目目标

| 科目 | 满分 | C目标(当前) | B目标(预期) | A目标(理想) | 差距 | 预期提分 | 信心指数 |
|------|------|-------------|-------------|-------------|------|----------|----------|
${calculatedGoals.map(g => `| ${g.subject} | ${g.fullScore} | ${g.cTarget} | ${g.bTarget} | ${g.aTarget} | +${g.gap} | +${g.improvement} | ${g.confidence} |`).join('\n')}

## 总结
- 总提分空间：+${calculatedGoals.reduce((sum, g) => sum + g.gap, 0)}
- 预期总提分：+${Math.round(totalImprovement * 10) / 10}
- 平均信心指数：${(goals.reduce((sum, g) => sum + g.confidence, 0) / goals.length).toFixed(1)}

${analysisResult ? `## AI分析\n\n${analysisResult}` : ''}
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
          <p className="text-slate-400 mb-6">设定各科目标，智能计算提分策略</p>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-indigo-400 mb-4">添加科目目标</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">科目</label>
                <select 
                  value={currentSubject}
                  onChange={(e) => setCurrentSubject(e.target.value as Subject)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
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
                <label className="block text-sm text-slate-400 mb-1">信心指数</label>
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
            <Button onClick={addGoal} variant="primary">+ 添加科目</Button>
          </Card>

          {goals.length > 0 && (
            <>
              <Card className="mb-6 overflow-x-auto">
                <h3 className="text-lg font-bold text-white mb-4">📊 ABC目标分析表</h3>
                <p className="text-sm text-slate-400 mb-4">
                  公式：提分 = 差距 × (信心指数 / 10) ｜ B目标 = 当前分数 + 提分
                </p>
                
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-slate-400">科目</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-slate-400">满分</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-blue-400">C目标<br/><span className="text-xs font-normal">当前分数</span></th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-amber-400">B目标<br/><span className="text-xs font-normal">预期可达</span></th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-emerald-400">A目标<br/><span className="text-xs font-normal">理想目标</span></th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-purple-400">差距</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-pink-400">预期提分</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-indigo-400">信心指数</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-slate-400">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculatedGoals.map((goal) => (
                      <tr key={goal.subject} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                        <td className="py-3 px-2 font-medium text-white">{goal.subject}</td>
                        <td className="py-3 px-2 text-center text-slate-400">{goal.fullScore}</td>
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
              </div>

              <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/30">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">💡 提分建议</h3>
                  <div className="flex gap-2">
                    <Button onClick={generateAnalysis} variant="primary" size="sm" disabled={loading}>
                      {loading ? 'AI分析中...' : 'AI分析'}
                    </Button>
                    <ExportButton content={exportContent} filename="ABC目标提分表.md" label="导出" />
                  </div>
                </div>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <span className="text-emerald-400 font-medium">A目标</span>：理想情况下的最高目标，需要付出最大努力</li>
                  <li>• <span className="text-amber-400 font-medium">B目标</span>：基于信心指数计算的预期可达目标，是努力的方向</li>
                  <li>• <span className="text-blue-400 font-medium">C目标</span>：当前水平，是保底成绩</li>
                  <li>• 信心指数越高，预期提分越接近理想目标；建议优先提升信心较低的科目</li>
                </ul>
              </Card>

              {(analysisResult || loading) && (
                <Card className="mt-6">
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📊 AI分析结果</h3>
                  <div className="prose prose-invert max-w-none">
                    <MarkdownRenderer content={analysisResult} />
                    {loading && (
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
