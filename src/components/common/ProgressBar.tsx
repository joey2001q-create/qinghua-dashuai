'use client'

interface ProgressBarProps {
  current: number
  target: number
  total: number
  label?: string
  showPercent?: boolean
  color?: 'indigo' | 'emerald' | 'amber' | 'rose'
}

const colorMap = {
  indigo: {
    bg: 'bg-indigo-500/20',
    fill: 'bg-indigo-500',
    text: 'text-indigo-400',
  },
  emerald: {
    bg: 'bg-emerald-500/20',
    fill: 'bg-emerald-500',
    text: 'text-emerald-400',
  },
  amber: {
    bg: 'bg-amber-500/20',
    fill: 'bg-amber-500',
    text: 'text-amber-400',
  },
  rose: {
    bg: 'bg-rose-500/20',
    fill: 'bg-rose-500',
    text: 'text-rose-400',
  },
}

export default function ProgressBar({
  current,
  target,
  total,
  label,
  showPercent = true,
  color = 'indigo',
}: ProgressBarProps) {
  const currentPercent = Math.min((current / total) * 100, 100)
  const targetPercent = Math.min((target / total) * 100, 100)
  const colors = colorMap[color]

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">{label}</span>
          {showPercent && (
            <span className={colors.text}>
              {current} / {target} ({currentPercent.toFixed(1)}%)
            </span>
          )}
        </div>
      )}
      <div className={`h-3 rounded-full ${colors.bg} overflow-hidden relative`}>
        <div
          className={`h-full ${colors.fill} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${currentPercent}%` }}
        />
        {targetPercent > currentPercent && (
          <div
            className="absolute top-0 h-full w-0.5 bg-white/50"
            style={{ left: `${targetPercent}%` }}
          />
        )}
      </div>
      <div className="flex justify-between text-xs text-slate-500">
        <span>当前: {current}分</span>
        <span>目标: {target}分</span>
        <span>满分: {total}分</span>
      </div>
    </div>
  )
}

export function ProgressCircle({
  value,
  max,
  label,
  color = 'indigo',
}: {
  value: number
  max: number
  label: string
  color?: 'indigo' | 'emerald' | 'amber' | 'rose'
}) {
  const percent = (value / max) * 100
  const colors = colorMap[color]
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (percent / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-slate-700"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={colors.text.replace('text-', 'text-')}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s ease-out',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-bold ${colors.text}`}>{percent.toFixed(0)}%</span>
        </div>
      </div>
      <span className="text-sm text-slate-400">{label}</span>
    </div>
  )
}
