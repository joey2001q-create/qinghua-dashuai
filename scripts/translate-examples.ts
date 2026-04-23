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

async function translateBatch(examples: string[]): Promise<string[]> {
  const prompt = `请将以下英语句子翻译成中文，每行一个句子，直接输出翻译结果，不要加序号：

${examples.map((e, i) => `${i + 1}. ${e}`).join('\n')}`

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
      max_tokens: 4096,
      stream: false,
    }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content || ''
  
  const lines = content.split('\n').filter((l: string) => l.trim())
  const translations: string[] = []
  
  for (const line of lines) {
    let cleaned = line.replace(/^\d+[\.\、\:\：]?\s*/, '').trim()
    if (cleaned) translations.push(cleaned)
  }
  
  return translations
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

async function main() {
  const filePath = join(process.cwd(), 'src/lib/vocab-words.ts')
  const content = readFileSync(filePath, 'utf-8')
  
  const words = parseVocabFile(content)
  console.log(`Total words: ${words.length}`)
  
  const needTranslate = words.filter(w => !w.exampleCn)
  console.log(`Need translation: ${needTranslate.length}`)
  
  if (needTranslate.length === 0) {
    console.log('All examples already translated!')
    return
  }
  
  const batchSize = 20
  const totalBatches = Math.ceil(needTranslate.length / batchSize)
  
  for (let i = 0; i < needTranslate.length; i += batchSize) {
    const batchNum = Math.floor(i / batchSize) + 1
    const batch = needTranslate.slice(i, i + batchSize)
    const examples = batch.map(w => w.example)
    
    console.log(`Processing batch ${batchNum}/${totalBatches}...`)
    
    try {
      const translations = await translateBatch(examples)
      
      for (let j = 0; j < batch.length; j++) {
        if (translations[j]) {
          const wordIndex = words.findIndex(w => w.word === batch[j].word && w.example === batch[j].example)
          if (wordIndex !== -1) {
            words[wordIndex].exampleCn = translations[j]
          }
        }
      }
      
      console.log(`  Batch ${batchNum} done: ${translations.length} translations`)
    } catch (error) {
      console.error(`  Batch ${batchNum} failed:`, error)
    }
    
    if (i + batchSize < needTranslate.length) {
      await new Promise(r => setTimeout(r, 500))
    }
    
    if (batchNum % 10 === 0) {
      saveAllWords(words, filePath)
      console.log(`  Progress saved at batch ${batchNum}`)
    }
  }
  
  saveAllWords(words, filePath)
  console.log('Done!')
}

main().catch(console.error)
