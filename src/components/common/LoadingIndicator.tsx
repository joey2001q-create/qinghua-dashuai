'use client'

interface LoadingIndicatorProps {
  text?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function LoadingIndicator({ text = 'AI正在思考...', size = 'md' }: LoadingIndicatorProps) {
  const sizeMap = {
    sm: { spinner: 'w-8 h-8', text: 'text-xs', py: 'py-4' },
    md: { spinner: 'w-12 h-12', text: 'text-sm', py: 'py-8' },
    lg: { spinner: 'w-16 h-16', text: 'text-base', py: 'py-12' },
  }

  const { spinner, text: textSize, py } = sizeMap[size]

  return (
    <div className={`flex flex-col items-center justify-center ${py}`}>
      <div className={`relative ${spinner} mb-3`}>
        <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className={`text-slate-400 ${textSize}`}>{text}</p>
    </div>
  )
}
