'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'
import { subjects } from '@/lib/utils'

export default function AnalysisPage() {
  const router = useRouter()
  const [subject, setSubject] = useState('')
  const [scores, setScores] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const analyze = async () => {
    if (!subject || !scores) {
      alert('请填写完整信息')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/weak-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, scores }),
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
          
          <h1 className="text-2xl font-bold text-white mb-2">📊 失分原因分析器</h1>
          <p className="text-slate-400 mb-6">输入成绩，AI诊断薄弱知识点</p>

          <Card className="mb-6">
            <div className="space-y-4">
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
              <div>
                <label className="block text-sm text-slate-400 mb-1">📝 成绩情况</label>
                <textarea 
                  value={scores}
                  onChange={(e) => setScores(e.target.value)}
                  placeholder="描述你的考试情况，如：&#10;数学月考92分，选择题错2道扣8分，填空题全对，大题扣10分&#10;主要错在函数图像和几何证明"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white min-h-[120px]"
                />
              </div>
              <Button onClick={analyze} variant="primary" className="w-full" disabled={loading}>
                {loading ? '分析中...' : '🔍 开始分析'}
              </Button>
            </div>
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
