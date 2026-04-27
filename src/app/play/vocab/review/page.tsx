'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'
import { VocabProgress, loadProgress, saveProgress, recordStudy } from '../lib/storage'
import { WORDS, VocabWord } from '@/lib/vocab-words'
import FlashCard from '../components/FlashCard'
import MasteryButtons from '../components/MasteryButtons'
import { MasteryLevel } from '../lib/ebbinghaus'

export default function ReviewPage() {
  const router = useRouter()
  const [progress, setProgress] = useState<VocabProgress | null>(null)
  const [reviewIndices, setReviewIndices] = useState<number[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlayingWord, setIsPlayingWord] = useState(false)
  const [isPlayingExample, setIsPlayingExample] = useState(false)

  useEffect(() => {
    const p = loadProgress()
    setProgress(p)
    const indices = [...p.favorites]
    shuffleArray(indices)
    setReviewIndices(indices)
  }, [])

  const shuffleArray = <T,>(array: T[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  const currentWord: VocabWord | null = progress && reviewIndices.length > 0
    ? WORDS[reviewIndices[currentIndex]]
    : null

  const isFavorite = progress && reviewIndices.length > 0
    ? progress.favorites.includes(reviewIndices[currentIndex])
    : false

  const speak = useCallback((text: string, type: 'word' | 'example') => {
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
  }, [])

  const handleMark = (level: MasteryLevel) => {
    if (!progress || reviewIndices.length === 0) return

    const wordIndex = reviewIndices[currentIndex]
    const newProgress = recordStudy(progress, wordIndex, level)
    setProgress(newProgress)
    saveProgress(newProgress)

    if (currentIndex < reviewIndices.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      router.push('/play/vocab/settings')
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < reviewIndices.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  if (!progress || reviewIndices.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main className="pt-20 pb-24 px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="outline" size="sm" onClick={() => router.push('/play/vocab/settings')} className="mb-4">
              ← 返回设置
            </Button>
            <Card className="text-center py-12">
              <p className="text-6xl mb-4">🎉</p>
              <h3 className="text-xl font-bold text-white mb-2">生词本为空</h3>
              <p className="text-slate-400 mb-6">继续学习，标记"不认识"的词会出现在这里</p>
              <Button variant="primary" onClick={() => router.push('/play/vocab')}>
                继续学习
              </Button>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Button variant="outline" size="sm" onClick={() => router.push('/play/vocab/settings')} className="mb-4">
            ← 返回设置
          </Button>

          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">❤️ 生词复习</h1>
            <p className="text-slate-400">
              {currentIndex + 1} / {reviewIndices.length}
            </p>
          </div>

          {/* 进度条 */}
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / reviewIndices.length) * 100}%` }}
            />
          </div>

          {/* 闪卡 */}
          {currentWord && (
            <FlashCard
              word={currentWord}
              isFavorite={isFavorite}
              isPlayingWord={isPlayingWord}
              isPlayingExample={isPlayingExample}
              onFlip={() => {}}
              onToggleFavorite={() => {}}
              onSpeakWord={() => speak(currentWord.word, 'word')}
              onSpeakExample={() => speak(currentWord.example, 'example')}
            />
          )}

          {/* 导航按钮 */}
          <div className="flex gap-2 mt-4">
            <Button onClick={handlePrev} variant="outline" className="flex-1" disabled={currentIndex === 0}>
              ◀ 上一词
            </Button>
            <Button onClick={handleNext} variant="outline" className="flex-1" disabled={currentIndex === reviewIndices.length - 1}>
              下一词 ▶
            </Button>
          </div>

          {/* 掌握度按钮 */}
          <div className="mt-4">
            <MasteryButtons onMark={handleMark} />
          </div>
        </div>
      </main>
    </div>
  )
}
