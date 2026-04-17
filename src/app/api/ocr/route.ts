import { NextRequest, NextResponse } from 'next/server'

const PADDLE_OCR_URL = process.env.PADDLE_OCR_URL || 'http://localhost:8868/predict'

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json()
    
    if (!image) {
      return NextResponse.json({ text: '' }, { status: 400 })
    }

    const base64Data = image.includes(',') ? image.split(',')[1] : image

    const response = await fetch(PADDLE_OCR_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        images: [base64Data],
      }),
    })

    if (!response.ok) {
      throw new Error('PaddleOCR request failed')
    }

    const result = await response.json()
    
    let text = ''
    if (result.results && Array.isArray(result.results)) {
      text = result.results
        .map((item: { text?: string; words?: string }) => item.text || item.words || '')
        .filter(Boolean)
        .join('\n')
    } else if (result.data && Array.isArray(result.data)) {
      text = result.data
        .map((item: { text?: string; words?: string }) => item.text || item.words || '')
        .filter(Boolean)
        .join('\n')
    } else if (Array.isArray(result)) {
      text = result
        .map((item: { text?: string; words?: string }[]) => 
          item.map((i) => i.text || i.words || '').join('')
        )
        .filter(Boolean)
        .join('\n')
    }

    return NextResponse.json({ text })
  } catch (error) {
    console.error('OCR API error:', error)
    return NextResponse.json(
      { text: '', error: 'OCR识别失败' },
      { status: 500 }
    )
  }
}
