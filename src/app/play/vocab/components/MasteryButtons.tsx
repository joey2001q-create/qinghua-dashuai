'use client'

interface MasteryButtonsProps {
  onMark: (level: 0 | 1 | 2) => void
  disabled?: boolean
}

export default function MasteryButtons({ onMark, disabled }: MasteryButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onMark(0)}
        disabled={disabled}
        className="flex-1 py-3 rounded-xl bg-red-100 text-red-600 font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="block text-lg">😵</span>
        <span className="text-sm">不认识</span>
      </button>
      <button
        onClick={() => onMark(1)}
        disabled={disabled}
        className="flex-1 py-3 rounded-xl bg-amber-100 text-amber-600 font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="block text-lg">🤔</span>
        <span className="text-sm">模糊</span>
      </button>
      <button
        onClick={() => onMark(2)}
        disabled={disabled}
        className="flex-1 py-3 rounded-xl bg-emerald-100 text-emerald-600 font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="block text-lg">😊</span>
        <span className="text-sm">认识</span>
      </button>
    </div>
  )
}
