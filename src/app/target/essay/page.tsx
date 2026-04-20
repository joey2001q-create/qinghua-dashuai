'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, ExportButton } from '@/components/common'

const gradeGroups = [
  {
    label: '小学',
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
    essayTypes: ['看图写话', '记叙文', '写人记事', '写景状物', '想象作文', '读后感']
  },
  {
    label: '初中',
    grades: ['初一', '初二', '初三'],
    essayTypes: ['记叙文', '议论文', '说明文', '话题作文', '材料作文', '读后感']
  },
  {
    label: '高中',
    grades: ['高一', '高二', '高三'],
    essayTypes: ['议论文', '记叙文', '材料作文', '话题作文', '任务驱动型', '演讲稿']
  }
]

const scoreDimensions = [
  { key: 'content', label: '内容', color: 'bg-indigo-500', textColor: 'text-indigo-400' },
  { key: 'structure', label: '结构', color: 'bg-emerald-500', textColor: 'text-emerald-400' },
  { key: 'language', label: '语言', color: 'bg-amber-500', textColor: 'text-amber-400' },
  { key: 'writing', label: '书写', color: 'bg-pink-500', textColor: 'text-pink-400' },
]

export default function EssayPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [essayType, setEssayType] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [scores, setScores] = useState<Record<string, number>>({})
  const [totalScore, setTotalScore] = useState(0)
  const resultRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  const currentGradeGroup = gradeGroups.find(g => g.grades.includes(grade))
  const availableEssayTypes = customGrade
    ? ['记叙文', '议论文', '说明文', '话题作文', '读后感']
    : (currentGradeGroup?.essayTypes || ['记叙文', '议论文', '说明文'])

  useEffect(() => {
    if (result && resultRef.current && !isUserScrolling.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  const charCount = content.replace(/\s/g, '').length
  const paragraphCount = content.split(/\n\s*\n/).filter(p => p.trim()).length

  const analyze = async () => {
    const finalGrade = customGrade || grade
    if (!finalGrade) { alert('请选择年级'); return }
    if (!essayType) { alert('请选择作文类型'); return }
    if (!content.trim()) { alert('请输入作文内容'); return }
    if (charCount < 50) { alert('作文内容太短，请至少输入50字'); return }

    setLoading(true)
    setResult('')
    setScores({})
    setTotalScore(0)

    try {
      const response = await fetch('/api/essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade: finalGrade, essayType, title, content }),
      })

      if (!response.ok) throw new Error('请求失败')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''
      let fullContent = ''

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
              fullContent += json.content
              setResult(fullContent)
            }
          } catch { /* skip */ }
        }
      }

      const contentScoreMatch = fullContent.match(/内容[：:]\s*(\d+)/)
      const structureScoreMatch = fullContent.match(/结构[：:]\s*(\d+)/)
      const languageScoreMatch = fullContent.match(/语言[：:]\s*(\d+)/)
      const writingScoreMatch = fullContent.match(/书写[：:]\s*(\d+)/)
      const totalScoreMatch = fullContent.match(/总分[：:]\s*(\d+)/)

      const newScores: Record<string, number> = {}
      if (contentScoreMatch) newScores.content = parseInt(contentScoreMatch[1])
      if (structureScoreMatch) newScores.structure = parseInt(structureScoreMatch[1])
      if (languageScoreMatch) newScores.language = parseInt(languageScoreMatch[1])
      if (writingScoreMatch) newScores.writing = parseInt(writingScoreMatch[1])
      setScores(newScores)
      if (totalScoreMatch) setTotalScore(parseInt(totalScoreMatch[1]))
    } catch (error) {
      console.error(error)
      alert('批改失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const finalGrade = customGrade || grade

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">✍️ 作文提升</h1>
          <p className="text-slate-400 mb-6">AI批改作文，多维度评分，提升写作能力</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Card>
                <h3 className="text-lg font-bold text-indigo-400 mb-4">📝 填写作文信息</h3>
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
                      <input type="text" value={customGrade} onChange={(e) => { setCustomGrade(e.target.value); setGrade('') }} placeholder="如：大学" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">作文类型</label>
                      <select value={essayType} onChange={(e) => setEssayType(e.target.value)} className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white">
                        <option value="">请选择</option>
                        {availableEssayTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">作文题目（可选）</label>
                      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="如：难忘的一件事" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-sm text-slate-400">作文内容</label>
                      <div className="flex gap-3 text-xs text-slate-500">
                        <span>{charCount}字</span>
                        <span>{paragraphCount}段</span>
                      </div>
                    </div>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="粘贴或输入你的作文..."
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[200px] placeholder:text-slate-500"
                    />
                  </div>

                  <Button onClick={analyze} variant="primary" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        AI正在批改...
                      </span>
                    ) : '🔍 开始批改'}
                  </Button>
                </div>
              </Card>
            </div>

            {Object.keys(scores).length > 0 && (
              <Card>
                <h3 className="text-lg font-bold text-emerald-400 mb-4">📊 评分维度</h3>
                <div className="space-y-6">
                  {totalScore > 0 && (
                    <div className="text-center p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/30">
                      <div className="text-4xl font-bold text-white">{totalScore}</div>
                      <div className="text-sm text-slate-400">总分</div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {scoreDimensions.map((dim) => {
                      const score = scores[dim.key]
                      if (!score) return null
                      const maxScore = 25
                      return (
                        <div key={dim.key}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className={dim.textColor}>{dim.label}</span>
                            <span className="text-slate-400">{score}/{maxScore}</span>
                          </div>
                          <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full ${dim.color} rounded-full transition-all duration-500`} style={{ width: `${(score / maxScore) * 100}%` }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Card>
            )}
          </div>

          {(result || loading) && (
            <Card ref={resultRef} className="mt-6" onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-400">📊 批改结果</h3>
                {result && (
                  <ExportButton
                    content={`# 作文批改报告\n\n年级：${finalGrade}\n类型：${essayType}${title ? `\n题目：${title}` : ''}\n字数：${charCount}字\n${totalScore > 0 ? `总分：${totalScore}/100` : ''}\n\n${result}`}
                    filename={`作文批改-${essayType}.md`}
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
