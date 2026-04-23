const fs = require('fs');

const content = fs.readFileSync('./清华大帅AI伴学_WORDS.js', 'utf8');

const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const jsonStr = content.substring(start, end + 1);

const words = JSON.parse(jsonStr);

const output = `export interface VocabWord {
  word: string
  phonetic: string
  pos: string
  meaning: string
  example: string
  exampleCn?: string
}

export const WORDS: VocabWord[] = [
${words.map(w => {
  const example = (w.example || '').replace(/"/g, '\\"');
  const exampleCn = (w.exampleTranslation || '').replace(/"/g, '\\"');
  return `  {word:"${w.word}",phonetic:"${w.phonetic}",pos:"${w.pos}",meaning:"${w.meaning}",example:"${example}",exampleCn:"${exampleCn}"},`;
}).join('\n')}
]
`;

fs.writeFileSync('./src/lib/vocab-words.ts', output);
console.log(`已生成 ${words.length} 个单词`);
