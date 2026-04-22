'use client'

import { useRouter } from 'next/navigation'
import { Header, Card } from '@/components/common'

export default function TargetPage() {
  const router = useRouter()

  const features = [
    {
      icon: '📖',
      title: '全科预习',
      description: 'AI生成新学期预习清单',
      path: '/target/preview',
    },
    {
      icon: '🔟',
      title: '一题十解',
      description: '上传一道题，AI给出10种解法',
      path: '/target/ten',
    },
    {
      icon: '✍️',
      title: '作文提升',
      description: 'AI批改+润色建议',
      path: '/target/essay',
    },
    {
      icon: '👨‍🏫',
      title: '大帅代练',
      description: '大帅老师1对1带练',
      path: '/target/tutor',
    },
    {
      icon: '🧠',
      title: '费曼学习法',
      description: '讲给别人听懂，才算真掌握',
      path: '/target/feiman',
    },
    {
      icon: '📝',
      title: '学习笔记',
      description: '拍照上传，AI整理归纳',
      path: '/target/note',
    },
    {
      icon: '📚',
      title: '高考3500词',
      description: 'AI智能背单词计划',
      path: '/target/vocab',
    },
    {
      icon: '🗺️',
      title: '图解知识点',
      description: '可视化知识脉络图',
      path: '/target/kgraph',
    },
    {
      icon: '🌐',
      title: '学习天地',
      description: 'AI学习助手 · 答疑解惑',
      path: 'https://open.maic.chat/',
      external: true,
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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card 
                key={feature.title} 
                onClick={() => feature.external ? window.open(feature.path, '_blank') : router.push(feature.path)}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-base font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-slate-400 text-xs">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
