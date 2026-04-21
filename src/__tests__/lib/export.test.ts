import { describe, it, expect } from 'vitest'

function stripFilenameExt(filename: string): string {
  return filename.replace(/\.[^.]+$/, '')
}

function parseMarkdownToSections(md: string) {
  const lines = md.split('\n')
  const sections: { type: string; content: string; rows?: string[][] }[] = []
  let i = 0
  let inTable = false
  let tableRows: string[][] = []

  const flushTable = () => {
    if (tableRows.length > 0) {
      sections.push({ type: 'table', content: '', rows: [...tableRows] })
      tableRows = []
    }
    inTable = false
  }

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) inTable = true
      const cells = line.split('|').map(c => c.trim()).filter(c => c !== '')
      if (!cells.every(c => /^[-:]+$/.test(c))) {
        tableRows.push(cells)
      }
      i++
      continue
    } else if (inTable) {
      flushTable()
    }

    if (line.startsWith('### ')) {
      sections.push({ type: 'h3', content: line.slice(4).trim() })
    } else if (line.startsWith('## ')) {
      sections.push({ type: 'h2', content: line.slice(3).trim() })
    } else if (line.startsWith('# ')) {
      sections.push({ type: 'h1', content: line.slice(2).trim() })
    } else if (line.startsWith('- ')) {
      sections.push({ type: 'li', content: line.slice(2).trim() })
    } else if (line.trim() === '---') {
      sections.push({ type: 'hr', content: '' })
    } else if (line.trim() === '') {
      sections.push({ type: 'blank', content: '' })
    } else {
      sections.push({ type: 'p', content: line.trim() })
    }
    i++
  }

  if (inTable) flushTable()
  return sections
}

describe('stripFilenameExt', () => {
  it('should strip .md extension', () => {
    expect(stripFilenameExt('report.md')).toBe('report')
  })

  it('should strip .docx extension', () => {
    expect(stripFilenameExt('report.docx')).toBe('report')
  })

  it('should strip .pdf extension', () => {
    expect(stripFilenameExt('report.pdf')).toBe('report')
  })

  it('should strip .xlsx extension', () => {
    expect(stripFilenameExt('report.xlsx')).toBe('report')
  })

  it('should handle filename without extension', () => {
    expect(stripFilenameExt('report')).toBe('report')
  })

  it('should handle Chinese filename', () => {
    expect(stripFilenameExt('数学失分分析.md')).toBe('数学失分分析')
  })
})

describe('parseMarkdownToSections', () => {
  it('should parse h1 heading', () => {
    const result = parseMarkdownToSections('# 标题')
    expect(result).toContainEqual({ type: 'h1', content: '标题' })
  })

  it('should parse h2 heading', () => {
    const result = parseMarkdownToSections('## 二级标题')
    expect(result).toContainEqual({ type: 'h2', content: '二级标题' })
  })

  it('should parse h3 heading', () => {
    const result = parseMarkdownToSections('### 三级标题')
    expect(result).toContainEqual({ type: 'h3', content: '三级标题' })
  })

  it('should parse list items', () => {
    const result = parseMarkdownToSections('- 项目1\n- 项目2')
    expect(result.filter(s => s.type === 'li')).toHaveLength(2)
  })

  it('should parse table', () => {
    const md = '| A | B |\n|---|---|\n| 1 | 2 |'
    const result = parseMarkdownToSections(md)
    const table = result.find(s => s.type === 'table')
    expect(table?.rows).toEqual([['A', 'B'], ['1', '2']])
  })

  it('should skip table separator rows', () => {
    const md = '| A | B |\n|---|---|\n| 1 | 2 |'
    const result = parseMarkdownToSections(md)
    const table = result.find(s => s.type === 'table')
    expect(table?.rows?.length).toBe(2)
  })

  it('should parse horizontal rule', () => {
    const result = parseMarkdownToSections('---')
    expect(result).toContainEqual({ type: 'hr', content: '' })
  })

  it('should parse paragraph text', () => {
    const result = parseMarkdownToSections('普通文本')
    expect(result).toContainEqual({ type: 'p', content: '普通文本' })
  })

  it('should parse complex document', () => {
    const md = `# ABC目标提分表

## 基本信息
- 年级：初二
- 科目：数学

## 各科目目标
| 科目 | 满分 | 目标 |
|------|------|------|
| 数学 | 120  | 105  |

总结内容`

    const result = parseMarkdownToSections(md)
    expect(result.find(s => s.type === 'h1')?.content).toBe('ABC目标提分表')
    expect(result.filter(s => s.type === 'h2')).toHaveLength(2)
    expect(result.filter(s => s.type === 'li')).toHaveLength(2)
    expect(result.find(s => s.type === 'table')?.rows).toBeDefined()
    expect(result.find(s => s.type === 'p')?.content).toBe('总结内容')
  })
})
