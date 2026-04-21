'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, ExportButton, LoadingIndicator } from '@/components/common'

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

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  understanding?: number
}

export default function FeimanPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [phase, setPhase] = useState(0)
  const [introContent, setIntroContent] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [round, setRound] = useState(0)
  const [understandingHistory, setUnderstandingHistory] = useState<number[]>([])
  const chatEndRef = useRef<HTMLDivElement>(null)

  const currentGradeGroup = gradeGroups.find(g => g.grades.includes(grade))
  const availableSubjects = customGrade
    ? ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
    : (currentGradeGroup?.subjects || ['数学', '语文', '英语'])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, introContent])

  const startLearning = async () => {
    const finalGrade = customGrade || grade
    if (!finalGrade) { alert('请选择年级'); return }
    if (!subject) { alert('请选择学科'); return }
    if (!topic.trim()) { alert('请填写知识点'); return }

    setLoading(true)
    setPhase(1)
    setIntroContent('')
    setMessages([])
    setRound(0)
    setUnderstandingHistory([])

    try {
      const response = await fetch('/api/feiman', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade: finalGrade, subject, topic }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.content || `请求失败 (${response.status})`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''
      let hasContent = false

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
            if (json.error) {
              throw new Error(json.error)
            }
            if (json.content) {
              hasContent = true
              setIntroContent((prev) => prev + json.content)
            }
          } catch (parseErr) {
            if (parseErr instanceof Error && parseErr.message !== 'skip') {
              throw parseErr
            }
          }
        }
      }

      if (!hasContent) {
        throw new Error('AI 未返回内容，请重试')
      }
    } catch (error) {
      console.error(error)
      setPhase(0)
      alert(error instanceof Error ? error.message : '生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const sendExplanation = async () => {
    if (!input.trim()) return

    const userMsg: ChatMessage = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setPhase(3)

    const newRound = round + 1
    setRound(newRound)

    try {
      const finalGrade = customGrade || grade
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          systemPrompt: `你是费曼学习法教练，学生是${finalGrade}学生，正在学习${subject}的"${topic}"知识点。

你的职责：
1. 认真倾听学生用自己的话讲解
2. 指出讲解中不准确或模糊的地方
3. 用苏格拉底式提问引导学生深入理解
4. 如果讲解正确，给予肯定并追问更深层次的理解
5. 在回复最后，用一行评估理解程度：[理解度:X/5]（X为1-5的整数，5为完全理解）

保持耐心和鼓励，帮助学生真正理解知识。`,
        }),
      })

      if (!response.ok) throw new Error('请求失败')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''
      let assistantContent = ''

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
              assistantContent += json.content
              setMessages([...newMessages, { role: 'assistant', content: assistantContent }])
            }
          } catch { /* skip */ }
        }
      }

      const understandingMatch = assistantContent.match(/\[理解度:(\d)\/5\]/)
      if (understandingMatch) {
        const score = parseInt(understandingMatch[1])
        setUnderstandingHistory(prev => [...prev, score])
        setMessages(prev => prev.map((m, i) =>
          i === prev.length - 1 ? { ...m, understanding: score, content: m.content.replace(/\[理解度:\d\/5\]/, '') } : m
        ))
      }
    } catch (error) {
      console.error(error)
      setMessages([...newMessages, { role: 'assistant', content: '抱歉，回复失败，请重试。' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendExplanation()
    }
  }

  const reset = () => {
    setPhase(0)
    setIntroContent('')
    setMessages([])
    setInput('')
    setRound(0)
    setUnderstandingHistory([])
  }

  const finalGrade = customGrade || grade
  const avgUnderstanding = understandingHistory.length > 0
    ? (understandingHistory.reduce((a, b) => a + b, 0) / understandingHistory.length).toFixed(1)
    : '0'

  const exportContent = `# 费曼学习笔记

## 基本信息
- 年级：${finalGrade}
- 学科：${subject}
- 知识点：${topic}
- 讲解轮次：${round}
- 平均理解度：${avgUnderstanding}/5

## 知识点介绍
${introContent}

## 讲解过程
${messages.map((m, i) => `${m.role === 'user' ? '**我的讲解**' : '**AI反馈**'}：\n${m.content}`).join('\n\n')}

## 理解度变化
${understandingHistory.map((s, i) => `第${i + 1}轮：${'⭐'.repeat(s)}${'☆'.repeat(5 - s)}（${s}/5）`).join('\n')}
`

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🧠 费曼学习</h1>
          <p className="text-slate-400 mb-6">以教代学，用自己的话讲解知识点</p>

          {phase === 0 ? (
            <Card>
              <div className="mb-4 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/30">
                <h3 className="font-bold text-indigo-400 mb-2">💡 费曼学习法四步法</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                  <div>1️⃣ 选择知识点</div>
                  <div>2️⃣ AI介绍概念</div>
                  <div>3️⃣ 你用自己的话讲解</div>
                  <div>4️⃣ AI诊断+追问</div>
                </div>
              </div>
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
                    <label className="block text-sm text-slate-400 mb-1">要讲解的知识点</label>
                    <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="如：勾股定理、光合作用、定语从句" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                  </div>
                </div>

                <Button onClick={startLearning} variant="primary" className="w-full" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      AI正在准备...
                    </span>
                  ) : '🚀 开始学习'}
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-6">
                {introContent && (
                  <Card>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-indigo-400">📖 知识点介绍</h3>
                        <p className="text-sm text-slate-500">{finalGrade} · {subject} · {topic}</p>
                      </div>
                      <div className="flex gap-2">
                        <ExportButton content={exportContent} filename={`费曼学习-${topic}`} label="导出" disabled={loading || !introContent} />
                        <Button onClick={reset} variant="ghost" size="sm">重新选择</Button>
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      {loading && !introContent && <LoadingIndicator text="AI正在准备知识点介绍..." />}
                      <MarkdownRenderer content={introContent} />
                      {loading && introContent && (
                        <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse ml-1" />
                      )}
                    </div>
                    {phase === 1 && !loading && (
                      <div className="mt-4 p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                        <p className="text-amber-400 font-medium mb-1">🎯 现在轮到你了！</p>
                        <p className="text-sm text-slate-300">请用自己的话讲解&ldquo;{topic}&rdquo;这个知识点，就像在教一个完全不懂的同学一样。</p>
                        <Button onClick={() => setPhase(2)} variant="primary" className="mt-3">开始讲解 →</Button>
                      </div>
                    )}
                  </Card>
                )}

                {phase >= 2 && (
                  <Card>
                    <h3 className="text-lg font-bold text-emerald-400 mb-4">💬 讲解与反馈（第{round + 1}轮）</h3>

                    <div className="space-y-3 mb-4 max-h-[400px] overflow-y-auto">
                      {messages.length === 0 && phase === 2 && (
                        <div className="text-center py-6 text-slate-500 text-sm">
                          在下方输入框中，用自己的话讲解这个知识点...
                        </div>
                      )}
                      {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-slate-700/50 text-slate-300'}`}>
                            {msg.role === 'assistant' ? (
                              <div>
                                <div className="prose prose-invert max-w-none text-sm">
                                  <MarkdownRenderer content={msg.content} />
                                </div>
                                {msg.understanding !== undefined && (
                                  <div className="mt-2 pt-2 border-t border-slate-600 flex items-center gap-2">
                                    <span className="text-xs text-slate-400">理解度：</span>
                                    <span className="text-sm">
                                      {Array.from({ length: 5 }).map((_, si) => (
                                        <span key={si} className={si < msg.understanding! ? 'text-amber-400' : 'text-slate-600'}>⭐</span>
                                      ))}
                                    </span>
                                    <span className="text-xs text-slate-400">({msg.understanding}/5)</span>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                      {loading && messages[messages.length - 1]?.role !== 'assistant' && (
                        <div className="flex justify-start">
                          <div className="bg-slate-700/50 rounded-2xl px-4 py-3">
                            <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse" />
                          </div>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>

                    <div className="flex gap-2">
                      <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={phase === 2 && messages.length === 0 ? '用自己的话讲解这个知识点...' : '继续讲解或回答AI的问题...'}
                        className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 resize-none min-h-[44px] max-h-[100px]"
                        rows={1}
                      />
                      <Button onClick={sendExplanation} variant="primary" disabled={loading || !input.trim()}>
                        发送
                      </Button>
                    </div>
                  </Card>
                )}
              </div>

              <div className="lg:col-span-1 space-y-4">
                {understandingHistory.length > 0 && (
                  <Card hover={false}>
                    <h4 className="text-sm font-bold text-slate-300 mb-3">📊 理解度变化</h4>
                    <div className="space-y-2">
                      {understandingHistory.map((score, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 w-12">第{i + 1}轮</span>
                          <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${score >= 4 ? 'bg-emerald-500' : score >= 3 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${(score / 5) * 100}%` }} />
                          </div>
                          <span className="text-xs text-slate-400">{score}/5</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-700 text-center">
                      <div className="text-lg font-bold text-indigo-400">{avgUnderstanding}</div>
                      <div className="text-xs text-slate-400">平均理解度</div>
                    </div>
                  </Card>
                )}

                <Card hover={false}>
                  <h4 className="text-sm font-bold text-slate-300 mb-3">💡 费曼学习提示</h4>
                  <div className="space-y-2 text-xs text-slate-400">
                    <p>• 用最简单的语言讲解</p>
                    <p>• 假设听众完全不懂</p>
                    <p>• 遇到卡壳说明没真懂</p>
                    <p>• 回头查资料再重新讲</p>
                    <p>• 能讲清楚才算真掌握</p>
                  </div>
                </Card>

                <Card hover={false}>
                  <h4 className="text-sm font-bold text-slate-300 mb-3">📝 学习进度</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className={phase >= 1 ? 'text-emerald-400' : 'text-slate-500'}>{phase >= 1 ? '✅' : '⬜'}</span>
                      <span className="text-slate-300">AI介绍概念</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={phase >= 2 ? 'text-emerald-400' : 'text-slate-500'}>{phase >= 2 ? '✅' : '⬜'}</span>
                      <span className="text-slate-300">你开始讲解</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={phase >= 3 ? 'text-emerald-400' : 'text-slate-500'}>{phase >= 3 ? '✅' : '⬜'}</span>
                      <span className="text-slate-300">AI诊断反馈</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={understandingHistory.some(s => s >= 4) ? 'text-emerald-400' : 'text-slate-500'}>{understandingHistory.some(s => s >= 4) ? '✅' : '⬜'}</span>
                      <span className="text-slate-300">理解达标</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
