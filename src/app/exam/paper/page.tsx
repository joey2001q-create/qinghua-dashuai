'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, UploadZone, MarkdownRenderer, ProgressBar, ExportButton } from '@/components/common'
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

export default function PaperPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [examType, setExamType] = useState('')
  const [subject, setSubject] = useState('')
  const [fullScore, setFullScore] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [targetScore, setTargetScore] = useState('')
  const [text, setText] = useState('')
  const [images, setImages] = useState<string[]>([])
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

  const handleUpload = async (files: File[]) => {
    const base64s = await Promise.all(
      files.map(f => new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(f)
      }))
    )
    setImages(prev => [...prev, ...base64s].slice(0, 10))
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
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
    if (!fullScore) {
      alert('请填写满分')
      return
    }

    const numCurrent = Number(currentScore)
    const numFull = Number(fullScore)
    const numTarget = Number(targetScore)

    if (numFull <= 0) {
      alert('满分必须大于0')
      return
    }
    if (numCurrent < 0) {
      alert('本次得分不能为负数')
      return
    }
    if (numCurrent > numFull) {
      alert('本次得分不能超过满分')
      return
    }
    if (targetScore) {
      if (numTarget < 0) {
        alert('目标分数不能为负数')
        return
      }
      if (numTarget > numFull) {
        alert('目标分数不能超过满分')
        return
      }
      if (numTarget <= numCurrent) {
        alert('目标分数必须大于本次得分')
        return
      }
    }

    setLoading(true)
    setResult('')
    setShowAnalysis(true)

    try {
      const response = await fetch('/api/analyze-paper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade: finalGrade,
          examType,
          subject,
          fullScore: numFull,
          currentScore: numCurrent,
          targetScore: numTarget || undefined,
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

  const current = Number(currentScore) || 0
  const target = Number(targetScore) || 0
  const total = Number(fullScore) || 100
  const gap = target - current
  const gapPercent = total > 0 ? ((gap / total) * 100).toFixed(1) : 0
  const lossScore = total - current

  const barData = [
    { name: '本次得分', 分数: current },
    { name: '失分', 分数: lossScore > 0 ? lossScore : 0 },
    ...(target > 0 ? [{ name: '目标', 分数: target }] : []),
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">📊 卷后提分</h1>
          <p className="text-slate-400 mb-6">上传试卷或描述考试情况，AI分析失分原因并给出针对性提分方案</p>

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
                        placeholder="如：大学期末、考研"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">考试类型</label>
                      <select
                        value={examType}
                        onChange={(e) => setExamType(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                      >
                        <option value="">请选择</option>
                        {availableExamTypes.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">学科</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                      >
                        <option value="">请选择</option>
                        {availableSubjects.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">满分</label>
                      <input
                        type="number"
                        value={fullScore}
                        onChange={(e) => setFullScore(e.target.value)}
                        placeholder="100"
                        min="1"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">本次得分</label>
                      <input
                        type="number"
                        value={currentScore}
                        onChange={(e) => setCurrentScore(e.target.value)}
                        placeholder="85"
                        min="0"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">下次目标</label>
                      <input
                        type="number"
                        value={targetScore}
                        onChange={(e) => setTargetScore(e.target.value)}
                        placeholder="95"
                        min="0"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <UploadZone
                    onUpload={handleUpload}
                    multiple
                    text="上传卷面图片（支持多选）"
                    subtext="JPG / PNG，最多10张"
                  />

                  {images.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {images.map((img, i) => (
                        <div key={i} className="relative group">
                          <img src={img} alt={`试卷${i + 1}`} className="w-20 h-20 object-cover rounded-lg" />
                          <button
                            onClick={() => removeImage(i)}
                            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm text-slate-400 mb-1">或描述考试情况</label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="如：数学考试，选择题错3题，大题扣15分，主要失分在函数和几何"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[100px] placeholder:text-slate-500"
                    />
                  </div>

                  <Button onClick={analyze} variant="orange" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        AI正在分析...
                      </span>
                    ) : (
                      '🔍 开始分析'
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {showAnalysis && (
              <Card>
                <h3 className="text-lg font-bold text-emerald-400 mb-4">📊 分数分析</h3>
                <div className="space-y-6">
                  {target > 0 && (
                    <ProgressBar
                      current={current}
                      target={target}
                      total={total}
                      label="提分进度"
                      color="emerald"
                    />
                  )}

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-400">{current}</div>
                      <div className="text-xs text-slate-400">本次得分</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-rose-400">{lossScore > 0 ? lossScore : 0}</div>
                      <div className="text-xs text-slate-400">失分</div>
                    </div>
                    {target > 0 && (
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-400">+{gap}</div>
                        <div className="text-xs text-slate-400">需提升</div>
                      </div>
                    )}
                    {target <= 0 && (
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-amber-400">{gapPercent}%</div>
                        <div className="text-xs text-slate-400">得分率</div>
                      </div>
                    )}
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
            <Card ref={resultRef} className="mt-6" onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-400">📊 分析结果</h3>
                {result && (
                  <ExportButton
                    content={`# ${subject}卷后提分分析\n\n年级：${customGrade || grade}\n考试：${examType}\n满分：${fullScore}\n本次得分：${currentScore}${targetScore ? `\n目标：${targetScore}` : ''}\n\n${result}`}
                    filename={`${subject}卷后提分分析.md`}
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
