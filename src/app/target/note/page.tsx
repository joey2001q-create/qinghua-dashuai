'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, ExportButton, LoadingIndicator, UploadZone } from '@/components/common'

export default function NotePage() {
  const router = useRouter()
  const [noteContent, setNoteContent] = useState('')
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
        setNoteContent(prev => prev ? prev + '\n' + data.text : data.text)
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
    if (!noteContent.trim()) {
      alert('请输入笔记内容')
      return
    }

    setLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: noteContent }),
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
      alert('整理失败，请重试')
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

          <h1 className="text-2xl font-bold text-white mb-2">📝 学习笔记</h1>
          <p className="text-slate-400 mb-6">上传笔记图片，AI整理归纳</p>

          <Card className="mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">上传笔记图片</label>
                <UploadZone 
                  onUpload={handleUpload}
                  accept="image/*"
                  loading={uploading}
                  progress={uploadProgress}
                  text="上传笔记图片"
                  subtext="AI将自动识别并整理"
                />
              </div>

              <div className="text-center text-slate-500 text-sm">或</div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">直接粘贴笔记内容</label>
                <textarea
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  placeholder="把笔记内容粘贴到这里..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[150px] placeholder:text-slate-500"
                />
              </div>

              <Button onClick={analyze} variant="primary" className="w-full bg-gradient-to-r from-teal-500 to-cyan-500" disabled={loading || !noteContent.trim()}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    AI正在整理笔记...
                  </span>
                ) : '🧠 AI整理笔记'}
              </Button>
            </div>
          </Card>

          {(result || loading) && (
            <Card ref={resultRef} onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-teal-400">📊 整理结果</h3>
                <ExportButton
                  content={`# 学习笔记整理\n\n原文：\n${noteContent}\n\n---\n\n整理后：\n${result}`}
                  filename="学习笔记整理"
                  label="导出"
                  disabled={loading || !result}
                />
              </div>
              <div className="prose prose-invert max-w-none">
                {loading && !result && <LoadingIndicator text="AI正在整理笔记..." />}
                <MarkdownRenderer content={result} />
                {loading && result && (
                  <span className="inline-block w-2 h-5 bg-teal-400 animate-pulse ml-1" />
                )}
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
