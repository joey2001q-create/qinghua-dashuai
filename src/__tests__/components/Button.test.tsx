import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '@/components/common/Button'

describe('Button', () => {
  it('should render children text', () => {
    render(<Button>点击</Button>)
    expect(screen.getByText('点击')).toBeInTheDocument()
  })

  it('should render as a button element', () => {
    render(<Button>Test</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should apply primary variant by default', () => {
    render(<Button>Primary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('from-indigo-500')
  })

  it('should apply secondary variant', () => {
    render(<Button variant="secondary">Sec</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-slate-700')
  })

  it('should apply outline variant', () => {
    render(<Button variant="outline">Out</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('border')
  })

  it('should apply size sm', () => {
    render(<Button size="sm">Small</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('px-4')
  })

  it('should apply size lg', () => {
    render(<Button size="lg">Large</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('px-8')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should handle click events', async () => {
    const user = userEvent.setup()
    let clicked = false
    render(<Button onClick={() => { clicked = true }}>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(clicked).toBe(true)
  })

  it('should merge custom className', () => {
    render(<Button className="custom-class">Test</Button>)
    expect(screen.getByRole('button').className).toContain('custom-class')
  })
})
