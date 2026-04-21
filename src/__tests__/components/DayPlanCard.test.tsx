import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DayPlanCard, ScheduleGrid } from '@/components/common/DayPlanCard'

describe('DayPlanCard', () => {
  const items = [
    { time: '08:00-09:00', content: '数学复习', goal: '掌握函数' },
    { time: '09:00-10:00', content: '英语阅读', goal: '提升阅读速度' },
  ]

  it('should render day number', () => {
    render(<DayPlanCard day={1} items={items} />)
    expect(screen.getByText('第1天')).toBeInTheDocument()
  })

  it('should render schedule items', () => {
    render(<DayPlanCard day={1} items={items} />)
    expect(screen.getByText('数学复习')).toBeInTheDocument()
    expect(screen.getByText('英语阅读')).toBeInTheDocument()
  })

  it('should render time and goal', () => {
    render(<DayPlanCard day={1} items={items} />)
    expect(screen.getByText('08:00-09:00')).toBeInTheDocument()
    expect(screen.getByText('掌握函数')).toBeInTheDocument()
  })

  it('should use custom emoji', () => {
    render(<DayPlanCard day={1} items={items} emoji="🔥" />)
    expect(screen.getByText('🔥')).toBeInTheDocument()
  })

  it('should apply highlight styles', () => {
    const { container } = render(<DayPlanCard day={1} items={items} highlight={true} />)
    const card = container.firstElementChild
    expect(card?.className).toContain('from-indigo-500')
  })
})

describe('ScheduleGrid', () => {
  it('should render children', () => {
    render(<ScheduleGrid><div>Grid item</div></ScheduleGrid>)
    expect(screen.getByText('Grid item')).toBeInTheDocument()
  })

  it('should have grid layout class', () => {
    const { container } = render(<ScheduleGrid><div>Test</div></ScheduleGrid>)
    const grid = container.firstElementChild
    expect(grid?.className).toContain('grid')
  })
})
