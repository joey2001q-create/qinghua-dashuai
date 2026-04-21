import { NextRequest, NextResponse } from 'next/server'
import { recognizeFile, recognizeImage, recognizeTable } from '@/lib/baidu-ocr'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { image, fileType, detectTable } = body

    if (!image) {
      return NextResponse.json({ text: '', error: 'No image provided' }, { status: 400 })
    }

    let result

    if (fileType) {
      result = await recognizeFile(image, fileType)
    } else if (detectTable) {
      result = await recognizeTable(image)
    } else {
      result = await recognizeImage(image)
    }

    return NextResponse.json({
      text: result.text,
      tables: result.tables,
      hasTable: result.hasTable,
    })
  } catch (error) {
    console.error('OCR API error:', error)
    return NextResponse.json(
      { text: '', error: 'OCR识别失败，请稍后重试' },
      { status: 500 }
    )
  }
}
