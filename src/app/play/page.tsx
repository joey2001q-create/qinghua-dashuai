'use client'

import { useRouter } from 'next/navigation'
import { Header, MainCard } from '@/components/common'

export default function PlayPage() {
  const router = useRouter()

  const games = [
    {
      icon: '📚',
      title: '高考3500词',
      description: 'AI智能背单词计划 · 闪卡记忆',
      tags: [
        { label: '🎯 闪卡记忆', color: 'purple' as const },
        { label: '📊 进度追踪', color: 'teal' as const },
      ],
      color: 'purple' as const,
      path: '/play/vocab',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/')}
            className="mb-4 px-4 py-2 text-sm text-slate-400 hover:text-white transition"
          >
            ← 返回首页
          </button>

          <h1 className="text-2xl font-bold text-white mb-2">🎮 边学边玩</h1>
          <p className="text-slate-400 mb-6">趣味学习，轻松提分</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {games.map((game) => (
              <MainCard
                key={game.title}
                {...game}
                onClick={() => router.push(game.path)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
