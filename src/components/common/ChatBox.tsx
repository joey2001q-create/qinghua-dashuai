'use client'

import { useState, useRef, FormEvent } from 'react'
import { Message } from '@/types'

interface ChatBoxProps {
  title: string
  messages: Message[]
  onSend: (message: string) => void
  loading?: boolean
  placeholder?: string
  className?: string
  wide?: boolean
}

export default function ChatBox({ 
  title, 
  messages, 
  onSend, 
  loading = false,
  placeholder = '输入消息...',
  className = '',
  wide = false
}: ChatBoxProps) {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim() && !loading) {
      onSend(input.trim())
      setInput('')
    }
  }

  return (
    <div className={`bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden ${className}`}>
      <div className="px-4 py-3 bg-indigo-500/10 border-b border-slate-700 font-semibold text-indigo-400 flex items-center gap-2">
        💬 {title}
      </div>
      
      <div className={`overflow-y-auto p-4 flex flex-col gap-3 ${wide ? 'min-h-[350px] max-h-[60vh]' : 'max-h-[400px]'}`}>
        {messages.length === 0 && (
          <div className="text-center text-slate-500 py-8">
            开始对话吧...
          </div>
        )}
        
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse self-end' : 'self-start'}`}
          >
            <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-indigo-500 text-white rounded-br-sm' 
                : 'bg-slate-700 text-slate-200 rounded-bl-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="self-start px-4 py-2.5 bg-slate-700 rounded-2xl rounded-bl-sm text-slate-400 text-sm italic">
            正在思考...
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-slate-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          disabled={loading}
          className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-5 py-2 bg-indigo-500 text-white rounded-xl text-sm font-medium hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          发送
        </button>
      </form>
    </div>
  )
}
