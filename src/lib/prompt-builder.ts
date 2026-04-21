import { getPromptById, interpolatePrompt, getAllPrompts, type PromptTemplate } from './prompts'

export interface PromptBuildOptions {
  includeVersion?: boolean
  includeTimestamp?: boolean
}

export function buildPrompt(
  promptId: string,
  variables: Record<string, string | number | boolean>
): string | null {
  const prompt = getPromptById(promptId)
  if (!prompt) {
    console.error(`Prompt not found: ${promptId}`)
    return null
  }

  const systemPrompt = interpolatePrompt(prompt.systemPrompt, variables)
  const userPrompt = interpolatePrompt(prompt.userPromptTemplate, variables)

  return `${systemPrompt}\n\n${userPrompt}`
}

export function buildSystemPrompt(
  promptId: string,
  variables: Record<string, string | number | boolean>
): string | null {
  const prompt = getPromptById(promptId)
  if (!prompt) {
    console.error(`Prompt not found: ${promptId}`)
    return null
  }

  return interpolatePrompt(prompt.systemPrompt, variables)
}

export function buildUserPrompt(
  promptId: string,
  variables: Record<string, string | number | boolean>
): string | null {
  const prompt = getPromptById(promptId)
  if (!prompt) {
    console.error(`Prompt not found: ${promptId}`)
    return null
  }

  return interpolatePrompt(prompt.userPromptTemplate, variables)
}

export function getPromptInfo(promptId: string): {
  name: string
  description: string
  version: string
  lastUpdated: string
  category: string
} | null {
  const prompt = getPromptById(promptId)
  if (!prompt) return null

  return {
    name: prompt.name,
    description: prompt.description,
    version: prompt.version,
    lastUpdated: prompt.lastUpdated,
    category: prompt.category
  }
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

export function validateOutput(
  output: string,
  promptId: string
): ValidationResult {
  const prompt = getPromptById(promptId)
  if (!prompt) {
    return {
      valid: false,
      errors: [`Prompt template not found: ${promptId}`],
      warnings: []
    }
  }

  const errors: string[] = []
  const warnings: string[] = []

  for (const required of prompt.outputFormat.required) {
    if (!output.includes(required)) {
      errors.push(`Missing required section: ${required}`)
    }
  }

  if (prompt.outputFormat.structure === 'markdown') {
    const markdownHeaders = output.match(/^#{1,3}\s+.+$/gm)
    if (!markdownHeaders || markdownHeaders.length === 0) {
      warnings.push('No markdown headers found')
    }
  }

  if (prompt.outputFormat.structure === 'json') {
    try {
      const jsonMatch = output.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        JSON.parse(jsonMatch[0])
      } else {
        errors.push('No JSON object found in output')
      }
    } catch {
      errors.push('Invalid JSON format')
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  }
}

export interface PromptMetrics {
  version: string
  lastUpdated: string
  qualityScore: number
  metrics: {
    accuracy: number
    relevance: number
    completeness: number
    formatAdherence: number
  }
}

export function getPromptMetrics(promptId: string): PromptMetrics | null {
  const prompt = getPromptById(promptId)
  if (!prompt || !prompt.metrics) return null

  const { metrics, version, lastUpdated } = prompt
  const qualityScore =
    metrics.accuracy * 0.3 +
    metrics.relevance * 0.25 +
    metrics.completeness * 0.25 +
    metrics.formatAdherence * 0.2

  return {
    version,
    lastUpdated,
    qualityScore: Math.round(qualityScore * 100) / 100,
    metrics: {
      accuracy: metrics.accuracy,
      relevance: metrics.relevance,
      completeness: metrics.completeness,
      formatAdherence: metrics.formatAdherence
    }
  }
}

export function generatePromptReport(): {
  totalPrompts: number
  categories: Record<string, number>
  averageQuality: number
  prompts: Array<{
    id: string
    name: string
    version: string
    qualityScore: number
  }>
} {
  const prompts = getAllPrompts()

  const categories: Record<string, number> = {}
  let totalQuality = 0
  let qualityCount = 0

  const promptInfos = prompts.map((p: PromptTemplate) => {
    categories[p.category] = (categories[p.category] || 0) + 1

    let qualityScore = 0
    if (p.metrics) {
      qualityScore =
        p.metrics.accuracy * 0.3 +
        p.metrics.relevance * 0.25 +
        p.metrics.completeness * 0.25 +
        p.metrics.formatAdherence * 0.2
      totalQuality += qualityScore
      qualityCount++
    }

    return {
      id: p.id,
      name: p.name,
      version: p.version,
      qualityScore: Math.round(qualityScore * 100) / 100
    }
  })

  return {
    totalPrompts: prompts.length,
    categories,
    averageQuality: qualityCount > 0 ? Math.round((totalQuality / qualityCount) * 100) / 100 : 0,
    prompts: promptInfos
  }
}

export function exportPromptTemplate(promptId: string): string | null {
  const prompt = getPromptById(promptId)
  if (!prompt) return null

  return `
# ${prompt.name}

## 基本信息
- ID: ${prompt.id}
- 版本: ${prompt.version}
- 更新日期: ${prompt.lastUpdated}
- 描述: ${prompt.description}

## System Prompt
\`\`\`
${prompt.systemPrompt}
\`\`\`

## User Prompt Template
\`\`\`
${prompt.userPromptTemplate}
\`\`\`

## 输出格式
### 必需章节
${prompt.outputFormat.required.map((s: string) => `- ${s}`).join('\n')}

### 可选章节
${prompt.outputFormat.optional.map((s: string) => `- ${s}`).join('\n')}

### 格式类型
${prompt.outputFormat.structure}

## 约束条件
${prompt.constraints.map((c: string) => `- ${c}`).join('\n')}

## 质量标准
${prompt.qualityCriteria.map((c: string) => `- ${c}`).join('\n')}

## 版本历史
${prompt.versionHistory
  .map(
    (v: { version: string; lastUpdated: string; author: string; changelog: string[] }) =>
      `### v${v.version} (${v.lastUpdated}) - ${v.author}\n${v.changelog.map((c: string) => `- ${c}`).join('\n')}`
  )
  .join('\n\n')}
`.trim()
}
