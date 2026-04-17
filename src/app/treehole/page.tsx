'use client'

import { useState } from 'react'
import { Header, Card, Button, ChatBox } from '@/components/common'
import { Message } from '@/types'
import { generateId } from '@/lib/utils'

export default function TreeholePage() {
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const startChat = () => {
    setMessages([
      { 
        id: generateId(), 
        role: 'assistant', 
        content: '你好呀！我是你的树洞朋友 🌳\n\n这里是一个安全的空间，你可以倾诉任何压力、烦恼或情绪。我会认真倾听，给你温暖的陪伴和建议。\n\n今天想聊些什么呢？', 
        timestamp: new Date() 
      }
    ])
    setStarted(true)
  }

  const handleSend = async (message: string) => {
    const userMsg: Message = { id: generateId(), role: 'user', content: message, timestamp: new Date() }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          systemPrompt: `你是一位温暖、善解人意的朋友，正在倾听学生的倾诉。

请：
1. 用温暖、理解的语气回应
2. 认可对方的情绪，不要否定或轻视
3. 给予适当的安慰和建议
4. 如果对方表达出严重心理问题，温和建议寻求专业帮助

保持耐心和同理心，像朋友一样交流。使用emoji让对话更温暖。`
        }),
      })
      const data = await response.json()
      setMessages(prev => [...prev, { id: generateId(), role: 'assistant', content: data.content, timestamp: new Date() }])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setStarted(false)
    setMessages([])
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => window.history.back()}
            className="mb-4 px-4 py-2 text-sm text-slate-400 hover:text-white transition"
          >
            ← 返回首页
          </button>
          
          <h1 className="text-2xl font-bold text-white mb-2">💬 你的树洞</h1>
          <p className="text-slate-400 mb-6">倾诉压力 · 释放情绪 · 心理陪伴</p>

          {!started ? (
            <Card className="text-center py-12">
              <div className="text-6xl mb-4">🌳</div>
              <h2 className="text-xl font-bold text-white mb-2">欢迎来到你的树洞</h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                这里是一个安全的空间，你可以倾诉学习压力、生活烦恼或任何情绪。
                我会认真倾听，给你温暖的陪伴。
              </p>
              <Button onClick={startChat} variant="teal" size="lg">
                开始倾诉 💬
              </Button>
            </Card>
          ) : (
            <>
              <ChatBox 
                title="树洞朋友"
                messages={messages}
                onSend={handleSend}
                loading={loading}
                placeholder="说说你的心事..."
                wide
              />
              <Button onClick={reset} variant="ghost" className="mt-4">
                🔄 重新开始
              </Button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
