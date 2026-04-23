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
  exampleTranslation: string
}

async function translateExamples(items: { word: string; example: string }[]): Promise<string[]> {
  const prompt = `请将以下英语例句翻译成中文。注意：请翻译整个句子，不要只翻译单词。
每行一个翻译，直接输出翻译结果，不要加序号：

${items.map((item, i) => `${i + 1}. ${item.example}`).join('\n')}`

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

function isProblematic(word: VocabWord): boolean {
  const et = word.exampleTranslation.replace(/[。；;]/g, '').trim()
  const meanings = word.meaning
    .replace(/[（(][^)）]*[)）]/g, '')
    .replace(/[;；]/g, ',')
    .split(',')
    .map(s => s.trim())
  
  return meanings.some(meaning => {
    const cleanMeaning = meaning.replace(/[。；;]/g, '').trim()
    return et === cleanMeaning || (et.includes(cleanMeaning) && cleanMeaning.length > 2 && et.length < cleanMeaning.length + 5)
  })
}

async function main() {
  const filePath = join(process.cwd(), '清华大帅AI伴学_WORDS.js')
  const content = readFileSync(filePath, 'utf-8')
  
  const match = content.match(/const WORDS = (\[[\s\S]*\]);?\s*$/)
  if (!match) {
    console.log('Cannot parse WORDS')
    return
  }
  
  const words: VocabWord[] = eval(match[1])
  console.log(`Total words: ${words.length}`)
  
  const problematicIndices: number[] = []
  words.forEach((w, i) => {
    if (isProblematic(w)) {
      problematicIndices.push(i)
    }
  })
  
  console.log(`Problematic entries: ${problematicIndices.length}`)
  
  if (problematicIndices.length === 0) {
    console.log('No issues found!')
    return
  }
  
  const batchSize = 20
  let processed = 0
  
  for (let i = 0; i < problematicIndices.length; i += batchSize) {
    const batch = problematicIndices.slice(i, i + batchSize)
    const items = batch.map(idx => ({
      word: words[idx].word,
      example: words[idx].example,
    }))
    
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(problematicIndices.length / batchSize)}...`)
    
    try {
      const translations = await translateExamples(items)
      
      for (let j = 0; j < batch.length; j++) {
        if (translations[j]) {
          words[batch[j]].exampleTranslation = translations[j]
          processed++
        }
      }
      
      console.log(`  Translated: ${translations.length}`)
    } catch (error) {
      console.error(`  Batch failed:`, error)
    }
    
    if (i + batchSize < problematicIndices.length) {
      await new Promise(r => setTimeout(r, 500))
    }
    
    if ((i + batchSize) % 100 === 0 || i + batchSize >= problematicIndices.length) {
      const newContent = `const WORDS = ${JSON.stringify(words, null, 2)}\n`
      writeFileSync(filePath, newContent, 'utf-8')
      console.log(`  Progress saved (${processed}/${problematicIndices.length})`)
    }
  }
  
  console.log(`Done! Fixed ${processed} entries`)
}

main().catch(console.error)
