'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, StepBar, UploadZone } from '@/components/common'
import { grades, subjects } from '@/lib/utils'
import { Grade, Subject } from '@/types'

export default function RushPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [grade, setGrade] = useState<Grade>('')
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([])
  const [examName, setExamName] = useState('')
  const [examDate, setExamDate] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [fullScore, setFullScore] = useState('100')
  const [targetScore, setTargetScore] = useState('')
  const [dailyHours, setDailyHours] = useState('2')
  const [materials, setMaterials] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const steps = ['1️⃣ 年级', '2️⃣ 科目', '3️⃣ 备考时间', '4️⃣ 上传资料', '5️⃣ 生成计划']

  const toggleSubject = (subject: Subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject))
    } else if (selectedSubjects.length < 3) {
      setSelectedSubjects([...selectedSubjects, subject])
    }
  }

  const handleUpload = async (files: File[]) => {
    const text = files.map(f => f.name).join(', ')
    setMaterials(`已上传: ${text}`)
  }

  const generatePlan = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/rush-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          subjects: selectedSubjects,
          examName,
          examDate,
          currentScore: Number(currentScore),
          fullScore: Number(fullScore),
          targetScore: Number(targetScore),
          dailyHours: Number(dailyHours),
          materials,
        }),
      })
      const data = await response.json()
      setResult(data.content)
      setStep(5)
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1: return grade !== ''
      case 2: return selectedSubjects.length > 0
      case 3: return examName && examDate && currentScore && targetScore
      case 4: return true
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>
          
          <h1 className="text-2xl font-bold text-white mb-2">🗓️ 考前冲刺计划</h1>
          <p className="text-slate-400 mb-4">设定目标，AI生成每日冲刺清单</p>

          <StepBar steps={steps} currentStep={step} />

          {step === 1 && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📚 选择年级</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                {grades.map(g => (
                  <button
                    key={g}
                    onClick={() => setGrade(g)}
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
              <div className="mt-4">
                <label className="block text-sm text-slate-400 mb-1">或自定义年级</label>
                <input 
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="如：小升初、大学期末"
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                />
              </div>
              <Button onClick={() => setStep(2)} variant="primary" className="mt-4 w-full" disabled={!canProceed()}>
                下一步 →
              </Button>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📐 选择科目（1-3科）</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
                {subjects.map(s => (
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
              <p className="text-sm text-slate-400 mb-4">已选：{selectedSubjects.join('、') || '待选择'}</p>
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
                <div>
                  <label className="block text-sm text-slate-400 mb-1">考试名称</label>
                  <input 
                    type="text"
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    placeholder="如：中考一模、月考"
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">当前得分</label>
                    <input 
                      type="number"
                      value={currentScore}
                      onChange={(e) => setCurrentScore(e.target.value)}
                      placeholder="80"
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">满分</label>
                    <input 
                      type="number"
                      value={fullScore}
                      onChange={(e) => setFullScore(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">目标分数</label>
                  <input 
                    type="number"
                    value={targetScore}
                    onChange={(e) => setTargetScore(e.target.value)}
                    placeholder="95"
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  />
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
                <Button onClick={() => setStep(4)} variant="primary" className="flex-1" disabled={!canProceed()}>
                  下一步 →
                </Button>
              </div>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📤 上传学习资料（可选）</h3>
              <UploadZone 
                onUpload={handleUpload}
                text="上传课本、笔记或试卷图片"
                subtext="AI将根据你的资料制定针对性计划"
              />
              {materials && <p className="text-sm text-emerald-400 mt-2">{materials}</p>}
              <div className="flex gap-3 mt-4">
                <Button onClick={() => setStep(3)} variant="outline">← 上一步</Button>
                <Button onClick={generatePlan} variant="orange" className="flex-1" disabled={loading}>
                  {loading ? '生成中...' : '🚀 生成冲刺计划'}
                </Button>
              </div>
            </Card>
          )}

          {step === 5 && result && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📋 你的冲刺计划</h3>
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">{result}</div>
              <Button onClick={() => {
                setStep(1)
                setResult('')
                setGrade('')
                setSelectedSubjects([])
              }} variant="ghost" className="mt-4">
                🔄 重新开始
              </Button>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
