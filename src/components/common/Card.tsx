import { ReactNode, forwardRef, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
  onWheel?: () => void
  onTouchMove?: () => void
  style?: CSSProperties
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', onClick, hover = true, onWheel, onTouchMove, style }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        onWheel={onWheel}
        onTouchMove={onTouchMove}
        style={style}
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
)

Card.displayName = 'Card'

export default Card
