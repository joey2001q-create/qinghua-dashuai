'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer } from '@/components/common'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const quickQuestions = [
  '这道题怎么做？',
  '这个知识点我不懂',
  '帮我解释一下这个概念',
  '怎么提高学习效率？',
  '给我出几道练习题',
]

export default function BrainPage() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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
          systemPrompt: '你是大帅AI学习助手，专业、耐心、善于用例子讲解知识点。\n\n【角色定位】\n- 你是面向中小学生的AI学习助手，擅长语文、数学、英语、物理、化学、历史、生物等学科\n- 讲解通俗易懂，善用生活化比喻和具体例子\n- 鼓励学生思考，而非直接给答案\n\n【回复规范】\n1. 回答控制在300字以内，结构清晰\n2. 重要概念用【】标注，易错点用★标注\n3. 涉及公式或推导用→表示过程\n4. 不确定的知识点必须声明"我不确定"\n5. 禁止编造不存在的知识点、人物或事件\n6. 不回复与学习无关的内容',
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
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/')} className="mb-4">
            ← 返回首页
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🧠 大帅智脑</h1>
          <p className="text-slate-400 mb-6">AI智能问答，学科答疑解惑</p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <Card hover={false}>
                <h4 className="text-sm font-bold text-slate-300 mb-3">快捷提问</h4>
                <div className="space-y-1">
                  {quickQuestions.map((q, i) => (
                    <button key={i} onClick={() => sendMessage(q)} className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-400 hover:bg-slate-700 hover:text-slate-300 transition" disabled={loading}>
                      {q}
                    </button>
                  ))}
                </div>
              </Card>

              {messages.length > 0 && (
                <Button onClick={clearChat} variant="outline" size="sm" className="w-full">
                  清空对话
                </Button>
              )}
            </div>

            <div className="lg:col-span-3">
              <Card hover={false} className="flex flex-col" style={{ height: 'calc(100vh - 200px)', minHeight: '500px' }}>
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="text-6xl mb-4">🧠</div>
                      <h3 className="text-xl font-bold text-white mb-2">你好！我是大帅智脑</h3>
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
