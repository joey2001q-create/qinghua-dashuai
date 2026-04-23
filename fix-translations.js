const fs = require('fs');
const translate = require('@vitalets/google-translate-api');

const content = fs.readFileSync('清华大帅AI伴学_WORDS.js', 'utf8');
const data = eval('(' + content.replace('const WORDS = ', '').replace(/;$/, '') + ')');

async function translateText(text) {
  try {
    const res = await translate(text, { to: 'zh-CN' });
    return res.text;
  } catch (error) {
    console.error('Translation error:', error.message);
    return null;
  }
}

async function main() {
  const issues = [];
  data.forEach((item, idx) => {
    if (item.exampleTranslation && item.meaning) {
      const exTrans = item.exampleTranslation.replace(/[。，、；]/g, '').trim();
      const meaning = item.meaning.replace(/[。，、；]/g, '').trim();
      // Only fix when translation is short and equals meaning
      if (exTrans.length <= 15 && (exTrans === meaning || meaning.startsWith(exTrans))) {
        issues.push(idx);
      }
    }
  });

  console.log(`Found ${issues.length} issues to fix`);
  
  let fixed = 0;
  for (let i = 0; i < issues.length; i++) {
    const idx = issues[i];
    const item = data[idx];
    console.log(`[${i + 1}/${issues.length}] ${item.word}: "${item.example.substring(0, 50)}..."`);
    
    const translation = await translateText(item.example);
    if (translation) {
      data[idx].exampleTranslation = translation;
      fixed++;
      console.log(`  -> ${translation}`);
    }
    
    await new Promise(r => setTimeout(r, 300));
  }

  const newContent = 'const WORDS = ' + JSON.stringify(data, null, 2) + ';';
  fs.writeFileSync('清华大帅AI伴学_WORDS.js', newContent, 'utf8');
  console.log(`\nFixed ${fixed} translations.`);
}

main().catch(console.error);