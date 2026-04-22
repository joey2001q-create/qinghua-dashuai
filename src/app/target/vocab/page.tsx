'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'
import { WORDS, VocabWord } from '@/lib/vocab-words'

const TOTAL_WORDS = WORDS.length

interface VocabProgress {
  currentIndex: number
  lastDate: string
  todayLearned: number
  targetDays: number
  favorites: number[]
}

const STORAGE_KEY = 'vocab_progress'

export default function VocabPage() {
  const router = useRouter()
  const [targetDays, setTargetDays] = useState(30)
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [words, setWords] = useState<VocabWord[]>([])
  const [isPlayingWord, setIsPlayingWord] = useState(false)
  const [isPlayingExample, setIsPlayingExample] = useState(false)
  const [todayLearned, setTodayLearned] = useState(0)
  const [showComplete, setShowComplete] = useState(false)

  const perDay = Math.ceil(TOTAL_WORDS / targetDays)

  useEffect(() => {
    const shuffled = [...WORDS].sort(() => Math.random() - 0.5)
    setWords(shuffled)
    loadProgress()
  }, [])

  const loadProgress = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const progress: VocabProgress = JSON.parse(saved)
        const today = new Date().toDateString()
        
        if (progress.lastDate === today) {
          setTodayLearned(progress.todayLearned)
        } else {
          setTodayLearned(0)
        }
        
        setCurrentIndex(progress.currentIndex)
        setTargetDays(progress.targetDays || 30)
        setFavorites(progress.favorites || [])
      }
    } catch (error) {
      console.error('Load progress error:', error)
    }
  }

  const saveProgress = (idx: number, learned: number, favs: number[]) => {
    try {
      const progress: VocabProgress = {
        currentIndex: idx,
        lastDate: new Date().toDateString(),
        todayLearned: learned,
        targetDays,
        favorites: favs,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch (error) {
      console.error('Save progress error:', error)
    }
  }

  const speak = (text: string, type: 'word' | 'example') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('您的浏览器不支持语音功能')
      return
    }

    if (type === 'word') {
      setIsPlayingWord(true)
    } else {
      setIsPlayingExample(true)
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.9
    
    const voices = window.speechSynthesis.getVoices()
    const englishVoice = voices.find(v => v.lang.startsWith('en')) || voices[0]
    if (englishVoice) {
      utterance.voice = englishVoice
    }

    utterance.onend = () => {
      if (type === 'word') {
        setIsPlayingWord(false)
      } else {
        setIsPlayingExample(false)
      }
    }

    utterance.onerror = () => {
      if (type === 'word') {
        setIsPlayingWord(false)
      } else {
        setIsPlayingExample(false)
      }
    }

    window.speechSynthesis.speak(utterance)
  }

  const handleStart = () => {
    setStarted(true)
    setFlipped(false)
    setCorrect(0)
    setTotal(0)
    setShowComplete(false)
  }

  const handleFlip = () => setFlipped(!flipped)

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setFlipped(false)
    }
  }

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      setFlipped(false)
      saveProgress(newIndex, todayLearned, favorites)
    }
  }

  const handleMark = (level: number) => {
    const newTodayLearned = todayLearned + 1
    const newTotal = total + 1
    let newFavorites = favorites
    
    setTodayLearned(newTodayLearned)
    setTotal(newTotal)
    
    if (level >= 1) {
      setCorrect(prev => prev + 1)
    }
    if (level === 0 && currentWord) {
      newFavorites = [...favorites, currentIndex]
      setFavorites(newFavorites)
    }

    const newIndex = currentIndex + 1
    if (newIndex < words.length) {
      setCurrentIndex(newIndex)
      setFlipped(false)
      saveProgress(newIndex, newTodayLearned, newFavorites)
    }

    if (newTodayLearned >= perDay) {
      setShowComplete(true)
    }
  }

  const handleToggleFavorite = () => {
    let newFavorites: number[]
    if (favorites.includes(currentIndex)) {
      newFavorites = favorites.filter(i => i !== currentIndex)
    } else {
      newFavorites = [...favorites, currentIndex]
    }
    setFavorites(newFavorites)
    saveProgress(currentIndex, todayLearned, newFavorites)
  }

  const handleContinue = () => {
    setShowComplete(false)
    setTodayLearned(0)
  }

  const progress = words.length > 0 ? ((currentIndex + 1) / words.length) * 100 : 0
  const currentWord = words[currentIndex]
  const dayProgress = Math.floor(currentIndex / perDay) + 1

  const getEndDate = () => {
    const end = new Date()
    end.setDate(end.getDate() + targetDays)
    return end.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/target')} className="mb-4">
            ← 返回靶向提分
          </Button>

          <h1 className="text-2xl font-bold text-white mb-2">📚 高考3500词</h1>
          <p className="text-slate-400 mb-6">3D翻转闪卡，科学记忆</p>

          {!started ? (
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">⚙️ 学习计划</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-slate-400">完成周期</label>
                    <span className="text-lg font-bold text-indigo-400">{targetDays} 天</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    value={targetDays}
                    onChange={(e) => setTargetDays(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>10天</span>
                    <span>300天</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">总单词数</p>
                    <p className="text-2xl font-bold text-white">{TOTAL_WORDS}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">每天学习</p>
                    <p className="text-2xl font-bold text-emerald-400">{perDay} 词</p>
                  </div>
                </div>

                <div className="text-center text-sm text-slate-500">
                  <p>预计完成日期：<span className="text-white">{getEndDate()}</span></p>
                </div>

                <Button onClick={handleStart} variant="primary" className="w-full">
                  🚀 开始学习
                </Button>

                {currentIndex > 0 && (
                  <p className="text-center text-sm text-emerald-400">
                    已学习到第 {currentIndex + 1} 词，继续加油！
                  </p>
                )}
              </div>
            </Card>
          ) : showComplete ? (
            <Card className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">今日学习完成！</h3>
              <p className="text-slate-400 mb-4">
                今天已学习 {todayLearned} 个单词，正确率 {total > 0 ? Math.round((correct / total) * 100) : 0}%
              </p>
              <p className="text-slate-500 mb-6">
                当前进度：第 {currentIndex + 1} / {words.length} 词
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={handleContinue} variant="primary">
                  继续学习
                </Button>
                <Button onClick={() => setStarted(false)} variant="outline">
                  返回设置
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              <Card>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-xs text-slate-500">总进度 · 第 {dayProgress} 天 / {targetDays} 天</p>
                    <p className="text-sm font-medium text-white">第 <span className="text-indigo-400">{currentIndex + 1}</span> / {words.length} 词</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">今日进度</p>
                    <p className="text-sm font-medium text-white">
                      <span className={todayLearned >= perDay ? 'text-emerald-400' : 'text-amber-400'}>{todayLearned}</span> / {perDay}
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </Card>

              <div 
                onClick={handleFlip}
                className="relative cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div 
                  className={`relative transition-transform duration-500`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  <div 
                    className="bg-white rounded-2xl p-8 text-center min-h-[320px] flex flex-col items-center justify-center"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleToggleFavorite() }}
                      className="absolute top-4 right-4 text-2xl opacity-50 hover:opacity-100 transition"
                    >
                      {favorites.includes(currentIndex) ? '❤️' : '🤍'}
                    </button>
                    
                    <button
                      onClick={(e) => { e.stopPropagation(); speak(currentWord?.word || '', 'word') }}
                      className="absolute top-4 left-4 w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 flex items-center justify-center transition"
                      disabled={isPlayingWord}
                    >
                      {isPlayingWord ? '🔊' : '▶️'}
                    </button>

                    <p className="text-xs text-indigo-500 uppercase mb-2">{currentWord?.pos}</p>
                    <p className="text-4xl font-bold text-slate-800 mb-2">{currentWord?.word}</p>
                    <p className="text-sm text-slate-400 mt-4">👆 点击翻转查看释义</p>
                  </div>
                  
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-8 text-center flex flex-col items-center justify-center text-white"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); speak(currentWord?.word || '', 'word') }}
                      className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                      disabled={isPlayingWord}
                    >
                      {isPlayingWord ? '🔊' : '▶️'}
                    </button>

                    <p className="text-xl font-bold mb-2">{currentWord?.word}</p>
                    <p className="text-sm opacity-70 mb-3 font-mono">{currentWord?.phonetic || `/${currentWord?.word}/`}</p>
                    <p className="text-xs uppercase opacity-50 mb-2">{currentWord?.pos}</p>
                    <p className="text-lg font-medium mb-4">{currentWord?.meaning}</p>
                    
                    {currentWord?.example && (
                      <div className="mt-4 p-3 bg-white/10 rounded-lg w-full">
                        <p className="text-xs opacity-70 mb-1">例句：</p>
                        <p className="text-sm">{currentWord.example}</p>
                        <button
                          onClick={(e) => { e.stopPropagation(); speak(currentWord.example, 'example') }}
                          className="mt-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs transition"
                          disabled={isPlayingExample}
                        >
                          {isPlayingExample ? '🔊 播放中...' : '🔊 朗读例句'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handlePrev} variant="outline" className="flex-1" disabled={currentIndex === 0}>
                  ◀ 上一词
                </Button>
                <Button onClick={handleFlip} variant="primary" className="flex-[2]">
                  翻转卡片
                </Button>
                <Button onClick={handleNext} variant="outline" className="flex-1" disabled={currentIndex === words.length - 1}>
                  下一词 ▶
                </Button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleMark(0)}
                  className="flex-1 py-3 rounded-xl bg-red-100 text-red-600 font-medium hover:opacity-90 transition"
                >
                  😵 不认识
                </button>
                <button
                  onClick={() => handleMark(1)}
                  className="flex-1 py-3 rounded-xl bg-amber-100 text-amber-600 font-medium hover:opacity-90 transition"
                >
                  🤔 模糊
                </button>
                <button
                  onClick={() => handleMark(2)}
                  className="flex-1 py-3 rounded-xl bg-emerald-100 text-emerald-600 font-medium hover:opacity-90 transition"
                >
                  😊 认识
                </button>
              </div>

              <Card className="bg-red-500/5 border-red-500/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-red-400">❤️ 生词本 ({favorites.length})</h4>
                </div>
                <div className="text-xs text-slate-500 max-h-[100px] overflow-y-auto">
                  {favorites.length === 0 ? (
                    <p>暂无生词</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {favorites.map(i => (
                        <span key={i} className="px-2 py-1 bg-slate-700 rounded text-slate-300">
                          {words[i]?.word}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>

              <div className="grid grid-cols-3 gap-2">
                <Card className="text-center py-3">
                  <p className="text-2xl font-bold text-emerald-400">{correct}</p>
                  <p className="text-xs text-slate-500">今日答对</p>
                </Card>
                <Card className="text-center py-3">
                  <p className="text-2xl font-bold text-indigo-400">{total}</p>
                  <p className="text-xs text-slate-500">今日总数</p>
                </Card>
                <Card className="text-center py-3">
                  <p className="text-2xl font-bold text-amber-400">{total > 0 ? Math.round((correct / total) * 100) : 0}%</p>
                  <p className="text-xs text-slate-500">正确率</p>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}