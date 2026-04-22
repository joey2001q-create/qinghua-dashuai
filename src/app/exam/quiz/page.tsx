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
  const [batchCount, setBatchCount] = useState(5)
  const [batchQuestions, setBatchQuestions] = useState<Quiz[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [batchAnswers, setBatchAnswers] = useState<Record<number, number>>({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [showBatchResults, setShowBatchResults] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)
  const [difficulty, setDifficulty] = useState(1)
  const [wrongQuestions, setWrongQuestions] = useState<WrongQuestion[]>([])
  const [knowledgeStats, setKnowledgeStats] = useState<Record<string, { correct: number; total: number }>>({})
  const [showReport, setShowReport] = useState(false)

  const currentGradeGroup = gradeGroups.find(g => g.grades.includes(grade))
  const availableSubjects = customGrade
    ? ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
    : (currentGradeGroup?.subjects || ['数学', '语文', '英语'])

  const steps = ['1️⃣ 年级', '2️⃣ 学科', '3️⃣ 知识模块', '4️⃣ 开始训练']

  const generateBatchQuizzes = async () => {
    const finalGrade = customGrade || grade
    setLoading(true)
    setBatchQuestions([])
    setBatchAnswers({})
    setShowBatchResults(false)
    setShowExplanation(false)
    setCorrect(0)
    setTotal(0)
    setWrongQuestions([])
    setKnowledgeStats({})
    setDifficulty(1)
    setCurrentIndex(0)

    try {
      const quizzes: Quiz[] = []
      for (let i = 0; i < batchCount; i++) {
        const response = await fetch('/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ grade: finalGrade, subject, knowledge, difficulty }),
        })
        const data = await response.json()
        const cleanOptions = (data.options || []).map((opt: string) => {
          return opt.replace(/^[A-D][.、:：]\s*/, '')
        })
        quizzes.push({
          question: data.question,
          options: cleanOptions,
          correctIndex: data.correctIndex,
          explanation: data.explanation,
          knowledgePoint: data.knowledgePoint || '综合',
          difficulty: data.difficulty || difficulty,
        })
      }
      setBatchQuestions(quizzes)
    } catch (error) {
      console.error(error)
      alert('生成题目失败')
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return
    setBatchAnswers(prev => ({ ...prev, [currentIndex]: answerIndex }))
    setShowExplanation(true)

    const currentQuiz = batchQuestions[currentIndex]
    const isCorrect = answerIndex === currentQuiz.correctIndex

    const kp = currentQuiz.knowledgePoint
    setKnowledgeStats(prev => {
      const existing = prev[kp] || { correct: 0, total: 0 }
      return {
        ...prev,
        [kp]: {
          correct: existing.correct + (isCorrect ? 1 : 0),
          total: existing.total + 1,
        }
      }
    })
  }

  const nextQuestion = () => {
    const currentQuiz = batchQuestions[currentIndex]
    const userAnswer = batchAnswers[currentIndex]
    const isCorrect = userAnswer === currentQuiz.correctIndex

    if (isCorrect) {
      setCorrect(prev => prev + 1)
    } else {
      setWrongQuestions(prev => [...prev, { ...currentQuiz, selectedIndex: userAnswer }])
    }

    setTotal(prev => prev + 1)

    if (currentIndex < batchQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setShowExplanation(false)
    } else {
      setShowBatchResults(true)
    }
  }

  const startChallenge = () => {
    setBatchCount(5)
    generateBatchQuizzes()
  }

  const reset = () => {
    setStep(1)
    setGrade('')
    setCustomGrade('')
    setSubject('')
    setKnowledge('')
    setMode('quick')
    setBatchQuestions([])
    setBatchAnswers({})
    setShowBatchResults(false)
    setShowExplanation(false)
    setCorrect(0)
    setTotal(0)
    setDifficulty(1)
    setWrongQuestions([])
    setKnowledgeStats({})
    setShowReport(false)
    setCurrentIndex(0)
  }

  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
  const finalGrade = customGrade || grade
  const currentQuiz = batchQuestions[currentIndex]
  const currentAnswer = batchAnswers[currentIndex]
  const hasAnswered = currentAnswer !== undefined

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

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🧠 题感训练</h1>
          <p className="text-slate-400 mb-6">一题一答，稳扎稳打</p>

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
                  <ExportButton content={reportContent} filename={`${subject}题感训练报告`} label="导出报告" disabled={!showReport} />
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
          ) : batchQuestions.length > 0 && !showBatchResults ? (
            <div className="space-y-4">
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-indigo-500 text-white`}>
                      {currentIndex + 1}
                    </span>
                    <span className="text-sm text-slate-400">/ {batchQuestions.length}题</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold ${difficultyLabels[currentQuiz?.difficulty || 1].color}`}>
                      {difficultyLabels[currentQuiz?.difficulty || 1].emoji} {difficultyLabels[currentQuiz?.difficulty || 1].label}
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded">{currentQuiz?.knowledgePoint}</span>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                  <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${((currentIndex) / batchQuestions.length) * 100}%` }} />
                </div>
              </Card>

              <Card>
                <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
                  <p className="text-white leading-relaxed text-lg">{currentQuiz?.question}</p>
                </div>

                <div className="space-y-3">
                  {currentQuiz?.options.map((opt, oi) => {
                    const isSelected = currentAnswer === oi
                    const isCorrect = oi === currentQuiz.correctIndex
                    const showResult = showExplanation

                    let btnClass = 'bg-slate-700/50 hover:bg-slate-600 text-slate-300'
                    if (showResult) {
                      if (isCorrect) {
                        btnClass = 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400'
                      } else if (isSelected) {
                        btnClass = 'bg-red-500/20 border-2 border-red-500 text-red-400'
                      } else {
                        btnClass = 'bg-slate-700/30 text-slate-500'
                      }
                    } else if (isSelected) {
                      btnClass = 'bg-indigo-500/20 border-2 border-indigo-500 text-indigo-300'
                    }

                    return (
                      <button
                        key={oi}
                        onClick={() => handleAnswer(oi)}
                        disabled={showExplanation}
                        className={`w-full p-4 rounded-lg text-left transition ${btnClass}`}
                      >
                        <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span>
                        {opt}
                        {showResult && isCorrect && <span className="ml-2">✓</span>}
                        {showResult && isSelected && !isCorrect && <span className="ml-2">✗</span>}
                      </button>
                    )
                  })}
                </div>
              </Card>

              {showExplanation && (
                <Card className={`border-l-4 ${currentAnswer === currentQuiz.correctIndex ? 'border-l-emerald-500' : 'border-l-red-500'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    {currentAnswer === currentQuiz.correctIndex ? (
                      <span className="text-emerald-400 font-bold text-lg">✓ 回答正确！</span>
                    ) : (
                      <span className="text-red-400 font-bold text-lg">✗ 回答错误</span>
                    )}
                  </div>
                  {currentAnswer !== currentQuiz.correctIndex && (
                    <p className="text-slate-300 mb-3">正确答案：{String.fromCharCode(65 + currentQuiz.correctIndex)}. {currentQuiz.options[currentQuiz.correctIndex]}</p>
                  )}
                  <p className="text-slate-400 text-sm border-t border-slate-700 pt-3">💡 {currentQuiz.explanation}</p>
                </Card>
              )}

              <Card>
                <Button
                  onClick={nextQuestion}
                  variant={showExplanation ? "primary" : "outline"}
                  className="w-full"
                  disabled={!hasAnswered}
                >
                  {!showExplanation ? '请先选择答案' : currentIndex < batchQuestions.length - 1 ? '下一题 →' : '查看结果'}
                </Button>
              </Card>
            </div>
          ) : showBatchResults && batchQuestions.length > 0 ? (
            <div className="space-y-4">
              <Card>
                <h3 className="text-lg font-bold text-emerald-400 mb-4">📊 本轮答题完成</h3>
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
                <div className="flex gap-3">
                  <Button onClick={() => { setShowBatchResults(false); setBatchQuestions([]) }} variant="outline">← 再练一组</Button>
                  <Button onClick={() => setShowReport(true)} variant="primary" className="flex-1">📊 查看完整报告</Button>
                </div>
              </Card>

              {wrongQuestions.length > 0 && (
                <Card>
                  <h3 className="text-lg font-bold text-red-400 mb-4">❌ 错题回顾</h3>
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

              <Card>
                <div className="flex gap-3">
                  <Button onClick={() => generateBatchQuizzes()} variant="orange" className="flex-1" disabled={loading}>
                    {loading ? '生成中...' : '🔄 再练一组'}
                  </Button>
                  <Button onClick={reset} variant="outline">← 重新选择</Button>
                </div>
              </Card>
            </div>
          ) : (
            <>
              <StepBar steps={steps} currentStep={step} className="mb-6" />

              {step === 1 && (
                <Card className="mb-6">
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
                <Card className="mb-6">
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📐 选择学科</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4">
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
                <Card className="mb-6">
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📖 知识模块（可选）</h3>
                  <textarea value={knowledge} onChange={(e) => setKnowledge(e.target.value)} placeholder="例如：文言文实词、阅读理解答题技巧&#10;可填写多个，用回车分隔" className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[100px] placeholder:text-slate-500" />
                  <div className="flex gap-3 mt-4">
                    <Button onClick={() => setStep(2)} variant="outline">← 上一步</Button>
                    <Button onClick={() => setStep(4)} variant="primary" className="flex-1">下一步 →</Button>
                  </div>
                </Card>
              )}

              {step === 4 && (
                <Card className="mb-6">
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">⚡ 训练设置</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button onClick={() => setMode('quick')} className={`p-6 rounded-xl border-2 transition ${mode === 'quick' ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-600 hover:border-slate-500'}`}>
                      <div className="text-3xl mb-2">⚡</div>
                      <div className="font-bold text-white">快速模式</div>
                      <div className="text-sm text-slate-400 mt-1">一题一答</div>
                    </button>
                    <button onClick={() => setMode('challenge')} className={`p-6 rounded-xl border-2 transition ${mode === 'challenge' ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-600 hover:border-slate-500'}`}>
                      <div className="text-3xl mb-2">🏆</div>
                      <div className="font-bold text-white">挑战模式</div>
                      <div className="text-sm text-slate-400 mt-1">连续5题</div>
                    </button>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm text-slate-400 mb-2">每组题目数量</label>
                    <div className="flex gap-2">
                      {[5, 10, 15, 20].map(n => (
                        <button
                          key={n}
                          onClick={() => setBatchCount(n)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                            batchCount === n ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                          }`}
                        >
                          {n}题
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={() => setStep(3)} variant="outline">← 上一步</Button>
                    <Button onClick={mode === 'challenge' ? startChallenge : generateBatchQuizzes} variant="orange" className="flex-1" disabled={loading}>
                      {loading ? '生成中...' : '🚀 开始训练'}
                    </Button>
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

/*

// ============ 以下为旧版代码，已注释保留 ============

// 旧版批量显示所有题目
/*
const [batchQuestions, setBatchQuestions] = useState<Quiz[]>([])
const [batchAnswers, setBatchAnswers] = useState<Record<number, number>>({})
const [showBatchResults, setShowBatchResults] = useState(false)

const handleBatchAnswer = (index: number, answerIndex: number) => {
  if (showBatchResults) return
  setBatchAnswers(prev => ({ ...prev, [index]: answerIndex }))
}

const submitBatchAnswers = () => {
  if (batchQuestions.length === 0) return

  let correctCount = 0
  const newWrongQuestions: WrongQuestion[] = []
  const newKnowledgeStats: Record<string, { correct: number; total: number }> = {}

  batchQuestions.forEach((quiz, index) => {
    const userAnswer = batchAnswers[index]
    if (userAnswer === undefined) return

    const isCorrect = userAnswer === quiz.correctIndex
    if (isCorrect) {
      correctCount++
    } else {
      newWrongQuestions.push({ ...quiz, selectedIndex: userAnswer })
    }

    const kp = quiz.knowledgePoint
    const existing = newKnowledgeStats[kp] || { correct: 0, total: 0 }
    newKnowledgeStats[kp] = {
      correct: existing.correct + (isCorrect ? 1 : 0),
      total: existing.total + 1,
    }
  })

  setCorrect(correctCount)
  setTotal(batchQuestions.length)
  setWrongQuestions(newWrongQuestions)
  setKnowledgeStats(newKnowledgeStats)
  setShowBatchResults(true)
}

const allAnswered = batchQuestions.length > 0 && batchQuestions.every((_, i) => batchAnswers[i] !== undefined)
//*/
