'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer } from '@/components/common'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const grades = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三']
const editions = [
  { value: '人民教育出版社（人教版）', label: '人教版' },
  { value: '北京师范大学出版社（北师大版）', label: '北师大版' },
  { value: '江苏凤凰教育出版社（苏教版）', label: '苏教版' },
  { value: '语文出版社（语文版）', label: '语文版' },
  { value: '部编版（统编版）', label: '部编版' },
  { value: '其他版本', label: '其他' },
]
const semesters = [
  { value: '上册', label: '上册' },
  { value: '下册', label: '下册' },
]

const presetQuestions = [
  '语文：总结本册所有成语并解释意思和造句',
  '数学：本册重点题型带练30分钟',
  '英语：本册核心词汇和语法点训练',
]

export default function TutorPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('初一')
  const [edition, setEdition] = useState('人民教育出版社（人教版）')
  const [semester, setSemester] = useState('上册')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `👋 我是大帅老师！欢迎来到带练课堂。今天我们练什么？\n\n请告诉我：\n1️⃣ 科目\n2️⃣ 薄弱题型\n3️⃣ 目标分数\n\n我会根据你的情况，带你一步步攻克难题！`
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (messageText?: string) => {
    const text = messageText || input.trim()
    if (!text) return

    const userMsg: ChatMessage = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          systemPrompt: `你是大帅老师，一位经验丰富的1对1带练教练。学生是${grade}学生，使用${edition}${semester}教材。

你的职责：
1. 根据学生选择的年级和教材版本，严格按照对应教材内容出题和讲解
2. 了解学生的薄弱题型和目标分数
3. 循序渐进地带练，从基础到进阶
4. 每次只出一道题，等学生作答后再给出反馈和下一题
5. 讲解要清晰易懂，适合${grade}学生的认知水平
6. 多鼓励学生，建立学习信心

注意：必须严格按照${edition}${semester}教材内容，不要出超出教材范围的题目。`,
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
      sendMessage()
    }
  }

  const handlePreset = (preset: string) => {
    setInput(preset)
    sendMessage(preset)
  }

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: `👋 我是大帅老师！欢迎来到带练课堂。今天我们练什么？\n\n请告诉我：\n1️⃣ 科目\n2️⃣ 薄弱题型\n3️⃣ 目标分数\n\n我会根据你的情况，带你一步步攻克难题！`
      }
    ])
    setInput('')
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">👨‍🏫 大帅代练</h1>
          <p className="text-slate-400 mb-6">名师带练，攻克薄弱题型</p>

          <Card className="mb-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">📚 年级</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm"
                >
                  {grades.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">📖 教材版本</label>
                <select
                  value={edition}
                  onChange={(e) => setEdition(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm"
                >
                  {editions.map(e => (
                    <option key={e.value} value={e.value}>{e.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">📅 学期</label>
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm"
                >
                  {semesters.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">⚠️ 请先选择年级和教材版本，AI将严格按照对应教材内容出题和讲解</p>
          </Card>

          <Card className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">👨‍🏫</span>
                <h3 className="font-bold text-orange-400">大帅老师带练</h3>
                <span className="text-sm text-slate-500">· {grade} · {editions.find(e => e.value === edition)?.label} · {semester}</span>
              </div>
              <Button onClick={handleReset} variant="ghost" size="sm">
                🔄 重新开始
              </Button>
            </div>

            <div className="space-y-3 mb-4 max-h-[400px] overflow-y-auto">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-slate-700/50 text-slate-300'}`}>
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
              {loading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex justify-start">
                  <div className="bg-slate-700/50 rounded-2xl px-4 py-3">
                    <span className="inline-block w-2 h-4 bg-orange-400 animate-pulse" />
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
                placeholder="描述你的问题或想练习的内容..."
                className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 resize-none min-h-[44px] max-h-[100px]"
                rows={1}
              />
              <Button onClick={() => sendMessage()} variant="primary" className="bg-gradient-to-r from-orange-500 to-amber-500" disabled={loading || !input.trim()}>
                发送
              </Button>
            </div>
          </Card>

          <Card>
            <h4 className="font-bold text-slate-300 mb-3">🎯 快速开始带练</h4>
            <div className="space-y-2">
              {presetQuestions.map((preset, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  onClick={() => handlePreset(preset)}
                  className="w-full justify-start"
                  disabled={loading}
                >
                  {preset}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
