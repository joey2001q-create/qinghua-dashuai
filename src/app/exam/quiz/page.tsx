'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, StepBar, MarkdownRenderer, ExportButton } from '@/components/common'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

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

const difficultyLabels: Record<number, { label: string; color: string; emoji: string }> = {
  1: { label: '基础', color: 'text-emerald-400', emoji: '🟢' },
  2: { label: '提高', color: 'text-amber-400', emoji: '🟡' },
  3: { label: '挑战', color: 'text-red-400', emoji: '🔴' },
}

const PIE_COLORS = ['#10b981', '#ef4444']

interface Quiz {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  knowledgePoint: string
  difficulty: number
}

interface WrongQuestion extends Quiz {
  selectedIndex: number
}

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [knowledge, setKnowledge] = useState('')
  const [mode, setMode] = useState<'quick' | 'challenge'>('quick')
  const [loading, setLoading] = useState(false)
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)
  const [difficulty, setDifficulty] = useState(1)
  const [wrongQuestions, setWrongQuestions] = useState<WrongQuestion[]>([])
  const [knowledgeStats, setKnowledgeStats] = useState<Record<string, { correct: number; total: number }>>({})
  const [showWrongBook, setShowWrongBook] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const [challengeQuestions, setChallengeQuestions] = useState(0)
  const [challengeIndex, setChallengeIndex] = useState(0)
  const [challengeCorrect, setChallengeCorrect] = useState(0)

  const currentGradeGroup = gradeGroups.find(g => g.grades.includes(grade))
  const availableSubjects = customGrade
    ? ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
    : (currentGradeGroup?.subjects || ['数学', '语文', '英语'])

  const steps = ['1️⃣ 年级', '2️⃣ 学科', '3️⃣ 知识模块', '4️⃣ 模式']

  const generateQuiz = async () => {
    const finalGrade = customGrade || grade
    setLoading(true)
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade: finalGrade, subject, knowledge, difficulty }),
      })
      const data = await response.json()
      const quizData: Quiz = {
        question: data.question,
        options: data.options,
        correctIndex: data.correctIndex,
        explanation: data.explanation,
        knowledgePoint: data.knowledgePoint || '综合',
        difficulty: data.difficulty || difficulty,
      }
      setQuiz(quizData)
      setSelectedIndex(null)
      setShowResult(false)
    } catch (error) {
      console.error(error)
      alert('生成题目失败')
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (index: number) => {
    if (showResult || !quiz) return
    setSelectedIndex(index)
    setShowResult(true)
    const isCorrect = index === quiz.correctIndex

    if (isCorrect) {
      setCorrect(c => c + 1)
      if (difficulty < 3) setDifficulty(d => d + 1)
    } else {
      if (difficulty > 1) setDifficulty(d => d - 1)
      setWrongQuestions(prev => [...prev, { ...quiz, selectedIndex: index }])
    }

    setKnowledgeStats(prev => {
      const kp = quiz.knowledgePoint
      const existing = prev[kp] || { correct: 0, total: 0 }
      return {
        ...prev,
        [kp]: {
          correct: existing.correct + (isCorrect ? 1 : 0),
          total: existing.total + 1,
        }
      }
    })

    if (mode === 'challenge') {
      if (isCorrect) setChallengeCorrect(c => c + 1)
      setChallengeIndex(i => i + 1)
    }

    setTotal(t => t + 1)
  }

  const nextQuestion = () => {
    if (mode === 'challenge' && challengeIndex >= 5) {
      setShowReport(true)
      return
    }
    generateQuiz()
  }

  const startChallenge = () => {
    setChallengeQuestions(5)
    setChallengeIndex(0)
    setChallengeCorrect(0)
    generateQuiz()
  }

  const reset = () => {
    setStep(1)
    setGrade('')
    setCustomGrade('')
    setSubject('')
    setKnowledge('')
    setMode('quick')
    setQuiz(null)
    setCorrect(0)
    setTotal(0)
    setDifficulty(1)
    setWrongQuestions([])
    setKnowledgeStats({})
    setShowWrongBook(false)
    setShowReport(false)
    setChallengeIndex(0)
    setChallengeCorrect(0)
  }

  const endTraining = () => {
    setShowReport(true)
    setQuiz(null)
  }

  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
  const finalGrade = customGrade || grade

  const reportContent = `# ${subject}题感训练报告

## 基本信息
- 年级：${finalGrade}
- 训练模式：${mode === 'quick' ? '快速模式' : '挑战模式'}
- 总题数：${total}
- 答对：${correct}
- 正确率：${accuracy}%

## 知识点掌握情况
${Object.entries(knowledgeStats).map(([kp, stat]) => `- ${kp}：${stat.correct}/${stat.total}（${Math.round((stat.correct / stat.total) * 100)}%）`).join('\n')}

## 错题记录
${wrongQuestions.map((q, i) => `### 第${i + 1}题\n**题目**：${q.question}\n**你的答案**：${String.fromCharCode(65 + q.selectedIndex)}. ${q.options[q.selectedIndex]}\n**正确答案**：${String.fromCharCode(65 + q.correctIndex)}. ${q.options[q.correctIndex]}\n**解析**：${q.explanation}`).join('\n\n')}
`

  const pieData = [
    { name: '答对', value: correct },
    { name: '答错', value: total - correct },
  ].filter(d => d.value > 0)

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🧠 题感训练</h1>
          <p className="text-slate-400 mb-6">AI自适应训练，智能调整难度，识别薄弱环节</p>

          {showReport ? (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-bold text-emerald-400 mb-4">📊 训练报告</h3>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-400">{total}</div>
                    <div className="text-xs text-slate-400">总题数</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-400">{correct}</div>
                    <div className="text-xs text-slate-400">答对</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-red-400">{total - correct}</div>
                    <div className="text-xs text-slate-400">答错</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-amber-400">{accuracy}%</div>
                    <div className="text-xs text-slate-400">正确率</div>
                  </div>
                </div>

                {pieData.length > 0 && (
                  <div className="h-52 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value" label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}>
                          {pieData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {Object.keys(knowledgeStats).length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-300 mb-3">知识点掌握情况</h4>
                    <div className="space-y-2">
                      {Object.entries(knowledgeStats).map(([kp, stat]) => {
                        const kpAccuracy = Math.round((stat.correct / stat.total) * 100)
                        return (
                          <div key={kp} className="flex items-center gap-3">
                            <span className="text-sm text-slate-300 w-24 flex-shrink-0 truncate">{kp}</span>
                            <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${kpAccuracy >= 80 ? 'bg-emerald-500' : kpAccuracy >= 50 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${kpAccuracy}%` }} />
                            </div>
                            <span className={`text-sm font-medium w-12 text-right ${kpAccuracy >= 80 ? 'text-emerald-400' : kpAccuracy >= 50 ? 'text-amber-400' : 'text-red-400'}`}>{kpAccuracy}%</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <ExportButton content={reportContent} filename={`${subject}题感训练报告.md`} label="导出报告" />
                  <Button onClick={reset} variant="primary" className="flex-1">🔄 重新训练</Button>
                </div>
              </Card>

              {wrongQuestions.length > 0 && (
                <Card>
                  <h3 className="text-lg font-bold text-red-400 mb-4">❌ 错题本（{wrongQuestions.length}题）</h3>
                  <div className="space-y-4">
                    {wrongQuestions.map((q, i) => (
                      <div key={i} className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                        <p className="text-white mb-2">{i + 1}. {q.question}</p>
                        <div className="space-y-1 mb-2">
                          {q.options.map((opt, oi) => (
                            <p key={oi} className={`text-sm ${oi === q.correctIndex ? 'text-emerald-400' : oi === q.selectedIndex ? 'text-red-400 line-through' : 'text-slate-500'}`}>
                              {String.fromCharCode(65 + oi)}. {opt} {oi === q.correctIndex ? '✓' : oi === q.selectedIndex ? '✗' : ''}
                            </p>
                          ))}
                        </div>
                        <p className="text-slate-400 text-sm border-t border-slate-700 pt-2">💡 {q.explanation}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          ) : !quiz && !showWrongBook ? (
            <>
              <StepBar steps={steps} currentStep={step} />

              {step === 1 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📚 选择年级</h3>
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
                  <Button onClick={() => setStep(2)} variant="primary" className="mt-4 w-full" disabled={!grade && !customGrade}>下一步 →</Button>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📐 选择学科</h3>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {availableSubjects.map(s => (
                      <button key={s} onClick={() => setSubject(s)} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${subject === s ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>{s}</button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={() => setStep(1)} variant="outline">← 上一步</Button>
                    <Button onClick={() => setStep(3)} variant="primary" className="flex-1" disabled={!subject}>下一步 →</Button>
                  </div>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📖 知识模块（可选）</h3>
                  <textarea value={knowledge} onChange={(e) => setKnowledge(e.target.value)} placeholder="例如：文言文实词、阅读理解答题技巧&#10;可填写多个，用回车分隔" className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[100px] placeholder:text-slate-500" />
                  <div className="flex gap-3 mt-4">
                    <Button onClick={() => setStep(2)} variant="outline">← 上一步</Button>
                    <Button onClick={() => setStep(4)} variant="primary" className="flex-1">下一步 →</Button>
                  </div>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">⚡ 选择训练模式</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => setMode('quick')} className={`p-6 rounded-xl border-2 transition ${mode === 'quick' ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-600 hover:border-slate-500'}`}>
                      <div className="text-3xl mb-2">⚡</div>
                      <div className="font-bold text-white">快速模式</div>
                      <div className="text-sm text-slate-400 mt-1">逐题训练，即时反馈</div>
                      <div className="text-xs text-slate-500 mt-2">难度自适应调整</div>
                    </button>
                    <button onClick={() => setMode('challenge')} className={`p-6 rounded-xl border-2 transition ${mode === 'challenge' ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-600 hover:border-slate-500'}`}>
                      <div className="text-3xl mb-2">🏆</div>
                      <div className="font-bold text-white">挑战模式</div>
                      <div className="text-sm text-slate-400 mt-1">连续5题，统一评分</div>
                      <div className="text-xs text-slate-500 mt-2">测试综合能力</div>
                    </button>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button onClick={() => setStep(3)} variant="outline">← 上一步</Button>
                    <Button onClick={mode === 'challenge' ? startChallenge : generateQuiz} variant="orange" className="flex-1" disabled={loading}>
                      {loading ? '生成中...' : '🚀 开始训练'}
                    </Button>
                  </div>
                </Card>
              )}
            </>
          ) : quiz ? (
            <>
              <Card className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400">题感训练</span>
                    <span className={`text-sm font-bold ${difficultyLabels[difficulty].color}`}>
                      {difficultyLabels[difficulty].emoji} {difficultyLabels[difficulty].label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {mode === 'challenge' && (
                      <span className="text-sm text-slate-400">{challengeIndex}/5</span>
                    )}
                    <span className="text-sm text-indigo-400 font-bold">第{total + 1}题</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
                  <p className="text-white leading-relaxed">{quiz.question}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded">{quiz.knowledgePoint}</span>
                </div>
                <div className="space-y-2">
                  {quiz.options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(i)} disabled={showResult} className={`w-full p-4 rounded-xl text-left transition ${showResult ? i === quiz.correctIndex ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400' : i === selectedIndex ? 'bg-red-500/20 border-2 border-red-500 text-red-400' : 'bg-slate-700/50 text-slate-300' : 'bg-slate-700/50 hover:bg-slate-600 text-slate-300'}`}>
                      {String.fromCharCode(65 + i)}. {opt}
                    </button>
                  ))}
                </div>
                {showResult && (
                  <div className={`mt-4 p-4 rounded-xl ${selectedIndex === quiz.correctIndex ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                    <div className={`font-bold mb-2 ${selectedIndex === quiz.correctIndex ? 'text-emerald-400' : 'text-red-400'}`}>
                      {selectedIndex === quiz.correctIndex ? '✓ 回答正确！' : '✗ 回答错误'}
                      {selectedIndex === quiz.correctIndex && difficulty < 3 && <span className="text-sm ml-2 text-slate-400">→ 难度提升</span>}
                      {selectedIndex !== quiz.correctIndex && difficulty > 1 && <span className="text-sm ml-2 text-slate-400">→ 难度降低</span>}
                    </div>
                    <p className="text-slate-300 text-sm">{quiz.explanation}</p>
                  </div>
                )}
                <div className="flex gap-3 mt-4">
                  <Button onClick={endTraining} variant="outline">📊 结束训练</Button>
                  <Button onClick={reset} variant="ghost">← 重新选择</Button>
                  <Button onClick={nextQuestion} variant="primary" className="flex-1" disabled={loading}>
                    {loading ? '生成中...' : mode === 'challenge' && challengeIndex >= 5 ? '查看报告 →' : '下一题 →'}
                  </Button>
                </div>
              </Card>

              <div className="grid grid-cols-4 gap-3">
                <Card className="text-center py-3">
                  <div className="text-2xl font-bold text-emerald-400">{correct}</div>
                  <div className="text-xs text-slate-400">答对</div>
                </Card>
                <Card className="text-center py-3">
                  <div className="text-2xl font-bold text-red-400">{total - correct}</div>
                  <div className="text-xs text-slate-400">答错</div>
                </Card>
                <Card className="text-center py-3">
                  <div className="text-2xl font-bold text-amber-400">{accuracy}%</div>
                  <div className="text-xs text-slate-400">正确率</div>
                </Card>
                <Card className="text-center py-3">
                  <div className={`text-2xl font-bold ${difficultyLabels[difficulty].color}`}>{difficultyLabels[difficulty].emoji}</div>
                  <div className="text-xs text-slate-400">{difficultyLabels[difficulty].label}</div>
                </Card>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </div>
  )
}
