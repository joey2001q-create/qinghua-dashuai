'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, UploadZone } from '@/components/common'
import { grades, subjects, examTypes } from '@/lib/utils'

export default function PaperPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [examType, setExamType] = useState('')
  const [subject, setSubject] = useState('')
  const [fullScore, setFullScore] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [targetScore, setTargetScore] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [images, setImages] = useState<string[]>([])

  const handleUpload = async (files: File[]) => {
    const base64s = await Promise.all(
      files.map(f => new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(f)
      }))
    )
    setImages([...images, ...base64s])
  }

  const analyze = async () => {
    if (!grade || !subject || !currentScore) {
      alert('请填写基本信息')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/analyze-paper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          examType,
          subject,
          fullScore: Number(fullScore) || 100,
          currentScore: Number(currentScore),
          targetScore: Number(targetScore),
          images,
          text,
        }),
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
          
          <h1 className="text-2xl font-bold text-white mb-2">📊 卷后提分</h1>
          <p className="text-slate-400 mb-6">上传试卷图片，AI分析失分原因并给出针对性提分方案</p>

          <Card className="mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">📚 年级</label>
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  <option value="">请选择</option>
                  {grades.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">📋 考试类型</label>
                <select 
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  <option value="">请选择</option>
                  {examTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">📐 学科</label>
                <select 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                >
                  <option value="">请选择</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">🏆 满分</label>
                <input 
                  type="number"
                  value={fullScore}
                  onChange={(e) => setFullScore(e.target.value)}
                  placeholder="100"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">🎯 本次得分</label>
                <input 
                  type="number"
                  value={currentScore}
                  onChange={(e) => setCurrentScore(e.target.value)}
                  placeholder="85"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">🚀 下次目标</label>
                <input 
                  type="number"
                  value={targetScore}
                  onChange={(e) => setTargetScore(e.target.value)}
                  placeholder="95"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white"
                />
              </div>
            </div>

            <UploadZone 
              onUpload={handleUpload}
              multiple
              text="上传卷面图片（支持多选）"
              subtext="JPG / PNG，最多10张"
            />

            {images.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {images.map((img, i) => (
                  <img key={i} src={img} alt={`试卷${i+1}`} className="w-20 h-20 object-cover rounded-lg" />
                ))}
              </div>
            )}

            <div className="mt-4">
              <label className="block text-sm text-slate-400 mb-1">或描述考试情况</label>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="如：数学考试，选择题错3题，大题扣15分，主要失分在函数和几何"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[100px]"
              />
            </div>

            <Button onClick={analyze} variant="orange" className="mt-4 w-full" disabled={loading}>
              {loading ? '分析中...' : '🔍 开始分析'}
            </Button>
          </Card>

          {result && (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">📊 分析结果</h3>
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">{result}</div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
