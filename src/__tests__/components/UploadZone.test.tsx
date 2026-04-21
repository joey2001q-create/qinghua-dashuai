import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import UploadZone from '@/components/common/UploadZone'

describe('UploadZone', () => {
  it('should render default text', () => {
    render(<UploadZone onUpload={() => {}} />)
    expect(screen.getByText('点击或拖拽上传')).toBeInTheDocument()
    expect(screen.getByText('支持 JPG / PNG 格式')).toBeInTheDocument()
  })

  it('should render custom text', () => {
    render(<UploadZone onUpload={() => {}} text="上传试卷" subtext="PDF格式" />)
    expect(screen.getByText('上传试卷')).toBeInTheDocument()
    expect(screen.getByText('PDF格式')).toBeInTheDocument()
  })

  it('should render a hidden file input', () => {
    render(<UploadZone onUpload={() => {}} />)
    const input = document.querySelector('input[type="file"]')
    expect(input).toBeInTheDocument()
  })

  it('should show progress bar when loading with progress', () => {
    render(<UploadZone onUpload={() => {}} loading={true} progress={50} />)
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('should not show progress bar when not loading', () => {
    render(<UploadZone onUpload={() => {}} loading={false} progress={50} />)
    expect(screen.queryByText('50%')).not.toBeInTheDocument()
  })
})
