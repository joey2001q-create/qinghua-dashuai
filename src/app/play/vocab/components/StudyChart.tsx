'use client'

import { useMemo } from 'react'
import { VocabProgress } from '../lib/storage'
import { getStudyCalendar, getMasteryCurve } from '../lib/stats'

interface StudyChartProps {
  progress: VocabProgress
  type: 'heatmap' | 'curve'
}

export default function StudyChart({ progress, type }: StudyChartProps) {
  if (type === 'heatmap') {
    return <HeatmapChart progress={progress} />
  }
  return <CurveChart progress={progress} />
}

function HeatmapChart({ progress }: { progress: VocabProgress }) {
  const calendar = useMemo(() => getStudyCalendar(progress), [progress])
  
  const weeks = useMemo(() => {
    const result: { date: string; count: number }[][] = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    let currentWeek: { date: string; count: number }[] = []
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toDateString()
      const count = calendar.get(dateStr) || 0
      
      currentWeek.push({ date: dateStr, count })
      
      if (currentWeek.length === 7) {
        result.push(currentWeek)
        currentWeek = []
      }
    }
    
    if (currentWeek.length > 0) {
      result.push(currentWeek)
    }
    
    return result
  }, [calendar])
  
  const maxCount = useMemo(() => {
    let max = 0
    for (const week of weeks) {
      for (const day of week) {
        if (day.count > max) max = day.count
      }
    }
    return max || 1
  }, [weeks])
  
  const getColor = (count: number) => {
    if (count === 0) return 'bg-slate-700'
    const ratio = count / maxCount
    if (ratio < 0.25) return 'bg-emerald-900'
    if (ratio < 0.5) return 'bg-emerald-700'
    if (ratio < 0.75) return 'bg-emerald-500'
    return 'bg-emerald-400'
  }

  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  const days = ['日', '一', '二', '三', '四', '五', '六']

  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <h4 className="text-sm font-medium text-white mb-3">📅 学习日历（近一年）</h4>
      <div className="overflow-x-auto">
        <div className="flex gap-1">
          <div className="flex flex-col gap-1 mr-2">
            {days.map((day) => (
              <div key={day} className="w-4 h-4 text-xs text-slate-500 flex items-center justify-center">
                {day}
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-4 h-4 rounded-sm ${getColor(day.count)} cursor-pointer hover:ring-1 hover:ring-white`}
                    title={`${day.date}: ${day.count} 词`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 mt-3">
        <span className="text-xs text-slate-500">少</span>
        <div className="w-4 h-4 rounded-sm bg-slate-700" />
        <div className="w-4 h-4 rounded-sm bg-emerald-900" />
        <div className="w-4 h-4 rounded-sm bg-emerald-700" />
        <div className="w-4 h-4 rounded-sm bg-emerald-500" />
        <div className="w-4 h-4 rounded-sm bg-emerald-400" />
        <span className="text-xs text-slate-500">多</span>
      </div>
    </div>
  )
}

function CurveChart({ progress }: { progress: VocabProgress }) {
  const curve = useMemo(() => getMasteryCurve(progress), [progress])
  
  if (curve.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl p-4">
        <h4 className="text-sm font-medium text-white mb-3">📈 掌握率曲线</h4>
        <p className="text-slate-500 text-sm text-center py-8">暂无学习数据</p>
      </div>
    )
  }
  
  const maxRate = 100
  const width = curve.length * 20
  const height = 120
  
  const points = curve.map((point, index) => {
    const x = (index / (curve.length - 1 || 1)) * width
    const y = height - (point.rate / maxRate) * height
    return `${x},${y}`
  }).join(' ')
  
  const areaPoints = `0,${height} ${points} ${width},${height}`

  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <h4 className="text-sm font-medium text-white mb-3">📈 掌握率曲线</h4>
      <div className="overflow-x-auto">
        <svg width={Math.max(width, 300)} height={height} className="w-full">
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={areaPoints}
            fill="url(#curveGradient)"
          />
          <polyline
            points={points}
            fill="none"
            stroke="rgb(99, 102, 241)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {curve.map((point, index) => {
            const x = (index / (curve.length - 1 || 1)) * width
            const y = height - (point.rate / maxRate) * height
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="rgb(99, 102, 241)"
                className="cursor-pointer"
              >
                <title>{`${point.date}: ${point.rate}%`}</title>
              </circle>
            )
          })}
        </svg>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>开始</span>
        <span>当前掌握率: {curve[curve.length - 1]?.rate || 0}%</span>
      </div>
    </div>
  )
}