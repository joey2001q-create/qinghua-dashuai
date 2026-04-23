'use client'

import { useRouter } from 'next/navigation'
import { Header, Card } from '@/components/common'

export default function WorldPage() {
  const router = useRouter()

  const features = [
    {
      icon: '🎬',
      title: '在线课堂',
      description: 'Open Maic 智能学习平台',
      url: 'https://open.maic.chat/',
    },
    {
      icon: '🤖',
      title: '学习搭子',
      description: '智谱清言 AI 助手',
      url: 'https://chatglm.cn/',
    },
    {
      icon: '🎨',
      title: '知识动画',
      description: 'VizFlow 可视化学习',
      url: 'https://www.vizflow.xyz/zh',
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
          
          <h1 className="text-2xl font-bold text-white mb-2">🌐 学习天地</h1>
          <p className="text-slate-400 mb-6">精选优质学习资源，助力高效学习</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card 
                key={feature.title} 
                onClick={() => window.open(feature.url, '_blank')}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{feature.description}</p>
                <div className="flex items-center text-indigo-400 text-sm">
                  <span>点击访问</span>
                  <span className="ml-1">→</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
