'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, ExportButton, LoadingIndicator } from '@/components/common'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

const gradeGroups = [
  {
    label: '小学',
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
    subjects: ['数学', '语文', '英语']
  },
  {
    label: '初中',
    grades: ['初一', '初二', '初三'],
    subjects: ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
  },
  {
    label: '高中',
    grades: ['高一', '高二', '高三'],
    subjects: ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
  }
]

const defaultQuestionTypes = ['选择题', '填空题', '解答题', '应用题', '其他']

interface QuestionTypeScore {
  type: string
  totalScore: string
  lostScore: string
}

const PIE_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']

export default function AnalysisPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [examName, setExamName] = useState('')
  const [totalScore, setTotalScore] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [questionScores, setQuestionScores] = useState<QuestionTypeScore[]>(
    defaultQuestionTypes.map(type => ({ type, totalScore: '', lostScore: '' }))
  )
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [showChart, setShowChart] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  const currentGradeGroup = gradeGroups.find(g => g.grades.includes(grade))
  const availableSubjects = customGrade
    ? ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
    : (currentGradeGroup?.subjects || ['数学', '语文', '英语'])

  useEffect(() => {
    if (result && resultRef.current && !isUserScrolling.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  const updateQuestionScore = (index: number, field: 'totalScore' | 'lostScore', value: string) => {
    setQuestionScores(prev => prev.map((item, i) => i === index ? { ...item, [field]: value } : item))
  }

  const analyze = async () => {
    const finalGrade = customGrade || grade
    if (!finalGrade) {
      alert('请选择年级')
      return
    }
    if (!subject) {
      alert('请选择学科')
      return
    }
    if (!currentScore) {
      alert('请填写本次得分')
      return
    }

    const numCurrent = Number(currentScore)
    const numTotal = Number(totalScore)

    if (numTotal && numCurrent < 0) {
      alert('本次得分不能为负数')
      return
    }
    if (numTotal && numCurrent > numTotal) {
      alert('本次得分不能超过满分')
      return
    }

    const hasInvalidScore = questionScores.some(s => {
      if (!s.totalScore && !s.lostScore) return false
      if (Number(s.lostScore) < 0 || Number(s.totalScore) <= 0) return true
      if (Number(s.lostScore) > Number(s.totalScore)) return true
      return false
    })
    if (hasInvalidScore) {
      alert('失分数据有误：失分不能为负数、不能超过该题型总分、总分必须大于0')
      return
    }

    setLoading(true)
    setResult('')
    setShowChart(true)

    const questionScoreData = questionScores
      .filter(s => s.totalScore && s.lostScore)
      .map(s => ({ type: s.type, totalScore: Number(s.totalScore), lostScore: Number(s.lostScore) }))

    try {
      const response = await fetch('/api/weak-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade: finalGrade,
          subject,
          examName,
          totalScore: numTotal || undefined,
          currentScore: numCurrent,
          questionScores: questionScoreData,
          text,
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
      alert('分析失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const numTotal = Number(totalScore) || 100
  const numCurrent = Number(currentScore) || 0
  const totalLost = numTotal - numCurrent

  const pieData = questionScores
    .filter(s => s.lostScore && Number(s.lostScore) > 0)
    .map(s => ({ name: s.type, value: Number(s.lostScore) }))

  const barData = questionScores
    .filter(s => s.totalScore && Number(s.totalScore) > 0)
    .map(s => ({
      name: s.type,
      得分: Number(s.totalScore) - Number(s.lostScore || 0),
      失分: Number(s.lostScore || 0),
    }))

  const finalGrade = customGrade || grade

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">📊 失分原因分析器</h1>
          <p className="text-slate-400 mb-6">按题型录入失分，AI诊断薄弱知识点并给出针对性建议</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Card>
                <h3 className="text-lg font-bold text-indigo-400 mb-4">📝 填写信息</h3>
                <div className="space-y-4">
                  <div className="space-y-4">
                    {gradeGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-sm text-slate-400 mb-2">{group.label}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {group.grades.map((g) => (
                            <button key={g} onClick={() => { setGrade(g); setCustomGrade('') }} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${grade === g ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>{g}</button>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-slate-700">
                      <label className="block text-sm text-slate-400 mb-1">或自定义年级</label>
                      <input type="text" value={customGrade} onChange={(e) => { setCustomGrade(e.target.value); setGrade('') }} placeholder="如：大学期末、考研" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">学科</label>
                      <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white">
                        <option value="">请选择</option>
                        {availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">考试名称</label>
                      <select value={examName} onChange={(e) => setExamName(e.target.value)} className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white">
                        <option value="">请选择</option>
                        <option value="月考">月考</option>
                        <option value="期中">期中</option>
                        <option value="期末">期末</option>
                        <option value="周测">周测</option>
                        <option value="模拟考">模拟考</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">满分</label>
                      <input type="number" value={totalScore} onChange={(e) => setTotalScore(e.target.value)} placeholder="100" min="1" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">本次得分</label>
                      <input type="number" value={currentScore} onChange={(e) => setCurrentScore(e.target.value)} placeholder="85" min="0" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 mb-2">各题型失分情况</p>
                    <div className="space-y-2">
                      {questionScores.map((qs, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-sm text-slate-300 w-16 flex-shrink-0">{qs.type}</span>
                          <input type="number" value={qs.totalScore} onChange={(e) => updateQuestionScore(i, 'totalScore', e.target.value)} placeholder="总分" min="0" className="w-20 px-2 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm text-center placeholder:text-slate-500" />
                          <input type="number" value={qs.lostScore} onChange={(e) => updateQuestionScore(i, 'lostScore', e.target.value)} placeholder="失分" min="0" className="w-20 px-2 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm text-center placeholder:text-slate-500" />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">格式：题型 | 总分 | 失分</p>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-1">补充描述（可选）</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="如：主要错在函数图像和几何证明，计算失误2题..." className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[80px] placeholder:text-slate-500" />
                  </div>

                  <Button onClick={analyze} variant="primary" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        AI正在分析...
                      </span>
                    ) : '🔍 开始分析'}
                  </Button>
                </div>
              </Card>
            </div>

            {showChart && (
              <div className="space-y-6">
                <Card>
                  <h3 className="text-lg font-bold text-emerald-400 mb-4">📊 失分分布</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-400">{numCurrent}</div>
                        <div className="text-xs text-slate-400">本次得分</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-red-400">{totalLost > 0 ? totalLost : 0}</div>
                        <div className="text-xs text-slate-400">总失分</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-400">{numTotal > 0 ? Math.round((numCurrent / numTotal) * 100) : 0}%</div>
                        <div className="text-xs text-slate-400">得分率</div>
                      </div>
                    </div>

                    {pieData.length > 0 && (
                      <div className="h-52">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value" label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}>
                              {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px' }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    )}

                    {barData.length > 0 && (
                      <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9ca3af" />
                            <YAxis stroke="#9ca3af" />
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px' }} />
                            <Bar dataKey="得分" fill="#6366f1" radius={[4, 4, 0, 0]} stackId="a" />
                            <Bar dataKey="失分" fill="#ef4444" radius={[4, 4, 0, 0]} stackId="a" />
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
                <h3 className="text-lg font-bold text-indigo-400">📊 分析结果</h3>
                <ExportButton
                  content={`# ${subject}失分原因分析\n\n年级：${finalGrade}\n考试：${examName}\n满分：${totalScore}\n本次得分：${currentScore}\n总失分：${totalLost}\n\n${result}`}
                  filename={`${subject}失分原因分析`}
                  label="导出"
                  disabled={loading || !result}
                />
              </div>
              <div className="prose prose-invert max-w-none">
                {loading && !result && <LoadingIndicator text="AI正在分析失分原因..." />}
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
