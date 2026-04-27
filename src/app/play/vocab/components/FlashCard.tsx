'use client'

import { useState } from 'react'
import { VocabWord } from '@/lib/vocab-words'

interface FlashCardProps {
  word: VocabWord
  isFavorite: boolean
  isPlayingWord: boolean
  isPlayingExample: boolean
  onFlip: () => void
  onToggleFavorite: () => void
  onSpeakWord: () => void
  onSpeakExample: () => void
}

export default function FlashCard({
  word,
  isFavorite,
  isPlayingWord,
  isPlayingExample,
  onFlip,
  onToggleFavorite,
  onSpeakWord,
  onSpeakExample,
}: FlashCardProps) {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped(!flipped)
    onFlip()
  }

  return (
    <div
      onClick={handleFlip}
      className="relative cursor-pointer select-none"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative transition-transform duration-500 w-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* 正面 - 单词（简洁，仅显示单词和提示） */}
        <div
          className="bg-white rounded-2xl p-6 text-center flex flex-col items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            minHeight: '320px',
            height: 'auto',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite()
            }}
            className="absolute top-4 right-4 text-2xl opacity-50 hover:opacity-100 transition"
            aria-label={isFavorite ? '取消收藏' : '收藏'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onSpeakWord()
            }}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 flex items-center justify-center transition disabled:opacity-50"
            disabled={isPlayingWord}
            aria-label="播放单词发音"
          >
            {isPlayingWord ? '🔊' : '▶️'}
          </button>

          <p className="text-4xl font-bold text-slate-800">{word?.word}</p>
          <p className="text-sm text-slate-400 mt-3">👆 点击翻转查看释义</p>
        </div>

        {/* 背面 - 释义（核心信息 + 例句，优化布局） */}
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-5 flex flex-col text-white overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)',
            minHeight: '320px',
          }}
        >
          {/* 左上角：单词发音按钮 */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onSpeakWord()
            }}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition disabled:opacity-50 z-10"
            disabled={isPlayingWord}
            aria-label="播放单词发音"
          >
            {isPlayingWord ? '🔊' : '▶️'}
          </button>

          {/* 右上角：收藏按钮 */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite()
            }}
            className="absolute top-4 right-4 text-2xl opacity-70 hover:opacity-100 transition z-10"
            aria-label={isFavorite ? '取消收藏' : '收藏'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>

          {/* 核心信息区（紧凑三行布局） */}
          <div className="flex flex-col items-center pt-6 pb-3">
            {/* 第一行：单词（最高视觉权重） */}
            <p className="text-2xl font-bold mb-1">{word?.word}</p>

            {/* 第二行：音标 + 词性（绑定同行） */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-medium opacity-80 font-mono">{word?.phonetic}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-semibold uppercase">{word?.pos}</span>
            </div>

            {/* 第三行：中文释义（核心记忆目标） */}
            <p className="text-lg font-semibold">{word?.meaning}</p>
          </div>

          {/* 例句模块（左对齐，紧凑布局） */}
          {word?.example && (
            <div className="bg-white/10 rounded-lg p-3 mt-auto">
              {/* 例句标题行：左对齐 + 例句发音按钮 */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium opacity-70">例句：</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onSpeakExample()
                  }}
                  className={`px-2 py-0.5 rounded text-xs transition flex items-center gap-1 ${
                    isPlayingExample 
                      ? 'bg-white/30 text-white' 
                      : 'bg-white/20 hover:bg-white/30 text-white/80'
                  }`}
                  disabled={isPlayingExample}
                  aria-label="朗读例句"
                >
                  {isPlayingExample ? (
                    <>
                      <span className="animate-pulse">🔊</span>
                      <span>播放中</span>
                    </>
                  ) : (
                    <>
                      <span>🔊</span>
                      <span>朗读</span>
                    </>
                  )}
                </button>
              </div>

              {/* 英文例句：左对齐 */}
              <p className="text-sm font-normal leading-relaxed mb-0.5">{word.example}</p>

              {/* 中文翻译：左对齐，稍高字重 */}
              {word.exampleTranslation && (
                <p className="text-xs font-medium opacity-80">{word.exampleTranslation}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}