'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, ExportButton, LoadingIndicator, UploadZone } from '@/components/common'

const gradeOptions = ['初一', '初二', '初三', '高一', '高二', '高三']
const subjectOptions = ['语文', '数学', '英语', '物理', '化学', '历史', '生物']

export default function PreviewPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('高二')
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['语文', '数学', '英语'])
  const [textContent, setTextContent] = useState('')
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

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }

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
        setTextContent(prev => prev ? prev + '\n' + data.text : data.text)
      }
    } catch (error) {
      console.error(error)
      alert('图片识别失败，请重试')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const generate = async () => {
    if (selectedSubjects.length === 0) {
      alert('请至少选择一个科目')
      return
    }
    if (!textContent.trim()) {
      alert('请上传课本内容或输入文字')
      return
    }

    setLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          grade, 
          subject: selectedSubjects.join('、'), 
          topic: '课本内容预习',
          content: textContent 
        }),
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

          <h1 className="text-2xl font-bold text-white mb-2">📖 全科预习</h1>
          <p className="text-slate-400 mb-6">上传课本内容，AI生成预习单</p>

          <Card className="mb-6">
            <div className="space-y-4">
              {/* 年级选择 */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">年级</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  {gradeOptions.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* 科目多选 */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">选择预习科目</label>
                <div className="flex flex-wrap gap-3">
                  {subjectOptions.map(subject => (
                    <label 
                      key={subject}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition ${
                        selectedSubjects.includes(subject)
                          ? 'bg-teal-500/20 border border-teal-500 text-teal-400'
                          : 'bg-slate-700/50 border border-slate-600 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject)}
                        onChange={() => toggleSubject(subject)}
                        className="hidden"
                      />
                      <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        selectedSubjects.includes(subject)
                          ? 'border-teal-500 bg-teal-500'
                          : 'border-slate-500'
                      }`}>
                        {selectedSubjects.includes(subject) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm font-medium">{subject}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  已选：{selectedSubjects.length > 0 ? selectedSubjects.join('、') : '未选择'}
                </p>
              </div>

              {/* 上传课本内容 */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">上传课本内容（图片/PDF/文字）</label>
                <UploadZone 
                  onUpload={handleUpload}
                  accept="image/*,.pdf,.doc,.docx"
                  loading={uploading}
                  progress={uploadProgress}
                  text="点击上传课本图片或文件"
                  subtext="支持图片 / PDF / Word 格式"
                />
              </div>

              {/* 或直接输入 */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">或直接输入课本内容（粘贴文字）</label>
                <textarea
                  value={textContent}
                  onChange={(e) => setTextContent(e.target.value)}
                  placeholder="将识别出的文字粘贴到这里，或直接输入课本内容..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[120px] placeholder:text-slate-500"
                />
              </div>

              <Button 
                onClick={generate} 
                variant="primary" 
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500" 
                disabled={loading || !textContent.trim() || selectedSubjects.length === 0}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    AI正在生成预习单...
                  </span>
                ) : '🚀 生成预习单'}
              </Button>
            </div>
          </Card>

          {(result || loading) && (
            <Card ref={resultRef} onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-teal-400">📖 预习单</h3>
                  <p className="text-sm text-slate-500">{grade} · {selectedSubjects.join('、')}</p>
                </div>
                <ExportButton
                  content={`# ${grade}预习单\n\n科目：${selectedSubjects.join('、')}\n\n## 课本内容\n${textContent}\n\n---\n\n## 预习导学\n${result}`}
                  filename={`${grade}预习单`}
                  label="导出"
                  disabled={loading || !result}
                />
              </div>
              <div className="prose prose-invert max-w-none">
                {loading && !result && <LoadingIndicator text="AI正在生成预习内容..." />}
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
