import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}

export default function Card({ children, className = '', onClick, hover = true }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-slate-800 border border-slate-700 rounded-2xl p-6
        ${hover ? 'hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
