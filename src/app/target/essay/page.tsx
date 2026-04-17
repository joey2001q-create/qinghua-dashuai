'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'
import { grades } from '@/lib/utils'

export default function EssayPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [essayType, setEssayType] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const essayTypes = ['记叙文', '议论文', '说明文', '应用文', '读后感', '话题作文']

  const analyze = async () => {
    if (!grade || !essayType || !content) {
      alert('请填写完整信息')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade, essayType, title, content }),
      })
      const data = await response.json()
      setResult(data.content)
    } catch (error) {
      console.error(error)
      alert('批改失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>
          
          <h1 className="text-2xl font-bold text-white mb-2">✍️ 作文提升</h1>
          <p className="text-slate-400 mb-6">AI批改作文，提升写作能力</p>

          <Card className="mb-6">
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
                <label className="block text-sm text-slate-400 mb-1">📝 作文类型</label>
                <select 
                  value={essayType}
                  onChange={(e) => setEssayType(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  <option value="">请选择</option>
                  {essayTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-slate-400 mb-1">📌 作文题目（可选）</label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="如：难忘的一件事"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-slate-400 mb-1">📄 作文内容</label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="粘贴或输入你的作文..."
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[200px]"
              />
            </div>
            <Button onClick={analyze} variant="primary" className="w-full" disabled={loading}>
              {loading ? '批改中...' : '🔍 开始批改'}
            </Button>
          </Card>

          {result && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📊 批改结果</h3>
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">{result}</div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
