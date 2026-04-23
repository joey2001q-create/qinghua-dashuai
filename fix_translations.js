const fs = require('fs');
const content = fs.readFileSync('清华大帅AI伴学_WORDS.js', 'utf-8');
const match = content.match(/const WORDS = (\[[\s\S]*\]);?\s*$/);
if (!match) {
  console.log('Could not parse WORDS array');
  process.exit(1);
}
const words = eval(match[1]);

const problematic = [];
words.forEach((item, index) => {
  const exTrans = item.exampleTranslation || '';
  const meaning = item.meaning || '';
  const example = item.example || '';
  
  const isShort = exTrans.length < 10 && !exTrans.includes('。');
  const hasSemicolon = exTrans.includes(';') || exTrans.includes('；');
  const endsWithDefinition = exTrans.trim().endsWith('。') === false && exTrans.length < 15;
  
  const meaningWords = meaning.replace(/[a-zA-Z\.\(\)\[\]]/g, '').split(/[;；,，、\s]+/).filter(w => w.length > 1);
  const transWords = exTrans.replace(/[a-zA-Z\.\(\)\[\]]/g, '').split(/[;；,，、\s]+/).filter(w => w.length > 1);
  const overlap = transWords.filter(w => meaningWords.includes(w)).length;
  const highOverlap = overlap > 0 && transWords.length > 0 && overlap / transWords.length > 0.5;
  
  if (isShort || hasSemicolon || (highOverlap && exTrans.length < 20)) {
    problematic.push({
      index,
      word: item.word,
      example,
      exampleTranslation: exTrans,
      meaning
    });
  }
});

console.log('Found', problematic.length, 'potentially problematic entries:\n');
problematic.slice(0, 50).forEach(p => {
  console.log(`${p.word}: "${p.example}" => "${p.exampleTranslation}" (meaning: "${p.meaning}")`);
});
