import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const API_URL = 'https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions'
const API_KEY = '7823359434488ac3bb15a321400f225f:NjkwNjVkOGM3MDk5NTc3YTg4ZTUyNmI5'
const MODEL_ID = 'astron-code-latest'

interface VocabWord {
  word: string
  phonetic: string
  pos: string
  meaning: string
  example: string
  exampleCn?: string
}

async function translateExample(example: string, word: string): Promise<string> {
  const prompt = `请将以下英语句子翻译成中文。注意：这是单词"${word}"的例句，请翻译整个句子，不要只翻译单词。

英语句子：${example}

请直接输出中文翻译，不要加任何解释或标号。`

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL_ID,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 1024,
      stream: false,
    }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content?.trim() || ''
}

function parseVocabFile(content: string): VocabWord[] {
  const words: VocabWord[] = []
  const regex = /\{word:"([^"]*)",phonetic:"([^"]*)",pos:"([^"]*)",meaning:"([^"]*)",example:"([^"]*)"(?:,exampleCn:"([^"]*)")?\}/g
  
  let match
  while ((match = regex.exec(content)) !== null) {
    words.push({
      word: match[1],
      phonetic: match[2],
      pos: match[3],
      meaning: match[4],
      example: match[5],
      exampleCn: match[6] || undefined,
    })
  }
  
  return words
}

function saveAllWords(words: VocabWord[], filePath: string) {
  const lines = words.map(w => {
    const exampleCn = w.exampleCn ? `,exampleCn:"${w.exampleCn.replace(/"/g, '\\"')}"` : ''
    return `  {word:"${w.word}",phonetic:"${w.phonetic}",pos:"${w.pos}",meaning:"${w.meaning}",example:"${w.example}"${exampleCn}},`
  })
  
  const content = `export interface VocabWord {
  word: string
  phonetic: string
  pos: string
  meaning: string
  example: string
  exampleCn?: string
}

export const WORDS: VocabWord[] = [
${lines.join('\n')}
]
`
  
  writeFileSync(filePath, content, 'utf-8')
}

function needsFix(word: VocabWord, prevWord: VocabWord | null): boolean {
  if (!word.exampleCn) return false
  
  const exampleCn = word.exampleCn
  
  if (prevWord) {
    const prevMeaningFirst = prevWord.meaning.split(/[;,，、]/)[0].trim()
    if (exampleCn.includes(prevMeaningFirst)) {
      return true
    }
  }
  
  return false
}

async function main() {
  const filePath = join(process.cwd(), 'src/lib/vocab-words.ts')
  const content = readFileSync(filePath, 'utf-8')
  
  const words = parseVocabFile(content)
  console.log(`Total words: ${words.length}`)
  
  const toFix: { index: number; word: VocabWord }[] = []
  
  for (let i = 0; i < words.length; i++) {
    const prevWord = i > 0 ? words[i - 1] : null
    if (needsFix(words[i], prevWord)) {
      toFix.push({ index: i, word: words[i] })
    }
  }
  
  console.log(`Words needing fix: ${toFix.length}`)
  
  if (toFix.length === 0) {
    console.log('No fixes needed!')
    return
  }
  
  console.log('\nFirst 20 words to fix:')
  toFix.slice(0, 20).forEach(({ index, word }) => {
    console.log(`  ${index + 1}. ${word.word}: "${word.example}" -> "${word.exampleCn}"`)
  })
  
  console.log('\nStarting fixes...')
  
  for (let i = 0; i < toFix.length; i++) {
    const { index, word } = toFix[i]
    console.log(`Fixing ${i + 1}/${toFix.length}: ${word.word}...`)
    
    try {
      const newTranslation = await translateExample(word.example, word.word)
      if (newTranslation) {
        words[index].exampleCn = newTranslation
        console.log(`  New: "${newTranslation}"`)
      }
    } catch (error) {
      console.error(`  Failed:`, error)
    }
    
    if (i < toFix.length - 1) {
      await new Promise(r => setTimeout(r, 300))
    }
    
    if ((i + 1) % 50 === 0) {
      saveAllWords(words, filePath)
      console.log(`  Progress saved at ${i + 1}`)
    }
  }
  
  saveAllWords(words, filePath)
  console.log('Done!')
}

main().catch(console.error)
