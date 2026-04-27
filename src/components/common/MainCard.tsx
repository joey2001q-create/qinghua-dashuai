'use client'

import { ReactNode } from 'react'

interface MainCardProps {
  icon: string
  title: string
  description: string
  tags: { label: string; color: 'blue' | 'green' | 'orange' | 'purple' | 'teal' | 'red' | 'pink' | 'indigo' }[]
  onClick: () => void
  color: 'blue' | 'orange' | 'red' | 'pink' | 'green' | 'purple'
}

const colorMap = {
  blue: 'from-blue-500 to-blue-400',
  orange: 'from-orange-500 to-orange-400',
  red: 'from-red-500 to-red-400',
  pink: 'from-pink-500 to-pink-400',
  green: 'from-emerald-500 to-emerald-400',
  purple: 'from-purple-500 to-purple-400',
}

const tagColorMap = {
  blue: 'bg-indigo-500/20 text-indigo-400',
  green: 'bg-emerald-500/20 text-emerald-400',
  orange: 'bg-orange-500/20 text-orange-400',
  purple: 'bg-purple-500/20 text-purple-400',
  teal: 'bg-teal-500/20 text-teal-400',
  red: 'bg-red-500/20 text-red-400',
  pink: 'bg-pink-500/20 text-pink-400',
  indigo: 'bg-indigo-500/20 text-indigo-400',
}

export default function MainCard({ icon, title, description, tags, onClick, color }: MainCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/50 group overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorMap[color]} rounded-t-2xl group-hover:h-1.5 transition-all`} />
      
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagColorMap[tag.color]}`}>
            {tag.label}
          </span>
        ))}
      </div>
      
      <div className="absolute bottom-5 right-5 text-slate-600 text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all">
        →
      </div>
    </div>
  )
}
