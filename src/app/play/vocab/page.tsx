'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Card, Button } from '@/components/common'
import { WORDS, VocabWord } from '@/lib/vocab-words'
import {
  VocabProgress,
  StudyMode,
  loadProgress,
  saveProgress,
  recordStudy,
  getReviewWords,
  shuffleWordOrder,
  getTodayStats,
  getOverallStats,
} from './lib/storage'
import { MasteryLevel } from './lib/ebbinghaus'
import FlashCard from './components/FlashCard'
import MasteryButtons from './components/MasteryButtons'
import StatsCard from './components/StatsCard'

const PRESET_DAYS = [30, 60, 90, 180]

export default function VocabPage() {
  const router = useRouter()
  const [progress, setProgress] = useState<VocabProgress | null>(null)
  const [started, setStarted] = useState(false)
  const [isPlayingWord, setIsPlayingWord] = useState(false)
  const [isPlayingExample, setIsPlayingExample] = useState(false)
  const [studyStartTime, setStudyStartTime] = useState<number>(0)

  useEffect(() => {
    const p = loadProgress()
    setProgress(p)
  }, [])

  useEffect(() => {
    if (started && progress) {
      setStudyStartTime(Date.now())
    }
  }, [started])

  useEffect(() => {
    return () => {
      if (started && studyStartTime > 0 && progress) {
        const studyTime = Math.floor((Date.now() - studyStartTime) / 1000)
        const newProgress = {
          ...progress,
          totalStudyTime: progress.totalStudyTime + studyTime,
        }
        saveProgress(newProgress)
      }
    }
  }, [started, studyStartTime, progress])

  const currentWordIndex = progress?.wordOrder[progress.currentIndex] ?? 0
  const currentWord: VocabWord | null = progress ? WORDS[currentWordIndex] : null
  const perDay = progress ? Math.ceil(WORDS.length / progress.targetDays) : 117
  const todayStats = progress ? getTodayStats(progress) : { learned: 0, correct: 0, total: 0, accuracy: 0 }
  const overallStats = progress ? getOverallStats(progress) : { consecutiveDays: 0, totalStudyTime: 0, totalLearned: 0, masteryRate: 0 }
  const reviewWords = progress ? getReviewWords(progress) : []
  const isFavorite = progress?.favorites.includes(currentWordIndex) ?? false

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

  const handleStart = () => {
    setStarted(true)
    setStudyStartTime(Date.now())
  }

  const handleMark = (level: MasteryLevel) => {
    if (!progress) return

    const newProgress = recordStudy(progress, currentWordIndex, level)
    newProgress.currentIndex = progress.currentIndex + 1
    setProgress(newProgress)
    saveProgress(newProgress)

    if (newProgress.currentIndex >= WORDS.length) {
      setStarted(false)
    }
  }

  const handleToggleFavorite = () => {
    if (!progress) return

    let newFavorites: number[]
    if (progress.favorites.includes(currentWordIndex)) {
      newFavorites = progress.favorites.filter(i => i !== currentWordIndex)
    } else {
      newFavorites = [...progress.favorites, currentWordIndex]
    }

    const newProgress = { ...progress, favorites: newFavorites }
    setProgress(newProgress)
    saveProgress(newProgress)
  }

  const handleSetTargetDays = (days: number) => {
    if (!progress) return
    const newProgress = { ...progress, targetDays: days }
    setProgress(newProgress)
    saveProgress(newProgress)
  }

  const handleSetMode = (mode: StudyMode) => {
    if (!progress) return
    let newProgress = { ...progress, studyMode: mode }
    if (mode === 'random') {
      newProgress = shuffleWordOrder(newProgress)
    }
    setProgress(newProgress)
    saveProgress(newProgress)
  }

  const handleShuffle = () => {
    if (!progress) return
    const newProgress = shuffleWordOrder(progress)
    setProgress(newProgress)
    saveProgress(newProgress)
  }

  if (!progress) return null

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* 顶部导航 */}
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="sm" onClick={() => router.push('/play')}>
              ← 返回
            </Button>
            <Button variant="outline" size="sm" onClick={() => router.push('/play/vocab/settings')}>
              ⚙️ 设置
            </Button>
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">📚 高考3500词</h1>
          <p className="text-slate-400 mb-6">3D翻转闪卡，科学记忆</p>

          {!started ? (
            /* 设置页面 */
            <Card>
              <h3 className="text-lg font-bold text-indigo-400 mb-4">⚙️ 学习计划</h3>

              {/* 学习节奏预设 */}
              <div className="mb-6">
                <label className="text-sm text-slate-400 mb-2 block">学习节奏</label>
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  {PRESET_DAYS.map((days) => (
                    <button
                      key={days}
                      onClick={() => handleSetTargetDays(days)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        progress.targetDays === days
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {days}天
                    </button>
                  ))}
                  <div className="flex gap-1 items-center">
                    <span className="text-xs text-slate-400">自定义</span>
                    <input
                      type="number"
                      min={5}
                      max={300}
                      value={progress.targetDays}
                      onChange={(e) => handleSetTargetDays(Math.min(300, Math.max(5, Number(e.target.value))))}
                      className="w-16 px-2 py-1.5 bg-slate-700 rounded-lg text-white text-center text-sm"
                    />
                    <span className="text-xs text-slate-400">天</span>
                  </div>
                </div>

                {/* 滑块 */}
                <input
                  type="range"
                  min={5}
                  max={300}
                  value={progress.targetDays}
                  onChange={(e) => handleSetTargetDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5天</span>
                  <span>300天</span>
                </div>
              </div>

              {/* 学习信息 */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-800/50 rounded-xl mb-6">
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">总单词数</p>
                  <p className="text-2xl font-bold text-white">{WORDS.length}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">每天学习</p>
                  <p className="text-2xl font-bold text-emerald-400">{perDay} 词</p>
                </div>
              </div>

              <div className="text-center text-sm text-slate-500 mb-6">
                <p>预计完成日期：<span className="text-white">{getEstimatedEndDate(progress.targetDays)}</span></p>
              </div>

              {/* 学习模式 */}
              <div className="mb-6">
                <label className="text-sm text-slate-400 mb-2 block">学习模式</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { mode: 'sequence' as StudyMode, label: '📖 顺序学习', desc: '按计划逐词学习' },
                    { mode: 'random' as StudyMode, label: '🎲 随机测试', desc: '随机抽取单词' },
                    { mode: 'favorites' as StudyMode, label: '❤️ 只学生词', desc: `生词本(${progress.favorites.length}词)` },
                    { mode: 'review' as StudyMode, label: '📅 复习模式', desc: `待复习(${reviewWords.length}词)` },
                  ].map((item) => (
                    <button
                      key={item.mode}
                      onClick={() => handleSetMode(item.mode)}
                      disabled={item.mode === 'favorites' && progress.favorites.length === 0}
                      disabled={item.mode === 'review' && reviewWords.length === 0}
                      className={`p-3 rounded-xl text-left transition ${
                        progress.studyMode === item.mode
                          ? 'bg-indigo-500/20 border-2 border-indigo-500'
                          : 'bg-slate-700 border-2 border-transparent hover:border-slate-600'
                      } ${(item.mode === 'favorites' && progress.favorites.length === 0) || (item.mode === 'review' && reviewWords.length === 0) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 开始按钮 */}
              <Button onClick={handleStart} variant="primary" className="w-full mb-4">
                🚀 开始学习
              </Button>

              {/* 进度提示 */}
              {progress.currentIndex > 0 && (
                <div className="text-center">
                  <p className="text-sm text-emerald-400 mb-2">
                    已学习到第 {progress.currentIndex + 1} 词
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" size="sm" onClick={handleShuffle}>
                      🔀 重新打乱
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ) : (
            /* 学习页面 */
            <div className="space-y-4">
              {/* 进度条 */}
              <Card>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-xs text-slate-500">总进度</p>
                    <p className="text-sm font-medium text-white">
                      第 <span className="text-indigo-400">{progress.currentIndex + 1}</span> / {WORDS.length} 词
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">今日进度</p>
                    <p className="text-sm font-medium text-white">
                      <span className={todayStats.learned >= perDay ? 'text-emerald-400' : 'text-amber-400'}>
                        {todayStats.learned}
                      </span> / {perDay}
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
                    style={{ width: `${((progress.currentIndex + 1) / WORDS.length) * 100}%` }}
                  />
                </div>
              </Card>

              {/* 闪卡 */}
              {currentWord && (
                <FlashCard
                  key={currentWordIndex}
                  word={currentWord}
                  isFavorite={isFavorite}
                  isPlayingWord={isPlayingWord}
                  isPlayingExample={isPlayingExample}
                  onFlip={() => {}}
                  onToggleFavorite={handleToggleFavorite}
                  onSpeakWord={() => speak(currentWord.word, 'word')}
                  onSpeakExample={() => speak(currentWord.example, 'example')}
                />
              )}

              {/* 掌握度按钮 */}
              <MasteryButtons onMark={handleMark} />

              {/* 统计卡片 */}
              <StatsCard progress={progress} reviewCount={reviewWords.length} />

              {/* 生词本入口 */}
              {progress.favorites.length > 0 && (
                <Card className="bg-red-500/5 border-red-500/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium text-red-400">❤️ 生词本 ({progress.favorites.length})</h4>
                      <p className="text-xs text-slate-500">点击进入专项复习</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push('/play/vocab/review')}
                    >
                      复习
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function getEstimatedEndDate(targetDays: number): string {
  const end = new Date()
  end.setDate(end.getDate() + targetDays)
  return end.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
