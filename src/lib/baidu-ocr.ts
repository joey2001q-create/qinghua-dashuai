const BAIDU_API_KEY = 'xgfJNPBXIoVpwhtO3we2r7kP'
const BAIDU_SECRET_KEY = 'KBxf5h6bszkBSbkJyUgVbwAFbKcuPF3c'

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token
  }

  const response = await fetch(
    `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${BAIDU_API_KEY}&client_secret=${BAIDU_SECRET_KEY}`,
    { method: 'POST' }
  )

  if (!response.ok) {
    throw new Error('Failed to get Baidu access token')
  }

  const data = await response.json()
  const token = data.access_token
  const expiresIn = data.expires_in || 86400

  cachedToken = {
    token,
    expiresAt: Date.now() + (expiresIn - 300) * 1000,
  }

  return token
}

export interface OCRResult {
  text: string
  tables?: string[][]
  hasTable: boolean
}

export async function recognizeImage(base64Image: string): Promise<OCRResult> {
  const token = await getAccessToken()
  const imageData = base64Image.includes(',') ? base64Image.split(',')[1] : base64Image

  const response = await fetch(
    `https://aip.baidubce.com/rest/2.0/ocr/v1/accurate?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `image=${encodeURIComponent(imageData)}&detect_language=true`,
    }
  )

  if (!response.ok) {
    throw new Error('Baidu OCR request failed')
  }

  const data = await response.json()
  const words = data.words_result || []
  const text = words.map((item: { words: string }) => item.words).join('\n')

  return { text, hasTable: false }
}

export async function recognizeTable(base64Image: string): Promise<OCRResult> {
  const token = await getAccessToken()
  const imageData = base64Image.includes(',') ? base64Image.split(',')[1] : base64Image

  const response = await fetch(
    `https://aip.baidubce.com/rest/2.0/solution/v1/form_ocr/request?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `image=${encodeURIComponent(imageData)}`,
    }
  )

  if (!response.ok) {
    return recognizeImage(base64Image)
  }

  const data = await response.json()

  if (data.forms && data.forms.length > 0) {
    const tables: string[][] = []
    for (const form of data.forms) {
      const row: string[] = []
      for (const cell of form.body) {
        row.push(cell.words || '')
      }
      if (row.length > 0) {
        tables.push(row)
      }
    }
    const text = tables.map(row => row.join(' | ')).join('\n')
    return { text, tables, hasTable: true }
  }

  return recognizeImage(base64Image)
}

export async function recognizePDF(pdfBase64: string): Promise<OCRResult> {
  const token = await getAccessToken()
  const pdfData = pdfBase64.includes(',') ? pdfBase64.split(',')[1] : pdfBase64

  const response = await fetch(
    `https://aip.baidubce.com/rest/2.0/solution/v1/pdf_ocr/request?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `pdf_file=${encodeURIComponent(pdfData)}`,
    }
  )

  if (!response.ok) {
    throw new Error('Baidu PDF OCR request failed')
  }

  const data = await response.json()
  const results = data.results || []
  const allText: string[] = []
  const allTables: string[][] = []

  for (const page of results) {
    const words = page.words_result || []
    const pageText = words.map((item: { words: string }) => item.words).join('\n')
    allText.push(pageText)

    if (page.forms && page.forms.length > 0) {
      for (const form of page.forms) {
        const row: string[] = []
        for (const cell of form.body) {
          row.push(cell.words || '')
        }
        if (row.length > 0) {
          allTables.push(row)
        }
      }
    }
  }

  return {
    text: allText.join('\n\n--- 第N页 ---\n\n'),
    tables: allTables.length > 0 ? allTables : undefined,
    hasTable: allTables.length > 0,
  }
}

export async function recognizeFile(base64: string, fileType: string): Promise<OCRResult> {
  if (fileType === 'application/pdf' || fileType.endsWith('.pdf')) {
    return recognizePDF(base64)
  }

  if (fileType.includes('spreadsheet') || fileType.endsWith('.xlsx') || fileType.endsWith('.xls')) {
    return recognizeImage(base64)
  }

  return recognizeTable(base64)
}
