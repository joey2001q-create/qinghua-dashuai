'use client'

import { ReactNode } from 'react'

interface StepBarProps {
  steps: string[]
  currentStep: number
}

export default function StepBar({ steps, currentStep }: StepBarProps) {
  return (
    <div className="flex gap-1 p-3 bg-slate-800 rounded-xl overflow-x-auto">
      {steps.map((step, index) => (
        <span
          key={index}
          className={`
            px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all
            ${index + 1 === currentStep 
              ? 'bg-indigo-500 text-white' 
              : index + 1 < currentStep 
                ? 'bg-emerald-500/20 text-emerald-400' 
                : 'bg-slate-900 text-slate-500'
            }
          `}
        >
          {step}
        </span>
      ))}
    </div>
  )
}
