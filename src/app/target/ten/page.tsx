'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, ExportButton, LoadingIndicator, UploadZone } from '@/components/common'

const subjects = ['数学', '物理', '化学', '英语', '语文']

export default function TenSolutionsPage() {
  const router = useRouter()
  const [subject, setSubject] = useState('数学')
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const resultRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  useEffect(() => {
    if (result && resultRef.current && !isUserScrolling.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  const handleUpload = async (files: File[]) => {
    if (!files.length) return
    const file = files[0]
    setUploading(true)
    setUploadProgress(0)
    
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          const result = reader.result as string
          resolve(result.split(',')[1])
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
      
      setUploadProgress(50)
      
      const response = await fetch('/api/ocr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64 }),
      })
      
      if (!response.ok) throw new Error('OCR识别失败')
      
      const data = await response.json()
      setUploadProgress(100)
      
      if (data.text) {
        setQuestion(prev => prev ? prev + '\n' + data.text : data.text)
      }
    } catch (error) {
      console.error(error)
      alert('图片识别失败，请重试')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const analyze = async () => {
    if (!question.trim()) {
      alert('请输入题目')
      return
    }

    setLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/ten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, question }),
      })

      if (!response.ok) throw new Error('请求失败')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''
      let fullContent = ''

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
              fullContent += json.content
              setResult(fullContent)
            }
          } catch { /* skip */ }
        }
      }
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🔟 一题十解</h1>
          <p className="text-slate-400 mb-6">上传一道题，AI给出10种解法</p>

          <Card className="mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">上传题目图片（可选）</label>
                <UploadZone 
                  onUpload={handleUpload}
                  accept="image/*"
                  loading={uploading}
                  progress={uploadProgress}
                  text="点击上传题目图片"
                  subtext="支持 JPG / PNG 格式"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">输入或粘贴题目</label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="上传图片后自动识别，或直接在此输入题目..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[120px] placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">科目</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  {subjects.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <Button onClick={analyze} variant="primary" className="w-full" disabled={loading || !question.trim()}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    AI正在生成10种解法...
                  </span>
                ) : '💡 生成10种解法'}
              </Button>
            </div>
          </Card>

          {(result || loading) && (
            <Card ref={resultRef} onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-400">📊 十种解法</h3>
                <ExportButton
                  content={`# 一题十解\n\n科目：${subject}\n题目：${question}\n\n${result}`}
                  filename={`一题十解-${subject}`}
                  label="导出"
                  disabled={loading || !result}
                />
              </div>
              <div className="prose prose-invert max-w-none">
                {loading && !result && <LoadingIndicator text="AI正在生成10种解法..." />}
                <MarkdownRenderer content={result} />
                {loading && result && (
                  <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse ml-1" />
                )}
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
