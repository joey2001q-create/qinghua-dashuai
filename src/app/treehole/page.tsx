'use client'

import { useState, useRef, useCallback } from 'react'
import { Header, Card, Button, ChatBox } from '@/components/common'
import { Message } from '@/types'
import { generateId } from '@/lib/utils'

const gradeGroups = [
  { label: '小学', grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'] },
  { label: '初中', grades: ['初一', '初二', '初三'] },
  { label: '高中', grades: ['高一', '高二', '高三'] },
]

const moodOptions = [
  { emoji: '😔', label: '难过', color: 'bg-blue-500/20 text-blue-400' },
  { emoji: '😰', label: '焦虑', color: 'bg-amber-500/20 text-amber-400' },
  { emoji: '😤', label: '生气', color: 'bg-red-500/20 text-red-400' },
  { emoji: '😴', label: '疲惫', color: 'bg-purple-500/20 text-purple-400' },
  { emoji: '😕', label: '困惑', color: 'bg-slate-500/20 text-slate-400' },
  { emoji: '😢', label: '委屈', color: 'bg-cyan-500/20 text-cyan-400' },
]

const quickTopics = [
  '考试没考好，很难过',
  '和同学闹矛盾了',
  '觉得学习压力太大',
  '爸妈不理解我',
  '对未来感到迷茫',
  '总是担心做不好',
]

export default function TreeholePage() {
  const [started, setStarted] = useState(false)
  const [grade, setGrade] = useState('')
  const [customGrade, setCustomGrade] = useState('')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const messagesRef = useRef<Message[]>([])
  const loadingRef = useRef(false)

  const finalGrade = customGrade || grade

  const getGradeGroup = () => {
    if (!finalGrade) return '中学'
    if (gradeGroups[0].grades.includes(finalGrade)) return '小学'
    if (gradeGroups[1].grades.includes(finalGrade)) return '初中'
    return '高中'
  }

  const getSystemPrompt = useCallback(() => {
    const gradeGroup = getGradeGroup()

    const basePrompt = `你是一位温暖、专业的青少年心理陪伴师，正在倾听一位${finalGrade || '学生'}的倾诉。

【你的身份】
- 你像一位信任的大哥哥/大姐姐，温暖、耐心、不评判
- 你有教育心理学背景，懂得${gradeGroup}生的心理特点
- 你善于倾听，能帮助学生识别和理解自己的情绪

【回应原则】
1. **先共情，后建议**：先让学生感到被理解，再温和地给建议
2. **认可情绪**：每种情绪都是合理的，不要说"不要难过"这类否定的话
3. **具体化**：用具体的问题帮助学生理清思路，如"能告诉我具体发生了什么吗？"
4. **正向引导**：帮助学生看到自己的优点和进步，增强信心
5. **适度建议**：给出1-2个具体可行的小建议，不要说教

【语气风格】
- ${gradeGroup === '小学' ? '用简单易懂的语言，多用比喻和故事，语气活泼可爱' : gradeGroup === '初中' ? '像朋友一样平等交流，理解他们的敏感和矛盾，语气温暖真诚' : '尊重他们的独立思考，可以深入探讨，语气成熟但亲切'}
- 适当使用emoji让对话更温暖
- 每次回复控制在3-5句话，不要太长

【安全提醒】
如果学生提到自伤、严重抑郁、家庭暴力等情况，请：
1. 表达关心和担忧
2. 温和但明确地建议寻求专业帮助
3. 提供求助渠道：学校心理老师、12355青少年服务台、家长或信任的老师

【禁止事项】
- 不要说"你想多了"、"这有什么好难过的"等否定情绪的话
- 不要给过于简单化的建议如"开心点就好"
- 不要扮演医生或给出医学诊断`

    return basePrompt
  }, [finalGrade])

  const startChat = () => {
    const gradeGroup = getGradeGroup()
    const moodLabel = selectedMood ? moodOptions.find(m => m.emoji === selectedMood)?.label : ''

    let greeting = ''
    if (gradeGroup === '小学') {
      greeting = `嗨！我是你的树洞朋友 🌳✨

这里是一个秘密基地，你可以把心里的小秘密、小烦恼都告诉我，我不会告诉任何人的！

${moodLabel ? `看起来你现在有点${moodLabel}呢，想跟我说说发生了什么吗？` : '今天想跟我聊些什么呀？是学校里的事，还是家里的烦恼呢？'}

我会认真听你说，陪你一起想办法～ 💕`
    } else if (gradeGroup === '初中') {
      greeting = `你好呀！我是你的树洞朋友 🌳

这里只有我们两个人，你可以放心地说任何想说的话。我知道初中有时候挺不容易的——学习压力、同学关系、和父母的沟通……

${moodLabel ? `感觉到你现在有些${moodLabel}，愿意跟我说说是什么让你有这样的感受吗？` : '有什么想聊的吗？我在这里听着。'}

我会认真倾听，不会评判你。💙`
    } else {
      greeting = `你好，我是你的树洞朋友 🌳

这里是一个安全的空间，你可以卸下所有的防备，说任何想说的话。高中阶段确实有很多挑战和压力，你的感受都是真实的、重要的。

${moodLabel ? `我注意到你现在感到${moodLabel}。能跟我分享一下是什么让你有这样的感受吗？` : '今天想聊些什么？我在这里倾听。'}

我会认真听，也会尽力帮助你理清思路。💚`
    }

    const initialMessages: Message[] = [
      { id: generateId(), role: 'assistant', content: greeting, timestamp: new Date() },
    ]
    setMessages(initialMessages)
    messagesRef.current = initialMessages
    setStarted(true)
  }

  const handleSend = useCallback(async (message: string) => {
    if (isSending || loadingRef.current) return

    const userMsg: Message = { id: generateId(), role: 'user', content: message, timestamp: new Date() }
    const updatedMessages = [...messagesRef.current, userMsg]

    messagesRef.current = updatedMessages
    setMessages(updatedMessages)
    setIsSending(true)
    loadingRef.current = true

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
          systemPrompt: getSystemPrompt(),
        }),
      })

      if (!response.ok) throw new Error('请求失败')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('无法读取响应')

      const decoder = new TextDecoder()
      let buffer = ''
      let aiContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || !trimmed.startsWith('data: ')) continue
          if (trimmed === 'data: [DONE]') continue

          const data = trimmed.slice(6)
          try {
            const json = JSON.parse(data)
            if (json.content) {
              aiContent += json.content
              const newMessages = [...messagesRef.current]
              const lastMsg = newMessages[newMessages.length - 1]
              if (lastMsg?.role === 'assistant') {
                lastMsg.content = aiContent
              } else {
                newMessages.push({ id: generateId(), role: 'assistant', content: aiContent, timestamp: new Date() })
              }
              messagesRef.current = newMessages
              setMessages([...newMessages])
            }
          } catch {
            // skip
          }
        }
      }
    } catch (error) {
      console.error(error)
      const errorMsg: Message = { id: generateId(), role: 'assistant', content: '抱歉，我暂时无法回应，请稍后再试。', timestamp: new Date() }
      messagesRef.current = [...messagesRef.current, errorMsg]
      setMessages([...messagesRef.current])
    } finally {
      setIsSending(false)
      loadingRef.current = false
    }
  }, [getSystemPrompt, isSending])

  const handleQuickTopic = (topic: string) => {
    startChat()
    setTimeout(() => handleSend(topic), 50)
  }

  const reset = () => {
    setStarted(false)
    setMessages([])
    messagesRef.current = []
    setSelectedMood(null)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => window.history.back()}
            className="mb-4 px-4 py-2 text-sm text-slate-400 hover:text-white transition"
          >
            ← 返回首页
          </button>

          <h1 className="text-2xl font-bold text-white mb-2">🌳 你的树洞</h1>
          <p className="text-slate-400 mb-6">一个安全的空间，倾诉心事，释放情绪</p>

          {!started ? (
            <div className="space-y-6">
              <Card className="text-center py-8">
                <div className="text-5xl mb-4">🌳</div>
                <h2 className="text-xl font-bold text-white mb-2">欢迎来到你的树洞</h2>
                <p className="text-slate-400 mb-6 max-w-md mx-auto">
                  这里是一个安全、私密的空间。你可以倾诉学习压力、人际关系、家庭烦恼或任何情绪。
                  我会认真倾听，给你温暖的陪伴和建议。
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-indigo-400 mb-4">📚 你是几年级？</h3>
                <div className="space-y-3">
                  {gradeGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs text-slate-500 mb-2">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.grades.map((g) => (
                          <button
                            key={g}
                            onClick={() => { setGrade(g); setCustomGrade('') }}
                            className={`px-3 py-1.5 rounded-lg text-sm transition ${
                              grade === g
                                ? 'bg-indigo-500 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-700">
                    <label className="block text-xs text-slate-500 mb-1">或自定义</label>
                    <input
                      type="text"
                      value={customGrade}
                      onChange={(e) => { setCustomGrade(e.target.value); setGrade('') }}
                      placeholder="如：大学、其他"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-emerald-400 mb-4">💭 现在的心情是？</h3>
                <p className="text-sm text-slate-500 mb-3">选择一个最接近你现在感受的情绪（可选）</p>
                <div className="flex flex-wrap gap-2">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.emoji}
                      onClick={() => setSelectedMood(selectedMood === mood.emoji ? null : mood.emoji)}
                      className={`px-4 py-2 rounded-xl text-sm transition flex items-center gap-2 ${
                        selectedMood === mood.emoji
                          ? mood.color + ' ring-2 ring-offset-2 ring-offset-slate-800 ring-current'
                          : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      <span className="text-lg">{mood.emoji}</span>
                      <span>{mood.label}</span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-amber-400 mb-4">💡 不知道说什么？</h3>
                <p className="text-sm text-slate-500 mb-3">点击下面的话题，快速开始对话</p>
                <div className="flex flex-wrap gap-2">
                  {quickTopics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickTopic(topic)}
                      className="px-3 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </Card>

              <div className="text-center">
                <Button onClick={startChat} variant="primary" size="lg">
                  开始倾诉 💬
                </Button>
              </div>

              <Card className="bg-amber-500/5 border-amber-500/20">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="text-sm font-bold text-amber-400 mb-1">隐私保护</h4>
                    <p className="text-xs text-slate-400">
                      你的对话内容不会被保存或分享。如果遇到严重的心理困扰，建议寻求学校心理老师或专业机构的帮助。
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <>
              <ChatBox
                title={`树洞朋友 ${finalGrade ? `· ${finalGrade}` : ''}`}
                messages={messages}
                onSend={handleSend}
                loading={loading || isSending}
                placeholder="说说你的心事..."
                wide
              />
              <div className="flex justify-between items-center mt-4">
                <p className="text-xs text-slate-500">🔒 对话内容不会被保存</p>
                <Button onClick={reset} variant="ghost" size="sm">
                  🔄 重新开始
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
