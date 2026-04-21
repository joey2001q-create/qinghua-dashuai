'use client'

import { useRef, useState, ChangeEvent } from 'react'

interface UploadZoneProps {
  onUpload: (files: File[]) => void
  accept?: string
  multiple?: boolean
  loading?: boolean
  progress?: number
  text?: string
  subtext?: string
  showFileInfo?: boolean
}

export default function UploadZone({ 
  onUpload, 
  accept = 'image/*,.pdf,.doc,.docx', 
  multiple = false,
  loading = false,
  progress = 0,
  text = '点击或拖拽上传',
  subtext = '支持图片 / PDF / Word 格式',
  showFileInfo = true
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [drag, setDrag] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setUploadedFile(files[0])
      onUpload(files)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      setUploadedFile(files[0])
      onUpload(files)
    }
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return '🖼️'
    if (file.type === 'application/pdf') return '📕'
    if (file.name.endsWith('.doc') || file.name.endsWith('.docx')) return '📄'
    return '📎'
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(true)
  }

  const handleDragLeave = () => {
    setDrag(false)
  }

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`
        border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all
        ${drag ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-600 bg-slate-800/50 hover:border-indigo-500/50 hover:bg-indigo-500/5'}
        ${loading ? 'pointer-events-none opacity-70' : ''}
      `}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="hidden"
      />
      
      <div className="text-4xl mb-3">📤</div>
      <div className="text-slate-300 text-sm">{text}</div>
      <div className="text-slate-500 text-xs mt-1">{subtext}</div>
      
      {showFileInfo && uploadedFile && !loading && (
        <div className="mt-4 px-4 py-2 bg-slate-700/50 rounded-lg inline-flex items-center gap-2">
          <span>{getFileIcon(uploadedFile)}</span>
          <span className="text-slate-300 text-sm truncate max-w-[200px]">{uploadedFile.name}</span>
          <span className="text-slate-500 text-xs">({formatFileSize(uploadedFile.size)})</span>
        </div>
      )}
      
      {loading && progress > 0 && (
        <div className="mt-4">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-slate-400 mt-2">{progress}%</div>
        </div>
      )}
    </div>
  )
}
