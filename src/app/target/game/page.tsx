'use client'

import { Header } from '@/components/common'

export default function GamePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-16 pb-20 px-2">
        <div className="max-w-4xl mx-auto h-[calc(100vh-120px)]">
          <iframe 
            src="/games/word-match.html"
            className="w-full h-full rounded-xl border-0"
            title="单词连连看"
          />
        </div>
      </main>
    </div>
  )
}
