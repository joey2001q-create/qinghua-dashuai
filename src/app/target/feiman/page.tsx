'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, ChatBox } from '@/components/common'
import { grades, subjects } from '@/lib/utils'
import { Message } from '@/types'
import { generateId } from '@/lib/utils'

export default function FeimanPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const startLearning = async () => {
    if (!grade || !subject || !topic) {
      alert('请填写完整信息')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/feiman', {
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
          systemPrompt: `你是费曼学习法教练。学生正在尝试用自己的话讲解"${topic}"知识点。
请：
1. 认真倾听学生的讲解
2. 指出讲解中的不准确或模糊之处
3. 引导学生用更简单的方式重新解释
4. 如果讲解正确，给予肯定并深入追问

保持耐心，用苏格拉底式提问引导学生深入理解。`
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
          
          <h1 className="text-2xl font-bold text-white mb-2">🧠 费曼学习</h1>
          <p className="text-slate-400 mb-6">以教代学，用自己的话讲解知识点</p>

          {!started ? (
            <Card>
              <div className="mb-4 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/30">
                <h3 className="font-bold text-indigo-400 mb-2">💡 费曼学习法</h3>
                <p className="text-sm text-slate-300">
                  选择一个知识点，尝试用自己的话讲解给AI听。AI会指出你的理解偏差，帮助你真正掌握知识。
                </p>
              </div>
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
                <label className="block text-sm text-slate-400 mb-1">📝 要讲解的知识点</label>
                <input 
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="如：勾股定理、光合作用、过去完成时"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                />
              </div>
              <Button onClick={startLearning} variant="primary" className="w-full" disabled={loading}>
                {loading ? '生成中...' : '🚀 开始讲解'}
              </Button>
            </Card>
          ) : (
            <>
              <ChatBox 
                title={`费曼学习 - ${topic}`}
                messages={messages}
                onSend={handleSend}
                loading={loading}
                placeholder="用自己的话讲解这个知识点..."
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
