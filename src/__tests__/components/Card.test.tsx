import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from '@/components/common/Card'

describe('Card', () => {
  it('should render children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('should have cursor-pointer when onClick is provided', () => {
    render(<Card onClick={() => {}}>Clickable</Card>)
    const card = screen.getByText('Clickable').closest('div')
    expect(card?.className).toContain('cursor-pointer')
  })

  it('should not have cursor-pointer when no onClick', () => {
    render(<Card>Not clickable</Card>)
    const card = screen.getByText('Not clickable').closest('div')
    expect(card?.className).not.toContain('cursor-pointer')
  })

  it('should merge custom className', () => {
    render(<Card className="custom">Test</Card>)
    const card = screen.getByText('Test').closest('div')
    expect(card?.className).toContain('custom')
  })

  it('should handle click', async () => {
    const user = userEvent.setup()
    let clicked = false
    render(<Card onClick={() => { clicked = true }}>Click me</Card>)
    await user.click(screen.getByText('Click me'))
    expect(clicked).toBe(true)
  })

  it('should have hover styles by default', () => {
    render(<Card>Hover</Card>)
    const card = screen.getByText('Hover').closest('div')
    expect(card?.className).toContain('hover:border-indigo-500')
  })

  it('should not have hover styles when hover=false', () => {
    render(<Card hover={false}>No hover</Card>)
    const card = screen.getByText('No hover').closest('div')
    expect(card?.className).not.toContain('hover:border-indigo-500')
  })
})
