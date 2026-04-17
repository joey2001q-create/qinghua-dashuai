'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white flex items-center gap-2">
          🎯 <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">清华大帅AI伴学</span>
        </Link>
        {pathname !== '/' && (
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition">
            ← 返回首页
          </Link>
        )}
      </div>
    </header>
  )
}
