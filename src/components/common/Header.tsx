'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: '首页', path: '/', icon: '🏠' },
  { label: '冲刺', path: '/exam', icon: '🚀' },
  { label: '提分', path: '/target', icon: '🎯' },
  { label: '天地', path: '/world', icon: '🌐' },
  { label: '游戏', path: '/play', icon: '🎮' },
  { label: '智脑', path: '/brain', icon: '🧠' },
]

export default function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-white flex items-center gap-2">
            🎯 <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">清华大帅AI伴学</span>
          </Link>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
        <div className="h-16 flex items-center justify-around">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                mounted && isActive(item.path)
                  ? 'text-indigo-400'
                  : 'text-white hover:text-slate-300'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}