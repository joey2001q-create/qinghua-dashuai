import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StepBar from '@/components/common/StepBar'

describe('StepBar', () => {
  it('should render all steps', () => {
    render(<StepBar steps={['Step 1', 'Step 2', 'Step 3']} currentStep={1} />)
    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
  })

  it('should highlight current step', () => {
    render(<StepBar steps={['A', 'B', 'C']} currentStep={2} />)
    const currentStep = screen.getByText('B')
    expect(currentStep.className).toContain('bg-indigo-500')
  })

  it('should mark completed steps', () => {
    render(<StepBar steps={['A', 'B', 'C']} currentStep={3} />)
    const completedStep = screen.getByText('A')
    expect(completedStep.className).toContain('bg-emerald-500')
  })

  it('should mark future steps as inactive', () => {
    render(<StepBar steps={['A', 'B', 'C']} currentStep={1} />)
    const futureStep = screen.getByText('B')
    expect(futureStep.className).toContain('bg-slate-900')
  })
})
