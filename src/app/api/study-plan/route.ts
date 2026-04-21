import { NextRequest, NextResponse } from 'next/server'

const API_KEY = '584b8f96b7040464af809e8574ae5d6a:NDQ2NDc3Zjg0MDM4Nzc3MjJiOTZiNjlh'
const API_URL = 'https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions'
const MODEL_ID = 'astron-code-latest'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const weakLabels: Record<string, string> = {
  knowledge: '知识漏洞',
  technique: '解题技巧',
  careless: '粗心失误',
  application: '综合应用',
}

async function* callAIStream(prompt: string): AsyncGenerator<string> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL_ID,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 4096,
      stream: true,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('AI API error:', errorText)
    throw new Error('AI API request failed')
  }

  const reader = response.body?.getReader()
  if (!reader) throw new Error('No response body')

  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || !trimmed.startsWith('data: ')) continue
      if (trimmed === 'data: [DONE]') continue

      const data = trimmed.slice(6)
      try {
        const json = JSON.parse(data)
        const content = json.choices?.[0]?.delta?.content
        if (content) yield content
      } catch {
        // skip invalid JSON
      }
    }
  }
}

export async function POST(request: NextRequest) {
  const { subject, examType, totalScore, targetScore, currentScore, days, dailyHours, grade, gradeGroup, weaknesses } = await request.json()

  const gap = targetScore - currentScore
  const gapPercent = ((gap / totalScore) * 100).toFixed(1)
  const totalHours = days * dailyHours
  const weakDesc = (weaknesses as string[]).map(w => weakLabels[w] || w).join('、')

  const phase1Days = Math.ceil(days * 0.35)
  const phase2Days = Math.ceil(days * 0.40)
  const phase3Days = days - phase1Days - phase2Days

  const prompt = `你是清华大帅，一位专业的学习规划老师，擅长制定科学高效的学习计划。请为${gradeGroup}${grade}学生制定一份三阶段递进式学习计划。

【学生信息】
- 年级：${grade}（${gradeGroup}）
- 学科：${subject}
- 考试类型：${examType}
- 试卷总分：${totalScore}分
- 目标分数：${targetScore}分
- 当前水平：${currentScore}分
- 差距：${gap}分（需提升${gapPercent}%）
- 备考时间：${days}天
- 每天学习时间：${dailyHours}小时
- 总学习时长：${totalHours}小时
- 薄弱环节：${weakDesc}

【输出格式要求 - 必须严格遵循】

## 📊 整体分析
简要分析学生现状、提分策略和薄弱环节应对思路

## 🏗️ 三阶段规划概览

| 阶段 | 天数 | 核心目标 | 重点内容 |
|------|------|----------|----------|
| 第一阶段：基础巩固 | ${phase1Days}天 | 夯实基础，补齐知识漏洞 | ... |
| 第二阶段：专项突破 | ${phase2Days}天 | 攻克薄弱，提升解题能力 | ... |
| 第三阶段：冲刺模拟 | ${phase3Days}天 | 查漏补缺，模拟实战 | ... |

## 📅 第一阶段：基础巩固（第1-${phase1Days}天）

### 每日计划
| 天数 | 学习内容 | 时间分配 | 预期目标 |
|------|----------|----------|----------|
| 第1天 | ... | ... | ... |
| 第2天 | ... | ... | ... |
| ... | ... | ... | ... |

### 本阶段复习节点（艾宾浩斯遗忘曲线）
- 第1天学的内容，在第2天、第4天、第7天安排5-10分钟快速回顾
- 标注哪些天需要安排复习时间

## 📅 第二阶段：专项突破（第${phase1Days + 1}-${phase1Days + phase2Days}天）

### 每日计划
| 天数 | 学习内容 | 时间分配 | 预期目标 |
|------|----------|----------|----------|
| 第${phase1Days + 1}天 | ... | ... | ... |
| ... | ... | ... | ... |

### 薄弱环节专项训练
针对"${weakDesc}"，安排专项突破训练

### 本阶段复习节点
- 第一阶段核心知识点的巩固复习安排

## 📅 第三阶段：冲刺模拟（第${phase1Days + phase2Days + 1}-${days}天）

### 每日计划
| 天数 | 学习内容 | 时间分配 | 预期目标 |
|------|----------|----------|----------|
| 第${phase1Days + phase2Days + 1}天 | ... | ... | ... |
| ... | ... | ... | ... |

### 模拟测试安排
- 建议在第X天安排一次完整模拟测试

### 考前调整
- 考前2-3天的复习策略调整建议

## 🔄 艾宾浩斯复习日历
按遗忘曲线规律，标注哪些天需要复习哪些内容：
| 复习日 | 复习内容 | 复习时长 | 复习方式 |
|--------|----------|----------|----------|
| 第2天 | 第1天内容 | 10分钟 | 快速回忆+错题重做 |
| ... | ... | ... | ... |

## 🧘 休息与调整
- 建议每周安排1天轻度学习日（只做复习，不学新内容）
- 每学习45-50分钟休息10分钟
- 睡前15分钟回顾当天所学

## 💡 重点提醒
- 易错点提示
- 针对薄弱环节的专项建议
- 考试心态调整

【注意事项】
1. 计划必须具体、可执行，明确到知识点和时间分配
2. 三个阶段要有明确的递进关系：基础→专项→冲刺
3. 根据${gradeGroup}${grade}学生的认知水平调整内容难度
4. 艾宾浩斯复习节点要合理嵌入每日计划中
5. 不要使用特殊字符或下划线命名，使用中文标题
6. 表格必须使用标准markdown格式，列对齐用|分隔
7. 针对"${weakDesc}"的薄弱环节，在对应阶段重点安排训练`

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of callAIStream(prompt)) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`))
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      } catch (error) {
        console.error('Stream error:', error)
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: '生成失败' })}\n\n`))
      } finally {
        controller.close()
      }
    },
  })

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
