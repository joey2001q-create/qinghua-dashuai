'use client'

import { useRouter } from 'next/navigation'
import { Header, Card } from '@/components/common'

export default function ExamPage() {
  const router = useRouter()

  const features = [
    {
      icon: '🗓️',
      title: '考前冲刺计划',
      description: '设定目标，AI生成每日冲刺清单',
      path: '/exam/rush',
    },
    {
      icon: '📄',
      title: '卷后提分',
      description: '上传试卷，AI分析失分点',
      path: '/exam/paper',
    },
    {
      icon: '🎯',
      title: '考点覆盖检测',
      description: '检测你对各考点的掌握程度',
      path: '/exam/points',
    },
    {
      icon: '🧠',
      title: '题感训练',
      description: 'AI自适应训练，识别薄弱环节',
      path: '/exam/quiz',
    },
    {
      icon: '📊',
      title: '失分原因分析器',
      description: '输入成绩，AI诊断薄弱知识点',
      path: '/exam/analysis',
    },
    {
      icon: '🤖',
      title: '学习搭子',
      description: 'AI智能学习助手，随时提问即时解答',
      path: null,
      externalUrl: 'https://chatglm.cn/',
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
          
          <h1 className="text-2xl font-bold text-white mb-2">🚀 考试冲刺</h1>
          <p className="text-slate-400 mb-6">选择子功能开始提分</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card 
                key={feature.title} 
                onClick={() => feature.externalUrl ? window.open(feature.externalUrl, '_blank') : router.push(feature.path!)}
              >
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
