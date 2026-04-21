import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } from 'docx'
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'

export type ExportFormat = 'md' | 'docx' | 'pdf' | 'xlsx'

export const formatLabels: Record<ExportFormat, string> = {
  md: 'Markdown (.md)',
  docx: 'Word (.docx)',
  pdf: 'PDF (.pdf)',
  xlsx: 'Excel (.xlsx)',
}

export const formatExtensions: Record<ExportFormat, string> = {
  md: '.md',
  docx: '.docx',
  pdf: '.pdf',
  xlsx: '.xlsx',
}

function stripFilenameExt(filename: string): string {
  return filename.replace(/\.[^.]+$/, '')
}

function parseMarkdownToSections(md: string) {
  const lines = md.split('\n')
  const sections: { type: 'h1' | 'h2' | 'h3' | 'p' | 'li' | 'table' | 'hr' | 'blank'; content: string; rows?: string[][] }[] = []
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

function mdTextRuns(text: string): TextRun[] {
  const runs: TextRun[] = []
  const boldRegex = /\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      runs.push(new TextRun({ text: text.slice(lastIndex, match.index), size: 22, font: 'Microsoft YaHei' }))
    }
    runs.push(new TextRun({ text: match[1], bold: true, size: 22, font: 'Microsoft YaHei' }))
    lastIndex = boldRegex.lastIndex
  }

  if (lastIndex < text.length) {
    runs.push(new TextRun({ text: text.slice(lastIndex), size: 22, font: 'Microsoft YaHei' }))
  }

  if (runs.length === 0) {
    runs.push(new TextRun({ text, size: 22, font: 'Microsoft YaHei' }))
  }

  return runs
}

export async function exportAsDocx(content: string, filename: string) {
  const sections = parseMarkdownToSections(content)
  const children: (Paragraph | Table)[] = []

  for (const section of sections) {
    switch (section.type) {
      case 'h1':
        children.push(new Paragraph({
          children: [new TextRun({ text: section.content, bold: true, size: 36, font: 'Microsoft YaHei', color: '4B0082' })],
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 200 },
        }))
        break
      case 'h2':
        children.push(new Paragraph({
          children: [new TextRun({ text: section.content, bold: true, size: 30, font: 'Microsoft YaHei', color: '2E7D32' })],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 300, after: 150 },
        }))
        break
      case 'h3':
        children.push(new Paragraph({
          children: [new TextRun({ text: section.content, bold: true, size: 26, font: 'Microsoft YaHei', color: 'F57C00' })],
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 200, after: 100 },
        }))
        break
      case 'p':
        children.push(new Paragraph({
          children: mdTextRuns(section.content),
          spacing: { after: 120 },
        }))
        break
      case 'li':
        children.push(new Paragraph({
          children: [new TextRun({ text: '• ', size: 22, font: 'Microsoft YaHei' }), ...mdTextRuns(section.content)],
          spacing: { after: 80 },
          indent: { left: 360 },
        }))
        break
      case 'table': {
        if (!section.rows || section.rows.length === 0) break
        const colCount = section.rows[0].length
        const table = new Table({
          rows: section.rows.map((row, rowIdx) =>
            new TableRow({
              children: row.map(cell =>
                new TableCell({
                  children: [new Paragraph({
                    children: [new TextRun({
                      text: cell,
                      bold: rowIdx === 0,
                      size: 20,
                      font: 'Microsoft YaHei',
                    })],
                    alignment: AlignmentType.CENTER,
                  })],
                  width: { size: Math.floor(9000 / colCount), type: WidthType.DXA },
                })
              ),
            })
          ),
          width: { size: 9000, type: WidthType.DXA },
        })
        children.push(table)
        children.push(new Paragraph({ spacing: { after: 200 } }))
        break
      }
      case 'hr':
        children.push(new Paragraph({
          children: [new TextRun({ text: '─'.repeat(50), color: 'CCCCCC', size: 16 })],
          spacing: { before: 200, after: 200 },
        }))
        break
      case 'blank':
        children.push(new Paragraph({ spacing: { after: 60 } }))
        break
    }
  }

  const doc = new Document({
    sections: [{ children }],
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, `${stripFilenameExt(filename)}.docx`)
}

export async function exportAsPdf(content: string, filename: string) {
  const sections = parseMarkdownToSections(content)
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  const pageWidth = pdf.internal.pageSize.getWidth()
  const margin = 15
  const maxWidth = pageWidth - margin * 2
  let y = margin

  const checkPage = (needed: number) => {
    if (y + needed > pdf.internal.pageSize.getHeight() - margin) {
      pdf.addPage()
      y = margin
    }
  }

  for (const section of sections) {
    switch (section.type) {
      case 'h1':
        checkPage(15)
        pdf.setFontSize(18)
        pdf.setTextColor(75, 0, 130)
        pdf.text(section.content, margin, y, { maxWidth })
        y += 10
        break
      case 'h2':
        checkPage(12)
        pdf.setFontSize(15)
        pdf.setTextColor(46, 125, 50)
        pdf.text(section.content, margin, y, { maxWidth })
        y += 8
        break
      case 'h3':
        checkPage(10)
        pdf.setFontSize(13)
        pdf.setTextColor(245, 124, 0)
        pdf.text(section.content, margin, y, { maxWidth })
        y += 7
        break
      case 'p':
        checkPage(8)
        pdf.setFontSize(10)
        pdf.setTextColor(50, 50, 50)
        const plainText = section.content.replace(/\*\*/g, '')
        const lines = pdf.splitTextToSize(plainText, maxWidth)
        pdf.text(lines, margin, y)
        y += lines.length * 5
        break
      case 'li':
        checkPage(8)
        pdf.setFontSize(10)
        pdf.setTextColor(50, 50, 50)
        const liText = `• ${section.content.replace(/\*\*/g, '')}`
        const liLines = pdf.splitTextToSize(liText, maxWidth - 5)
        pdf.text(liLines, margin + 5, y)
        y += liLines.length * 5
        break
      case 'table': {
        if (!section.rows || section.rows.length === 0) break
        const colCount = section.rows[0].length
        const colWidth = maxWidth / colCount
        const rowHeight = 7

        for (let ri = 0; ri < section.rows.length; ri++) {
          checkPage(rowHeight + 2)
          const row = section.rows[ri]
          if (ri === 0) {
            pdf.setFontSize(9)
            pdf.setFont('helvetica', 'bold')
          } else {
            pdf.setFontSize(9)
            pdf.setFont('helvetica', 'normal')
          }
          pdf.setTextColor(50, 50, 50)

          for (let ci = 0; ci < row.length; ci++) {
            const cellText = row[ci].replace(/\*\*/g, '')
            pdf.rect(margin + ci * colWidth, y, colWidth, rowHeight)
            pdf.text(cellText, margin + ci * colWidth + 2, y + 5, { maxWidth: colWidth - 4 })
          }
          y += rowHeight
        }
        y += 3
        break
      }
      case 'hr':
        checkPage(5)
        pdf.setDrawColor(200, 200, 200)
        pdf.line(margin, y, pageWidth - margin, y)
        y += 5
        break
      case 'blank':
        y += 3
        break
    }
  }

  pdf.save(`${stripFilenameExt(filename)}.pdf`)
}

export function exportAsXlsx(content: string, filename: string) {
  const sections = parseMarkdownToSections(content)
  const wb = XLSX.utils.book_new()

  const overviewData: string[][] = []
  const tableSheets: { name: string; rows: string[][] }[] = []
  let tableIdx = 0

  for (const section of sections) {
    if (section.type === 'table' && section.rows && section.rows.length > 0) {
      tableIdx++
      const sheetName = `表格${tableIdx}`
      tableSheets.push({ name: sheetName, rows: section.rows })
      overviewData.push([`[详见 ${sheetName}]`])
    } else if (section.type === 'h1' || section.type === 'h2' || section.type === 'h3') {
      overviewData.push([section.content])
    } else if (section.type === 'p') {
      overviewData.push([section.content.replace(/\*\*/g, '')])
    } else if (section.type === 'li') {
      overviewData.push([`• ${section.content.replace(/\*\*/g, '')}`])
    }
  }

  const overviewWs = XLSX.utils.aoa_to_sheet(overviewData)
  overviewWs['!cols'] = [{ wch: 80 }]
  XLSX.utils.book_append_sheet(wb, overviewWs, '总览')

  for (const ts of tableSheets) {
    const ws = XLSX.utils.aoa_to_sheet(ts.rows)
    const colCount = ts.rows[0]?.length || 1
    ws['!cols'] = Array.from({ length: colCount }, () => ({ wch: 18 }))
    XLSX.utils.book_append_sheet(wb, ws, ts.name.slice(0, 31))
  }

  XLSX.writeFile(wb, `${stripFilenameExt(filename)}.xlsx`)
}

export function exportAsMd(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${stripFilenameExt(filename)}.md`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export async function exportFile(content: string, filename: string, format: ExportFormat) {
  switch (format) {
    case 'md':
      exportAsMd(content, filename)
      break
    case 'docx':
      await exportAsDocx(content, filename)
      break
    case 'pdf':
      await exportAsPdf(content, filename)
      break
    case 'xlsx':
      exportAsXlsx(content, filename)
      break
  }
}
