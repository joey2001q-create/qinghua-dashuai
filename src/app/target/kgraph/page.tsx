'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button, MarkdownRenderer, LoadingIndicator, UploadZone } from '@/components/common'

const grades = ['小学', '初一', '初二', '初三', '高一', '高二', '高三']
const subjects = ['数学', '物理', '化学', '语文', '英语', '历史', '地理', '生物', '政治']
const graphTypes = [
  { value: 'auto', label: 'AI智能推荐' },
  { value: 'mindmap', label: '思维导图' },
  { value: 'flow', label: '流程图' },
  { value: 'structure', label: '结构图' },
  { value: 'timeline', label: '时间线' },
  { value: 'compare', label: '对比表' },
  { value: 'diagram', label: '示意图' },
]

const hotTopics = [
  { topic: '细胞有丝分裂', subject: '生物' },
  { topic: '勾股定理', subject: '数学' },
  { topic: '光合作用', subject: '生物' },
  { topic: '辛亥革命', subject: '历史' },
  { topic: '欧姆定律', subject: '物理' },
  { topic: '三角函数', subject: '数学' },
]

export default function KGraphPage() {
  const router = useRouter()
  const [grade, setGrade] = useState('初一')
  const [subject, setSubject] = useState('数学')
  const [graphType, setGraphType] = useState('auto')
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [mermaidCode, setMermaidCode] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [exporting, setExporting] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)
  const mermaidRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)

  useEffect(() => {
    if (result && resultRef.current && !isUserScrolling.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  useEffect(() => {
    if (mermaidCode && mermaidRef.current) {
      renderMermaid()
    }
  }, [mermaidCode])

  const renderMermaid = async () => {
    if (!mermaidRef.current || !mermaidCode) return
    
    try {
      const mermaid = await import('mermaid')
      mermaid.default.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#6366f1',
          primaryTextColor: '#fff',
          primaryBorderColor: '#6366f1',
          lineColor: '#94a3b8',
          secondaryColor: '#1e293b',
          tertiaryColor: '#1e293b',
        },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis',
        },
        mindmap: {
          useMaxWidth: true,
        },
        securityLevel: 'loose',
      })
      
      const id = 'mermaid-graph-' + Date.now()
      const { svg } = await mermaid.default.render(id, mermaidCode)
      mermaidRef.current.innerHTML = svg
    } catch (error) {
      console.error('Mermaid render error:', error)
      mermaidRef.current.innerHTML = `
        <div class="text-red-400 p-4 bg-red-500/10 rounded-lg">
          <p class="font-bold mb-2">图表渲染失败</p>
          <p class="text-sm text-slate-400 mb-2">可能原因：图表语法不支持或格式错误</p>
          <details class="text-xs text-slate-500">
            <summary class="cursor-pointer">查看原始代码</summary>
            <pre class="mt-2 p-2 bg-slate-800 rounded overflow-x-auto">${mermaidCode}</pre>
          </details>
        </div>
      `
    }
  }

  const svgToPng = (svgElement: SVGSVGElement): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new Error('无法创建canvas'))
          return
        }

        const svgData = new XMLSerializer().serializeToString(svgElement)
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(svgBlob)

        const img = new Image()
        img.onload = () => {
          canvas.width = img.width * 2
          canvas.height = img.height * 2
          ctx.scale(2, 2)
          ctx.fillStyle = '#1e293b'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, 0, 0)
          URL.revokeObjectURL(url)
          resolve(canvas.toDataURL('image/png'))
        }
        img.onerror = () => {
          URL.revokeObjectURL(url)
          reject(new Error('图片加载失败'))
        }
        img.src = url
      } catch (error) {
        reject(error)
      }
    })
  }

  const handleExport = async () => {
    if (!result) return
    setExporting(true)

    try {
      let imageHtml = ''
      
      if (mermaidRef.current) {
        const svgElement = mermaidRef.current.querySelector('svg')
        if (svgElement) {
          const pngDataUrl = await svgToPng(svgElement)
          imageHtml = `\n\n## 知识图谱\n\n![知识图谱](${pngDataUrl})\n\n`
        }
      }

      const content = `# ${topic} 知识图谱

年级：${grade}
科目：${subject}
${imageHtml}
## 说明

${result.replace(/```mermaid\n[\s\S]*?\n```/g, '')}`

      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `知识图谱-${topic}.md`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Export error:', error)
      alert('导出失败，请重试')
    } finally {
      setExporting(false)
    }
  }

  const handleUpload = async (file: File) => {
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
      
      if (data.text) setTopic(prev => prev ? prev + '\n' + data.text : data.text)
    } catch (error) {
      console.error(error)
      alert('图片识别失败，请重试')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const generate = async () => {
    if (!topic.trim()) {
      alert('请输入知识点')
      return
    }

    setLoading(true)
    setResult('')
    setMermaidCode('')

    try {
      const response = await fetch('/api/kgraph', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade, subject, graphType, topic }),
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
            if (json.mermaid) {
              setMermaidCode(json.mermaid)
            }
          } catch { /* skip */ }
        }
      }

      const mermaidMatch = fullContent.match(/```mermaid\n([\s\S]*?)\n```/)
      if (mermaidMatch) {
        setMermaidCode(mermaidMatch[1])
      }
    } catch (error) {
      console.error(error)
      alert('生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const handleHotTopic = (hotTopic: string, hotSubject: string) => {
    setTopic(hotTopic)
    setSubject(hotSubject)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">🗺️ 图解知识点</h1>
          <p className="text-slate-400 mb-6">AI可视化图解，让知识一目了然</p>

          <Card className="mb-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">年级</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm"
                >
                  {grades.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">科目</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm"
                >
                  {subjects.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">图表类型</label>
                <select
                  value={graphType}
                  onChange={(e) => setGraphType(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm"
                >
                  {graphTypes.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="如：细胞有丝分裂、三角函数"
                className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder:text-slate-500"
              />
              <label className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg cursor-pointer transition">
                📷
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                  className="hidden"
                />
              </label>
            </div>

            <Button onClick={generate} variant="primary" className="w-full" disabled={loading || !topic.trim()}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  AI正在生成图解...
                </span>
              ) : '🎨 生成可视化图解'}
            </Button>
          </Card>

          <Card className="mb-4 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
            <p className="text-xs text-slate-500 mb-2">💡 热门知识点</p>
            <div className="flex flex-wrap gap-2">
              {hotTopics.map((h, i) => (
                <button
                  key={i}
                  onClick={() => handleHotTopic(h.topic, h.subject)}
                  className="px-3 py-1 bg-slate-700/50 hover:bg-slate-600/50 rounded-full text-sm text-slate-300 transition"
                >
                  {h.topic}
                </button>
              ))}
            </div>
          </Card>

          {(mermaidCode || result || loading) && (
            <Card ref={resultRef} onWheel={() => { isUserScrolling.current = true }} onTouchMove={() => { isUserScrolling.current = true }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-400">📊 知识图谱</h3>
                <button
                  onClick={handleExport}
                  disabled={loading || !result || exporting}
                  className="px-4 py-2 text-sm rounded-lg transition bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {exporting ? '导出中...' : '导出'}
                </button>
              </div>
              
              {mermaidCode && (
                <div 
                  ref={mermaidRef}
                  className="bg-slate-800/50 rounded-xl p-4 mb-4 overflow-x-auto"
                />
              )}
              
              <div className="prose prose-invert max-w-none">
                {loading && !result && <LoadingIndicator text="AI正在生成可视化图解..." />}
                <MarkdownRenderer content={result.replace(/```mermaid\n[\s\S]*?\n```/g, '')} />
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
