'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, ChatBox } from '@/components/common'
import { grades, subjects } from '@/lib/utils'
import { Message } from '@/types'
import { generateId } from '@/lib/utils'

export default function PreviewPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const startPreview = async () => {
    if (!grade || !subject || !topic) {
      alert('请填写完整信息')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade, subject, topic }),
      })
      const data = await response.json()
      setMessages([
        { id: generateId(), role: 'assistant', content: data.content, timestamp: new Date() }
      ])
      setStarted(true)
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
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
          systemPrompt: `你是一位${grade}${subject}老师，正在帮助学生预习"${topic}"知识点。请用简洁易懂的方式回答学生的问题。`
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
    setTopic('')
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>
          
          <h1 className="text-2xl font-bold text-white mb-2">📖 全科预习</h1>
          <p className="text-slate-400 mb-6">AI辅助预习，提前掌握知识点</p>

          {!started ? (
            <Card>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">📚 年级</label>
                  <select 
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    <option value="">请选择</option>
                    {grades.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">📐 学科</label>
                  <select 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    <option value="">请选择</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-slate-400 mb-1">📝 预习内容</label>
                <input 
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="如：二次函数、文言文翻译、定语从句"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                />
              </div>
              <Button onClick={startPreview} variant="primary" className="w-full" disabled={loading}>
                {loading ? '生成中...' : '🚀 开始预习'}
              </Button>
            </Card>
          ) : (
            <>
              <ChatBox 
                title={`${grade}${subject} - ${topic}`}
                messages={messages}
                onSend={handleSend}
                loading={loading}
                placeholder="输入你的问题..."
                wide
              />
              <Button onClick={reset} variant="ghost" className="mt-4">
                🔄 重新选择
              </Button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
