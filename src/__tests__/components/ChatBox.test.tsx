import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChatBox from '@/components/common/ChatBox'
import { generateId } from '@/lib/utils'

describe('ChatBox', () => {
  const baseMessages = [
    { id: generateId(), role: 'assistant' as const, content: '你好', timestamp: new Date() },
    { id: generateId(), role: 'user' as const, content: '我有个问题', timestamp: new Date() },
  ]

  it('should render title', () => {
    render(<ChatBox title="测试聊天" messages={[]} onSend={() => {}} />)
    expect(screen.getByText(/测试聊天/)).toBeInTheDocument()
  })

  it('should render messages', () => {
    render(<ChatBox title="Chat" messages={baseMessages} onSend={() => {}} />)
    expect(screen.getByText('你好')).toBeInTheDocument()
    expect(screen.getByText('我有个问题')).toBeInTheDocument()
  })

  it('should show placeholder when no messages', () => {
    render(<ChatBox title="Chat" messages={[]} onSend={() => {}} />)
    expect(screen.getByText('开始对话吧...')).toBeInTheDocument()
  })

  it('should show loading indicator', () => {
    render(<ChatBox title="Chat" messages={[]} onSend={() => {}} loading={true} />)
    expect(screen.getByText('正在思考...')).toBeInTheDocument()
  })

  it('should disable input when loading', () => {
    render(<ChatBox title="Chat" messages={[]} onSend={() => {}} loading={true} />)
    expect(screen.getByPlaceholderText('输入消息...')).toBeDisabled()
  })

  it('should call onSend when submitting non-empty input', async () => {
    const onSend = vi.fn()
    const user = userEvent.setup()
    render(<ChatBox title="Chat" messages={[]} onSend={onSend} />)
    const input = screen.getByPlaceholderText('输入消息...')
    await user.type(input, 'hello')
    await user.click(screen.getByRole('button', { name: '发送' }))
    expect(onSend).toHaveBeenCalledWith('hello')
  })

  it('should not call onSend for empty input', async () => {
    const onSend = vi.fn()
    const user = userEvent.setup()
    render(<ChatBox title="Chat" messages={[]} onSend={onSend} />)
    await user.click(screen.getByRole('button', { name: '发送' }))
    expect(onSend).not.toHaveBeenCalled()
  })

  it('should use custom placeholder', () => {
    render(<ChatBox title="Chat" messages={[]} onSend={() => {}} placeholder="自定义..." />)
    expect(screen.getByPlaceholderText('自定义...')).toBeInTheDocument()
  })
})
