'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, UploadZone, MarkdownRenderer, ExportButton } from '@/components/common'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

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

const COVERAGE_COLORS = ['#10b981', '#f59e0b', '#ef4444']

export default function PointsPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [showCoverage, setShowCoverage] = useState(false)
  const [mastered, setMastered] = useState(0)
  const [halfMastered, setHalfMastered] = useState(0)
  const [notMastered, setNotMastered] = useState(0)
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

  const handleUpload = async (files: File[]) => {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = async () => {
      const base64 = reader.result as string
      setLoading(true)
      try {
        const response = await fetch('/api/ocr', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64 }),
        })
        const data = await response.json()
        setText(data.text)
      } catch (error) {
        console.error(error)
        alert('OCR识别失败')
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }

  const checkPoints = async () => {
    const finalGrade = customGrade || grade
    if (!finalGrade) {
      alert('请选择年级')
      return
    }
    if (!subject) {
      alert('请选择学科')
      return
    }
    if (!text.trim()) {
      alert('请输入或上传考试大纲')
      return
    }

    setLoading(true)
    setResult('')
    setShowCoverage(true)

    try {
      const response = await fetch('/api/knowledge-points', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, grade: finalGrade, subject }),
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

  const totalPoints = mastered + halfMastered + notMastered
  const coveragePercent = totalPoints > 0 ? ((mastered / totalPoints) * 100).toFixed(1) : 0

  const pieData = [
    { name: '已掌握', value: mastered },
    { name: '半掌握', value: halfMastered },
    { name: '未掌握', value: notMastered },
  ].filter(d => d.value > 0)

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🎯 考点覆盖检测</h1>
          <p className="text-slate-400 mb-6">上传考试大纲或教材目录，AI智能提取考点并评估掌握程度</p>

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

                  <UploadZone
                    onUpload={handleUpload}
                    text="上传考试大纲或教材目录截图"
                    subtext="JPG / PNG 格式"
                    loading={loading}
                  />

                  <div className="text-center text-slate-500 text-sm">或 直接粘贴文字</div>

                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="粘贴考试大纲、教材目录或知识点清单..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[120px] placeholder:text-slate-500"
                  />

                  <Button onClick={checkPoints} variant="primary" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        AI正在分析考点...
                      </span>
                    ) : (
                      '🚀 开始分析考点'
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {showCoverage && (
              <Card>
                <h3 className="text-lg font-bold text-emerald-400 mb-4">📊 考点覆盖评估</h3>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm text-slate-400">请根据自身情况填写各掌握程度的考点数量</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0" />
                        <label className="text-sm text-slate-300 flex-1">已掌握</label>
                        <input
                          type="number"
                          value={mastered || ''}
                          onChange={(e) => setMastered(Math.max(0, Number(e.target.value) || 0))}
                          placeholder="0"
                          min="0"
                          className="w-20 px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm text-center"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0" />
                        <label className="text-sm text-slate-300 flex-1">半掌握（有印象但不熟练）</label>
                        <input
                          type="number"
                          value={halfMastered || ''}
                          onChange={(e) => setHalfMastered(Math.max(0, Number(e.target.value) || 0))}
                          placeholder="0"
                          min="0"
                          className="w-20 px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm text-center"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0" />
                        <label className="text-sm text-slate-300 flex-1">未掌握</label>
                        <input
                          type="number"
                          value={notMastered || ''}
                          onChange={(e) => setNotMastered(Math.max(0, Number(e.target.value) || 0))}
                          placeholder="0"
                          min="0"
                          className="w-20 px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm text-center"
                        />
                      </div>
                    </div>
                  </div>

                  {totalPoints > 0 && (
                    <>
                      <div className="text-center p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/30">
                        <div className="text-3xl font-bold text-white">{coveragePercent}%</div>
                        <div className="text-sm text-slate-400">考点覆盖率</div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                          <div className="text-xl font-bold text-emerald-400">{mastered}</div>
                          <div className="text-xs text-slate-400">已掌握</div>
                        </div>
                        <div className="text-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                          <div className="text-xl font-bold text-amber-400">{halfMastered}</div>
                          <div className="text-xs text-slate-400">半掌握</div>
                        </div>
                        <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                          <div className="text-xl font-bold text-red-400">{notMastered}</div>
                          <div className="text-xs text-slate-400">未掌握</div>
                        </div>
                      </div>

                      <div className="h-52">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={80}
                              paddingAngle={3}
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COVERAGE_COLORS[index % COVERAGE_COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#1e293b',
                                border: '1px solid #374151',
                                borderRadius: '8px',
                              }}
                            />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            )}
          </div>

          {(result || loading) && (
            <Card ref={resultRef} className="mt-6" onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-400">📊 考点分析结果</h3>
                {result && (
                  <ExportButton
                    content={`# ${subject}考点覆盖检测\n\n年级：${customGrade || grade}\n考点总数：${totalPoints}\n已掌握：${mastered}\n半掌握：${halfMastered}\n未掌握：${notMastered}\n覆盖率：${coveragePercent}%\n\n${result}`}
                    filename={`${subject}考点覆盖检测.md`}
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
