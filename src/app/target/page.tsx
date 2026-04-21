'use client'

import { useRouter } from 'next/navigation'
import { Header, Card } from '@/components/common'

export default function TargetPage() {
  const router = useRouter()

  const features = [
    {
      icon: '📖',
      title: '全科预习',
      description: 'AI辅助预习，提前掌握知识点',
      path: '/target/preview',
    },
    {
      icon: '🧠',
      title: '费曼学习',
      description: '以教代学，深度理解知识',
      path: '/target/feiman',
    },
    {
      icon: '✍️',
      title: '作文提升',
      description: 'AI批改作文，提升写作能力',
      path: '/target/essay',
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
          
          <h1 className="text-2xl font-bold text-white mb-2">🎯 靶向提分</h1>
          <p className="text-slate-400 mb-6">选择子功能开始学习</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card key={feature.title} onClick={() => router.push(feature.path)}>
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
