'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface MarkdownRendererProps {
  content: string
  className?: string
}

function preprocessContent(content: string): string {
  let processed = content
  
  processed = processed.replace(/progress_tracking/gi, '📈 进度追踪')
  processed = processed.replace(/key_reminders/gi, '💡 重点提醒')
  processed = processed.replace(/student_analysis/gi, '📊 学生现状分析')
  processed = processed.replace(/study_suggestions/gi, '📝 学习建议')
  processed = processed.replace(/daily_plan/gi, '📅 每日学习计划')
  
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '**$1**')
  
  processed = processed.replace(/^[•·]\s*/gm, '- ')
  
  processed = processed.replace(/\\boxed\{([^}]+)\}/g, '$\\boxed{$1}$')
  
  processed = processed.replace(/\\begin\{aligned\}/g, '$\\begin{aligned}')
  processed = processed.replace(/\\end\{aligned\}/g, '\\end{aligned}$')
  
  processed = processed.replace(/\\begin\{cases\}/g, '$\\begin{cases}')
  processed = processed.replace(/\\end\{cases\}/g, '\\end{cases}$')
  
  processed = processed.replace(/\\begin\{matrix\}/g, '$\\begin{matrix}')
  processed = processed.replace(/\\end\{matrix\}/g, '\\end{matrix}$')
  
  processed = processed.replace(/\\begin\{pmatrix\}/g, '$\\begin{pmatrix}')
  processed = processed.replace(/\\end\{pmatrix\}/g, '\\end{pmatrix}$')
  
  processed = processed.replace(/\\begin\{bmatrix\}/g, '$\\begin{bmatrix}')
  processed = processed.replace(/\\end\{bmatrix\}/g, '\\end{bmatrix}$')
  
  processed = processed.replace(/\\begin\{vmatrix\}/g, '$\\begin{vmatrix}')
  processed = processed.replace(/\\end\{vmatrix\}/g, '\\end{vmatrix}$')
  
  processed = processed.replace(/\\begin\{equation\}/g, '$$\\begin{equation}')
  processed = processed.replace(/\\end\{equation\}/g, '\\end{equation}$$')
  
  processed = processed.replace(/\\begin\{equation\*\}/g, '$$\\begin{equation*}')
  processed = processed.replace(/\\end\{equation\*\}/g, '\\end{equation*}$$')
  
  return processed
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const processedContent = preprocessContent(content)
  
  return (
    <div className={`markdown-body ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold text-indigo-400 mt-6 mb-4 pb-2 border-b border-slate-700 flex items-center gap-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold text-emerald-400 mt-6 mb-4 flex items-center gap-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-amber-400 mt-5 mb-3 flex items-center gap-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 px-4 py-2.5 rounded-lg border-l-4 border-amber-500">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold text-cyan-400 mt-3 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-slate-300 leading-relaxed mb-3">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-none space-y-2 mb-4 ml-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 ml-2 text-slate-300">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-slate-300 flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span>{children}</span>
            </li>
          ),
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-pink-400 italic">{children}</em>
          ),
          code: ({ className: codeClassName, children, ...props }) => {
            const isInline = !codeClassName
            if (isInline) {
              return (
                <code className="px-2 py-0.5 bg-slate-700 text-pink-400 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code className={codeClassName} {...props}>
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 my-4 bg-slate-800/50 rounded-r-lg text-slate-400 italic">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 rounded-lg border border-slate-600">
              <table className="w-full border-collapse bg-slate-800/50">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-indigo-600">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-600">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-slate-600 last:border-b-0">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-white font-semibold text-sm border-r border-slate-500 last:border-r-0">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-slate-300 text-sm border-r border-slate-700 last:border-r-0">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="border-slate-700 my-6" />
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}
