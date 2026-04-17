export function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function formatDateShort(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}

export function getDaysUntil(date: string): number {
  const target = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  target.setHours(0, 0, 0, 0)
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      resolve(result.split(',')[1])
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const grades = [
  '小一', '小二', '小三', '小四', '小五', '小六',
  '初一', '初二', '初三',
  '高一', '高二', '高三'
]

export const subjects = [
  '数学', '语文', '英语', '物理', '化学', '生物', '历史', '地理', '政治'
]

export const examTypes = ['月考', '期中', '期末', '周测', '模拟考']
