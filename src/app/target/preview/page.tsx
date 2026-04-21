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
}

export default function PreviewPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [goal, setGoal] = useState('')
  const [loading, setLoading] = useState(false)
  const [previewContent, setPreviewContent] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [masteryLevel, setMasteryLevel] = useState<'' | 'understood' | 'partial' | 'confused'>('')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  const currentGradeGroup = gradeGroups.find(g => g.grades.includes(grade))
  const availableSubjects = customGrade
    ? ['数学', '语文', '英语', '物理', '化学', '历史', '政治', '生物']
    : (currentGradeGroup?.subjects || ['数学', '语文', '英语'])

  useEffect(() => {
    if (previewContent && previewRef.current && !isUserScrolling.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [previewContent])

  const startPreview = async () => {
    const finalGrade = customGrade || grade
    if (!finalGrade) {
      alert('请选择年级')
      return
    }
    if (!subject) {
      alert('请选择学科')
      return
    }
    if (!topic.trim()) {
      alert('请填写预习内容')
      return
    }

    setLoading(true)
    setPreviewContent('')
    setShowPreview(true)
    setMasteryLevel('')
    setChatMessages([])

    try {
      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade: finalGrade, subject, topic, goal }),
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
              setPreviewContent((prev) => prev + json.content)
            }
          } catch {
            // skip invalid JSON
          }
        }
      }
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const sendChat = async () => {
    if (!chatInput.trim()) return

    const userMsg: ChatMessage = { role: 'user', content: chatInput.trim() }
    const newMessages = [...chatMessages, userMsg]
    setChatMessages(newMessages)
    setChatInput('')
    setChatLoading(true)

    try {
      const finalGrade = customGrade || grade
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          systemPrompt: `你是一位${finalGrade}${subject}老师，学生正在预习"${topic}"。请用简洁易懂的方式回答学生的问题，适合${finalGrade}学生的认知水平。`,
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
              setChatMessages([...newMessages, { role: 'assistant', content: assistantContent }])
            }
          } catch {
            // skip invalid JSON
          }
        }
      }
    } catch (error) {
      console.error(error)
      setChatMessages([...newMessages, { role: 'assistant', content: '抱歉，回复失败，请重试。' }])
    } finally {
      setChatLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendChat()
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

          <h1 className="text-2xl font-bold text-white mb-2">📖 全科预习</h1>
          <p className="text-slate-400 mb-6">AI生成预习导学案，提前掌握知识点</p>

          {!showPreview ? (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📝 填写预习信息</h3>
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
                    <label className="block text-sm text-slate-400 mb-1">预习内容</label>
                    <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="如：二次函数、文言文翻译、定语从句" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">预习目标（可选）</label>
                  <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="如：掌握基本概念、会做基础题" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500" />
                </div>

                <Button onClick={startPreview} variant="primary" className="w-full" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      AI正在生成预习导学案...
                    </span>
                  ) : '🚀 开始预习'}
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card ref={previewRef} onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-400">📖 预习导学案</h3>
                    <p className="text-sm text-slate-500">{finalGrade} · {subject} · {topic}</p>
                  </div>
                  <div className="flex gap-2">
                    <ExportButton content={`# ${subject}预习导学案\n\n年级：${finalGrade}\n知识点：${topic}${goal ? `\n目标：${goal}` : ''}\n\n${previewContent}`} filename={`${subject}预习-${topic}`} label="导出" disabled={loading || !previewContent} />
                    <Button onClick={() => { setShowPreview(false); setPreviewContent('') }} variant="ghost" size="sm">重新选择</Button>
                  </div>
                </div>
                <div className="prose prose-invert max-w-none">
                  {loading && !previewContent && <LoadingIndicator text="AI正在生成预习内容..." />}
                  <MarkdownRenderer content={previewContent} />
                  {loading && previewContent && (
                    <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse ml-1" />
                  )}
                </div>
              </Card>

              {previewContent && !loading && (
                <Card>
                  <h3 className="text-lg font-bold text-amber-400 mb-4">🎯 预习自评</h3>
                  <p className="text-sm text-slate-400 mb-3">学完了，你觉得掌握得怎么样？</p>
                  <div className="grid grid-cols-3 gap-3">
                    <button onClick={() => setMasteryLevel('understood')} className={`p-4 rounded-xl border-2 transition text-center ${masteryLevel === 'understood' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-600 hover:border-slate-500'}`}>
                      <div className="text-2xl mb-1">😊</div>
                      <div className="text-sm font-medium text-emerald-400">基本掌握</div>
                      <div className="text-xs text-slate-500">能理解核心概念</div>
                    </button>
                    <button onClick={() => setMasteryLevel('partial')} className={`p-4 rounded-xl border-2 transition text-center ${masteryLevel === 'partial' ? 'border-amber-500 bg-amber-500/10' : 'border-slate-600 hover:border-slate-500'}`}>
                      <div className="text-2xl mb-1">🤔</div>
                      <div className="text-sm font-medium text-amber-400">部分理解</div>
                      <div className="text-xs text-slate-500">有些地方还不懂</div>
                    </button>
                    <button onClick={() => setMasteryLevel('confused')} className={`p-4 rounded-xl border-2 transition text-center ${masteryLevel === 'confused' ? 'border-red-500 bg-red-500/10' : 'border-slate-600 hover:border-slate-500'}`}>
                      <div className="text-2xl mb-1">😵</div>
                      <div className="text-sm font-medium text-red-400">比较困惑</div>
                      <div className="text-xs text-slate-500">需要更多讲解</div>
                    </button>
                  </div>
                </Card>
              )}

              {previewContent && !loading && (
                <Card>
                  <h3 className="text-lg font-bold text-indigo-400 mb-4">💬 追问答疑</h3>
                  <p className="text-sm text-slate-400 mb-3">有不懂的地方？直接问老师！</p>

                  <div className="space-y-3 mb-4 max-h-[400px] overflow-y-auto">
                    {chatMessages.length === 0 && (
                      <div className="text-center py-6 text-slate-500 text-sm">
                        输入你的问题，AI老师会为你解答
                      </div>
                    )}
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-slate-700/50 text-slate-300'}`}>
                          {msg.role === 'assistant' ? (
                            <div className="prose prose-invert max-w-none text-sm">
                              <MarkdownRenderer content={msg.content} />
                            </div>
                          ) : (
                            <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                    {chatLoading && chatMessages[chatMessages.length - 1]?.role !== 'assistant' && (
                      <div className="flex justify-start">
                        <div className="bg-slate-700/50 rounded-2xl px-4 py-3">
                          <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <textarea
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="输入你的问题..."
                      className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 resize-none min-h-[44px] max-h-[100px]"
                      rows={1}
                    />
                    <Button onClick={sendChat} variant="primary" disabled={chatLoading || !chatInput.trim()}>
                      发送
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
