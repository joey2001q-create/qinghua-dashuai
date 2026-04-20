'use client'

interface ScheduleItem {
  time: string
  content: string
  goal: string
}

interface DayPlanCardProps {
  day: number
  emoji?: string
  items: ScheduleItem[]
  highlight?: boolean
}

const dayEmojis = ['🌅', '📚', '✏️', '🎯', '💡', '📝', '🏆']

export function DayPlanCard({ day, emoji, items, highlight }: DayPlanCardProps) {
  const displayEmoji = emoji || dayEmojis[(day - 1) % dayEmojis.length]

  return (
    <div className={`rounded-xl border overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/10 ${
      highlight 
        ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border-indigo-500/50' 
        : 'bg-slate-800/50 border-slate-700'
    }`}>
      <div className={`px-4 py-3 flex items-center gap-2 ${
        highlight 
          ? 'bg-gradient-to-r from-indigo-500/30 to-purple-500/20' 
          : 'bg-slate-700/50'
      }`}>
        <span className="text-xl">{displayEmoji}</span>
        <span className={`font-bold ${highlight ? 'text-indigo-300' : 'text-slate-200'}`}>
          第{day}天
        </span>
      </div>
      <div className="divide-y divide-slate-700/50">
        {items.map((item, index) => (
          <div key={index} className="p-3 hover:bg-slate-700/20 transition-colors">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-20">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-medium">
                  {item.time}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-200 text-sm font-medium mb-1">{item.content}</p>
                <p className="text-slate-400 text-xs">{item.goal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ScheduleGridProps {
  children: React.ReactNode
}

export function ScheduleGrid({ children }: ScheduleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  )
}
