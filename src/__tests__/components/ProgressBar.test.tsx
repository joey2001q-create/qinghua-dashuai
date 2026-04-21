import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProgressBar from '@/components/common/ProgressBar'

describe('ProgressBar', () => {
  it('should render with label', () => {
    render(<ProgressBar current={80} target={100} total={120} label="数学" />)
    expect(screen.getByText('数学')).toBeInTheDocument()
  })

  it('should display current and target scores', () => {
    render(<ProgressBar current={80} target={100} total={120} label="Test" />)
    expect(screen.getByText('当前: 80分')).toBeInTheDocument()
    expect(screen.getByText('目标: 100分')).toBeInTheDocument()
  })

  it('should display current/target/total labels', () => {
    render(<ProgressBar current={80} target={100} total={120} />)
    expect(screen.getByText(/当前/)).toBeInTheDocument()
    expect(screen.getByText(/目标/)).toBeInTheDocument()
    expect(screen.getByText(/满分/)).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<ProgressBar current={50} target={80} total={100} />)
    expect(screen.queryByText('数学')).not.toBeInTheDocument()
  })

  it('should cap percentage at 100', () => {
    render(<ProgressBar current={150} target={120} total={100} label="Over" />)
    const progressBar = screen.getByText('Over').parentElement
    expect(progressBar).toBeInTheDocument()
  })
})
