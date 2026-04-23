'use client'

import { useRouter } from 'next/navigation'
import { Header, MainCard } from '@/components/common'

export default function HomePage() {
  const router = useRouter()

  const features = [
    // {
    //   icon: '📚',
    //   title: '学习规划',
    //   description: 'ABC目标提分表 · 学习计划',
    //   tags: [
    //     { label: '🎯 ABC提分', color: 'green' as const },
    //     { label: '📅 学习计划', color: 'orange' as const },
    //   ],
    //   color: 'blue' as const,
    //   path: '/plan',
    // },
    {
      icon: '🚀',
      title: '考试冲刺',
      description: '考前冲刺 · 考点检测 · 题感训练',
      tags: [
        { label: '🗓️ 冲刺计划', color: 'blue' as const },
        { label: '🎯 考点检测', color: 'teal' as const },
      ],
      color: 'orange' as const,
      path: '/exam',
    },
    {
      icon: '🎯',
      title: '靶向提分',
      description: '全科预习 · 费曼学习 · 作文提升',
      tags: [
        { label: '📖 全科预习', color: 'purple' as const },
        { label: '🧠 费曼学习', color: 'teal' as const },
      ],
      color: 'red' as const,
      path: '/target',
    },
    // {
    //   icon: '💬',
    //   title: '你的树洞',
    //   description: '倾诉压力 · 释放情绪 · 心理陪伴',
    //   tags: [
    //     { label: '🌙 情绪释放', color: 'teal' as const },
    //     { label: '🤝 心理陪伴', color: 'blue' as const },
    //   ],
    //   color: 'pink' as const,
    //   path: '/treehole',
    // },
    {
      icon: '🌐',
      title: '学习天地',
      description: '在线课堂 · 学习搭子 · 知识动画',
      tags: [
        { label: '🎬 在线课堂', color: 'blue' as const },
        { label: '🤖 学习搭子', color: 'purple' as const },
      ],
      color: 'green' as const,
      path: '/world',
    },
    {
      icon: '🧠',
      title: '大帅智脑',
      description: 'AI智能问答 · 学科答疑',
      tags: [
        { label: '💬 智能对话', color: 'indigo' as const },
        { label: '📚 学科答疑', color: 'teal' as const },
      ],
      color: 'blue' as const,
      path: '/brain',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              清华大帅AI<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">伴学</span>
            </h1>
            <p className="text-slate-400">选择你的学习目标，开启智能提分之旅</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <MainCard
                key={feature.title}
                {...feature}
                onClick={() => router.push(feature.path)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
