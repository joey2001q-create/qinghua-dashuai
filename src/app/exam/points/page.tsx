'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, UploadZone } from '@/components/common'

export default function PointsPage() {
  const router = useRouter()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleUpload = async (files: File[]) => {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = async () => {
      const base64 = reader.result as string
      setLoading(true)
      try {
        const response = await fetch('/api/ocr', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64 }),
        })
        const data = await response.json()
        setText(data.text)
      } catch (error) {
        console.error(error)
        alert('OCR识别失败')
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }

  const checkPoints = async () => {
    if (!text.trim()) {
      alert('请输入或上传考试大纲')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/knowledge-points', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await response.json()
      setResult(data.content)
    } catch (error) {
      console.error(error)
      alert('分析失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/exam')} className="mb-4">
            ← 返回考试冲刺
          </Button>
          
          <h1 className="text-2xl font-bold text-white mb-2">🎯 考点覆盖检测</h1>
          <p className="text-slate-400 mb-6">上传考试大纲或教材目录，AI智能提取考点</p>

          <Card className="mb-6">
            <UploadZone 
              onUpload={handleUpload}
              text="上传考试大纲或教材目录截图"
              subtext="JPG / PNG 格式"
              loading={loading}
            />

            <div className="text-center my-4 text-slate-500 text-sm">或 直接粘贴文字</div>

            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="粘贴考试大纲、教材目录或知识点清单..."
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[120px]"
            />

            <Button onClick={checkPoints} variant="primary" className="mt-4 w-full" disabled={loading}>
              {loading ? '分析中...' : '🚀 开始分析考点'}
            </Button>
          </Card>

          {result && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📊 考点分析结果</h3>
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">{result}</div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
