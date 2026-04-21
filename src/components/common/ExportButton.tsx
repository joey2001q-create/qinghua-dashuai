'use client'

import { useState, useRef, useEffect } from 'react'
import { exportFile, ExportFormat, formatLabels } from '@/lib/export'

interface ExportButtonProps {
  content: string
  filename?: string
  label?: string
  formats?: ExportFormat[]
  disabled?: boolean
}

const defaultFormats: ExportFormat[] = ['md', 'docx', 'pdf', 'xlsx']

const formatIcons: Record<ExportFormat, string> = {
  md: '📝',
  docx: '📄',
  pdf: '📕',
  xlsx: '📊',
}

export default function ExportButton({
  content,
  filename = 'export',
  label = '导出',
  formats = defaultFormats,
  disabled = false,
}: ExportButtonProps) {
  const [open, setOpen] = useState(false)
  const [exporting, setExporting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const stripExt = (name: string) => name.replace(/\.[^.]+$/, '')

  const handleExport = async (format: ExportFormat) => {
    setExporting(true)
    try {
      await exportFile(content, stripExt(filename), format)
    } catch (err) {
      console.error('Export failed:', err)
    } finally {
      setExporting(false)
      setOpen(false)
    }
  }

  const isDisabled = disabled || exporting || !content.trim()

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        onClick={() => !isDisabled && setOpen(!open)}
        disabled={isDisabled}
        className={`px-4 py-2 text-sm rounded-lg transition flex items-center gap-2 ${
          isDisabled 
            ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
            : 'bg-slate-700 hover:bg-slate-600 text-white'
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {exporting ? '导出中...' : label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && !isDisabled && (
        <div className="absolute right-0 top-full mt-1 z-50 bg-slate-800 border border-slate-600 rounded-lg shadow-xl overflow-hidden min-w-[180px]">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => handleExport(format)}
              className="w-full px-4 py-2.5 text-left text-sm text-slate-300 hover:bg-indigo-500/20 hover:text-white transition flex items-center gap-3"
            >
              <span className="text-base">{formatIcons[format]}</span>
              <span>{formatLabels[format]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
