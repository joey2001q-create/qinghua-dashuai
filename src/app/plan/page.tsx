'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'

export default function PlanPage() {
  const router = useRouter()

  const features = [
    {
      icon: '🎯',
      title: 'ABC目标提分表',
      description: '智能目标分配 · 信心评估',
      path: '/plan/abc',
    },
    {
      icon: '📅',
      title: '学习计划',
      description: '个性化学习路线',
      path: '/plan/schedule',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/')} className="mb-4">
            ← 返回首页
          </Button>
          
          <h1 className="text-2xl font-bold text-white mb-2">📚 学习规划</h1>
          <p className="text-slate-400 mb-6">选择子功能开始规划</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
