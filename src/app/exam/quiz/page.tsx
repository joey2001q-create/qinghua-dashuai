'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, StepBar } from '@/components/common'
import { grades, subjects } from '@/lib/utils'
import { Grade, Subject } from '@/types'

interface Quiz {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [grade, setGrade] = useState<Grade>('')
  const [subject, setSubject] = useState<Subject>('')
  const [knowledge, setKnowledge] = useState('')
  const [mode, setMode] = useState<'quick' | 'challenge'>('quick')
  const [loading, setLoading] = useState(false)
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)

  const steps = ['1️⃣ 年级', '2️⃣ 学科', '3️⃣ 知识模块', '4️⃣ 模式']

  const generateQuiz = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade, subject, knowledge }),
      })
      const data = await response.json()
      setQuiz(data)
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
    if (showResult) return
    setSelectedIndex(index)
    setShowResult(true)
    if (index === quiz?.correctIndex) {
      setCorrect(c => c + 1)
    }
    setTotal(t => t + 1)
  }

  const nextQuestion = () => {
    generateQuiz()
  }

  const reset = () => {
    setStep(1)
    setGrade('')
    setSubject('')
    setKnowledge('')
    setMode('quick')
    setQuiz(null)
    setCorrect(0)
    setTotal(0)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>
          
          <h1 className="text-2xl font-bold text-white mb-2">🧠 题感训练</h1>
          <p className="text-slate-400 mb-4">AI自适应训练，识别薄弱环节</p>

          {!quiz && (
            <>
              <StepBar steps={steps} currentStep={step} />

              {step === 1 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📚 选择年级</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {grades.map(g => (
                      <button
                        key={g}
                        onClick={() => setGrade(g)}
                        className={`px-3 py-3 rounded-lg text-sm font-medium transition ${
                          grade === g 
                            ? 'bg-indigo-500 text-white' 
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  <Button onClick={() => setStep(2)} variant="primary" className="mt-4 w-full" disabled={!grade}>
                    下一步 →
                  </Button>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📐 选择学科</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {subjects.map(s => (
                      <button
                        key={s}
                        onClick={() => setSubject(s)}
                        className={`px-3 py-3 rounded-lg text-sm font-medium transition ${
                          subject === s 
                            ? 'bg-indigo-500 text-white' 
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button onClick={() => setStep(1)} variant="outline">← 上一步</Button>
                    <Button onClick={() => setStep(3)} variant="primary" className="flex-1" disabled={!subject}>
                      下一步 →
                    </Button>
                  </div>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">📖 知识模块（可选）</h3>
                  <textarea 
                    value={knowledge}
                    onChange={(e) => setKnowledge(e.target.value)}
                    placeholder="例如：文言文实词、阅读理解答题技巧、议论文写作结构&#10;可填写多个，用回车分隔"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[100px]"
                  />
                  <div className="flex gap-3 mt-4">
                    <Button onClick={() => setStep(2)} variant="outline">← 上一步</Button>
                    <Button onClick={() => setStep(4)} variant="primary" className="flex-1">
                      下一步 →
                    </Button>
                  </div>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">⚡ 选择训练模式</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setMode('quick')}
                      className={`p-6 rounded-xl border-2 transition ${
                        mode === 'quick' 
                          ? 'border-indigo-500 bg-indigo-500/10' 
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-3xl mb-2">⚡</div>
                      <div className="font-bold text-white">快速模式</div>
                      <div className="text-sm text-slate-400 mt-1">逐题训练，即时反馈</div>
                    </button>
                    <button
                      onClick={() => setMode('challenge')}
                      className={`p-6 rounded-xl border-2 transition ${
                        mode === 'challenge' 
                          ? 'border-indigo-500 bg-indigo-500/10' 
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-3xl mb-2">🏆</div>
                      <div className="font-bold text-white">挑战模式</div>
                      <div className="text-sm text-slate-400 mt-1">连续5题，统一评分</div>
                    </button>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button onClick={() => setStep(3)} variant="outline">← 上一步</Button>
                    <Button onClick={generateQuiz} variant="orange" className="flex-1" disabled={loading}>
                      {loading ? '生成中...' : '🚀 开始训练'}
                    </Button>
                  </div>
                </Card>
              )}
            </>
          )}

          {quiz && (
            <>
              <Card className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-400">题感训练</span>
                  <span className="text-sm text-indigo-400 font-bold">{total + 1}</span>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
                  <p className="text-white leading-relaxed">{quiz.question}</p>
                </div>
                <div className="space-y-2">
                  {quiz.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl text-left transition ${
                        showResult
                          ? i === quiz.correctIndex
                            ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400'
                            : i === selectedIndex
                              ? 'bg-red-500/20 border-2 border-red-500 text-red-400'
                              : 'bg-slate-700/50 text-slate-300'
                          : 'bg-slate-700/50 hover:bg-slate-600 text-slate-300'
                      }`}
                    >
                      {String.fromCharCode(65 + i)}. {opt}
                    </button>
                  ))}
                </div>
                {showResult && (
                  <div className={`mt-4 p-4 rounded-xl ${selectedIndex === quiz.correctIndex ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                    <div className={`font-bold mb-2 ${selectedIndex === quiz.correctIndex ? 'text-emerald-400' : 'text-red-400'}`}>
                      {selectedIndex === quiz.correctIndex ? '✓ 回答正确！' : '✗ 回答错误'}
                    </div>
                    <p className="text-slate-300 text-sm">{quiz.explanation}</p>
                  </div>
                )}
                <div className="flex gap-3 mt-4">
                  <Button onClick={reset} variant="outline">← 重新选择</Button>
                  <Button onClick={nextQuestion} variant="primary" className="flex-1" disabled={loading}>
                    {loading ? '生成中...' : '下一题 →'}
                  </Button>
                </div>
              </Card>

              <div className="grid grid-cols-3 gap-3">
                <Card className="text-center py-3">
                  <div className="text-2xl font-bold text-emerald-400">{correct}</div>
                  <div className="text-xs text-slate-400">答对</div>
                </Card>
                <Card className="text-center py-3">
                  <div className="text-2xl font-bold text-indigo-400">{total}</div>
                  <div className="text-xs text-slate-400">总数</div>
                </Card>
                <Card className="text-center py-3">
                  <div className="text-2xl font-bold text-amber-400">{total > 0 ? Math.round(correct / total * 100) : 0}%</div>
                  <div className="text-xs text-slate-400">正确率</div>
                </Card>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
