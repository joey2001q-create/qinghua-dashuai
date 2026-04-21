'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer } from '@/components/common'
import { ROLE_PROMPTS } from '@/lib/prompts'

const gradeGroups = [
  {
    label: '小学',
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
  },
  {
    label: '初中',
    grades: ['初一', '初二', '初三']
  },
  {
    label: '高中',
    grades: ['高一', '高二', '高三']
  }
]

const quickQuestions = [
  '这道题怎么做？',
  '这个知识点我不懂',
  '怎么提高解题速度？',
  '考试前怎么复习？',
  '总是粗心怎么办？',
  '学习效率低怎么办？',
]

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function BuddyPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [selectedRole, setSelectedRole] = useState(ROLE_PROMPTS[0])
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  useEffect(() => {
    if (!isUserScrolling.current && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation()
    isUserScrolling.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation()
    isUserScrolling.current = true
  }

  const getSystemPrompt = () => {
    const finalGrade = customGrade || grade
    return `${selectedRole.prompt}\n\n学生年级：${finalGrade || '未指定'}\n\n请用简洁清晰的方式回答，适合${finalGrade || '中学'}学生的认知水平。如果涉及解题，请给出详细的解题步骤。`
  }

  const sendMessage = async (text?: string) => {
    const content = text || input.trim()
    if (!content) return

    const userMessage: Message = { role: 'user', content }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          systemPrompt: getSystemPrompt(),
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
          } catch {
            // skip invalid JSON
          }
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

  const clearChat = () => {
    setMessages([])
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🤖 学习搭子</h1>
          <p className="text-slate-400 mb-6">AI智能学习助手，随时提问，即时解答</p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <Card hover={false}>
                <h4 className="text-sm font-bold text-slate-300 mb-3">年级</h4>
                <div className="space-y-2">
                  {gradeGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs text-slate-500 mb-1">{group.label}</p>
                      <div className="grid grid-cols-3 gap-1">
                        {group.grades.map((g) => (
                          <button key={g} onClick={() => { setGrade(g); setCustomGrade('') }} className={`px-2 py-1 rounded text-xs transition ${grade === g ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}>{g}</button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <input type="text" value={customGrade} onChange={(e) => { setCustomGrade(e.target.value); setGrade('') }} placeholder="自定义" className="w-full px-3 py-1.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder:text-slate-500" />
                </div>
              </Card>

              <Card hover={false}>
                <h4 className="text-sm font-bold text-slate-300 mb-3">选择角色</h4>
                <div className="space-y-1">
                  {ROLE_PROMPTS.map((role) => (
                    <button key={role.id} onClick={() => { setSelectedRole(role); clearChat() }} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${selectedRole.id === role.id ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-400 hover:bg-slate-700'}`}>
                      <span>{role.icon}</span>
                      <span>{role.name}</span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card hover={false}>
                <h4 className="text-sm font-bold text-slate-300 mb-3">快捷提问</h4>
                <div className="space-y-1">
                  {quickQuestions.map((q, i) => (
                    <button key={i} onClick={() => sendMessage(q)} className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:bg-slate-700 hover:text-slate-300 transition" disabled={loading}>
                      {q}
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card hover={false} className="flex flex-col" style={{ height: 'calc(100vh - 180px)', minHeight: '500px' }}>
                <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{selectedRole.icon}</span>
                    <span className="font-bold text-white">{selectedRole.name}</span>
                    {(grade || customGrade) && (
                      <span className="text-xs text-slate-500 ml-2">{customGrade || grade}</span>
                    )}
                  </div>
                  {messages.length > 0 && (
                    <Button onClick={clearChat} variant="ghost" size="sm">清空对话</Button>
                  )}
                </div>

                <div id="chat-container" className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2" style={{ maxHeight: 'calc(100vh - 340px)' }} onWheel={handleWheel} onTouchMove={handleTouchMove}>
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="text-5xl mb-4">{selectedRole.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2">你好！我是{selectedRole.name}</h3>
                      <p className="text-sm text-slate-400 max-w-md">有什么学习问题都可以问我，我会尽力帮助你理解和掌握知识。</p>
                    </div>
                  )}

                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-slate-700/50 text-slate-300'}`}>
                        {msg.role === 'assistant' ? (
                          <div className="prose prose-invert max-w-none">
                            <MarkdownRenderer content={msg.content} />
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  {loading && messages[messages.length - 1]?.role !== 'assistant' && (
                    <div className="flex justify-start">
                      <div className="bg-slate-700/50 rounded-2xl px-4 py-3">
                        <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse" />
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                <div className="flex gap-2 border-t border-slate-700 pt-3">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="输入你的问题..."
                    className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 resize-none min-h-[44px] max-h-[120px]"
                    rows={1}
                  />
                  <Button onClick={() => sendMessage()} variant="primary" disabled={loading || !input.trim()}>
                    发送
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
