'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, ExportButton, LoadingIndicator } from '@/components/common'

const subjects = ['数学', '物理', '化学', '生物', '语文', '英语', '历史', '地理', '政治', '计算机', '经济学', '哲学']
const levels = [
  { value: '初学者', icon: '🌱', desc: '完全不了解' },
  { value: '有基础', icon: '📗', desc: '学过但不扎实' },
  { value: '进阶者', icon: '🎯', desc: '想深入理解' },
]

export default function FeimanPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [subject, setSubject] = useState('')
  const [level, setLevel] = useState('初学者')
  const [topic, setTopic] = useState('')
  const [aiContent, setAiContent] = useState('')
  const [userExplanation, setUserExplanation] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [loading, setLoading] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const resultRef = useRef<HTMLDivElement>(null)
  const hasScrolledRef = useRef(false)

  useEffect(() => {
    if (aiContent && resultRef.current && !hasScrolledRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      hasScrolledRef.current = true
    }
  }, [aiContent, diagnosis])

  const goStep = (targetStep: number) => {
    if (targetStep <= step) setStep(targetStep)
  }

  const startLearning = async () => {
    if (!topic.trim()) {
      alert('请输入要学习的知识点')
      return
    }

    setLoading(true)
    setStep(2)
    setAiContent('')
    hasScrolledRef.current = false

    try {
      const response = await fetch('/api/feiman', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade: level, subject: subject || '通用', topic }),
      })

      if (!response.ok) throw new Error('请求失败')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''
      let content = ''

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
              content += json.content
              setAiContent(content)
            }
          } catch { /* skip */ }
        }
      }
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
      setStep(1)
    } finally {
      setLoading(false)
    }
  }

  const submitExplanation = async () => {
    if (!userExplanation.trim()) {
      alert('请输入你的讲解')
      return
    }

    setLoading(true)
    setStep(4)
    setDiagnosis('')
    hasScrolledRef.current = false

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: `我学习的知识点是：${topic}\n\nAI的讲解内容：\n${aiContent}\n\n我的讲解：\n${userExplanation}` }
          ],
          systemPrompt: `你是一位费曼学习法教练。学生刚刚学习了"${topic}"这个知识点，并用自己的话进行了讲解。

请对学生的讲解进行诊断：

1. **理解程度评估**：评估学生对核心概念的掌握程度（1-5分）
2. **优点指出**：学生讲解中正确理解的部分
3. **问题指出**：学生讲解中不准确、遗漏或模糊的地方
4. **改进建议**：如何更好地理解这个知识点
5. **追问引导**：提出1-2个深入问题，帮助学生进一步思考

用Markdown格式输出，结构清晰。`,
        }),
      })

      if (!response.ok) throw new Error('请求失败')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''
      let content = ''

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
              content += json.content
              setDiagnosis(content)
            }
          } catch { /* skip */ }
        }
      }
    } catch (error) {
      console.error(error)
      alert('诊断失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setStep(1)
    setSubject('')
    setLevel('初学者')
    setTopic('')
    setAiContent('')
    setUserExplanation('')
    setDiagnosis('')
    setCharCount(0)
  }

  const exportContent = `# 费曼学习笔记

## 知识点：${topic}
- 学科：${subject || '未指定'}
- 认知水平：${level}

## AI拆解
${aiContent}

## 我的讲解
${userExplanation}

## AI诊断
${diagnosis}`

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🧠 费曼学习法</h1>
          <p className="text-slate-400 mb-6">用费曼方法深度学习，4步掌握任何概念</p>

          {/* 步骤导航 */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => goStep(s)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                  step === s
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : step > s
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  {step > s ? '✓' : s}
                </span>
                {s === 1 && '输入概念'}
                {s === 2 && 'AI拆解'}
                {s === 3 && '复述挑战'}
                {s === 4 && 'AI诊断'}
              </button>
            ))}
          </div>

          {/* 第1步：输入概念 */}
          {step === 1 && (
            <Card>
              <p className="text-sm text-slate-400 mb-4">📝 输入想要学习的知识点，AI将带你4步深入理解</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">📚 学科（可选）</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    <option value="">请选择学科</option>
                    {subjects.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">🎯 你对这个概念的认知水平</label>
                  <div className="grid grid-cols-3 gap-3">
                    {levels.map((l) => (
                      <button
                        key={l.value}
                        onClick={() => setLevel(l.value)}
                        className={`p-4 rounded-xl border-2 transition text-center ${
                          level === l.value
                            ? 'border-indigo-500 bg-indigo-500/10'
                            : 'border-slate-600 hover:border-slate-500'
                        }`}
                      >
                        <div className="text-2xl mb-1">{l.icon}</div>
                        <div className="text-sm font-medium text-white">{l.value}</div>
                        <div className="text-xs text-slate-500">{l.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">💡 要学习的概念/知识点</label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="如：光合作用、勾股定理、牛顿第三定律..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-base placeholder:text-slate-500"
                  />
                </div>

                <Button onClick={startLearning} variant="primary" className="w-full py-3" disabled={loading || !topic.trim()}>
                  ✨ 开始拆解知识
                </Button>
              </div>
            </Card>
          )}

          {/* 第2步：AI拆解 */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white">
                <p className="text-sm opacity-80">🧠 第2步 · AI知识拆解</p>
                <p className="text-lg font-bold mt-1">{topic}</p>
              </div>

              <Card ref={resultRef}>
                <div className="prose prose-invert max-w-none">
                  {loading && !aiContent && <LoadingIndicator text="AI正在拆解知识点..." />}
                  <MarkdownRenderer content={aiContent} />
                  {loading && aiContent && (
                    <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse ml-1" />
                  )}
                </div>
              </Card>

              {aiContent && !loading && (
                <Card className="bg-amber-500/10 border-amber-500/30">
                  <p className="text-amber-400 font-medium mb-2">💬 现在，请用你自己的话来解释这个概念</p>
                  <p className="text-sm text-slate-300">想象你正在教一个完全不懂的朋友——尽量说得清楚、完整。不需要用专业术语，用大白话就好！</p>
                  <Button onClick={() => setStep(3)} variant="primary" className="mt-3">
                    开始讲解 →
                  </Button>
                </Card>
              )}
            </div>
          )}

          {/* 第3步：复述挑战 */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white">
                <p className="text-sm opacity-80">🧠 第3步 · 复述挑战</p>
                <p className="text-lg font-bold mt-1">{topic}</p>
              </div>

              <Card>
                <p className="text-sm text-slate-400 mb-3">📖 AI拆解内容（可参考）</p>
                <div className="prose prose-invert max-w-none max-h-[200px] overflow-y-auto text-sm">
                  <MarkdownRenderer content={aiContent} />
                </div>
              </Card>

              <Card>
                <label className="block text-sm text-slate-400 mb-2">✍️ 用你自己的话解释这个概念</label>
                <textarea
                  value={userExplanation}
                  onChange={(e) => { setUserExplanation(e.target.value); setCharCount(e.target.value.length) }}
                  placeholder="用你自己的话解释这个概念..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[150px] placeholder:text-slate-500"
                />
                <p className="text-xs text-slate-500 text-right mt-1">{charCount} 字</p>

                <div className="flex gap-3 mt-4">
                  <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                    ← 重新阅读
                  </Button>
                  <Button onClick={submitExplanation} variant="primary" className="flex-1" disabled={loading || !userExplanation.trim()}>
                    🎯 提交让AI诊断
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* 第4步：AI诊断 */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
                <p className="text-sm opacity-80">🔬 第4步 · AI诊断结果</p>
                <p className="text-lg font-bold mt-1">知识点掌握图谱</p>
              </div>

              <Card ref={resultRef}>
                <div className="prose prose-invert max-w-none">
                  {loading && !diagnosis && <LoadingIndicator text="AI正在诊断..." />}
                  <MarkdownRenderer content={diagnosis} />
                  {loading && diagnosis && (
                    <span className="inline-block w-2 h-5 bg-emerald-400 animate-pulse ml-1" />
                  )}
                </div>
              </Card>

              {diagnosis && !loading && (
                <div className="flex gap-3">
                  <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                    🔄 重新阅读AI拆解
                  </Button>
                  <div className="flex-1">
                    <ExportButton
                      content={exportContent}
                      filename={`费曼学习-${topic}`}
                      label="导出笔记"
                    />
                  </div>
                </div>
              )}

              {diagnosis && !loading && (
                <Button onClick={reset} variant="primary" className="w-full">
                  ✨ 学习新概念
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
