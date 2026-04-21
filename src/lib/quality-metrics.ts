export interface QualityMetrics {
  timestamp: string
  promptId: string
  metrics: {
    accuracy: number
    relevance: number
    completeness: number
    formatAdherence: number
    coherence: number
    concreteness: number
    ageAppropriateness: number
  }
  overallScore: number
  issues: string[]
  suggestions: string[]
}

export interface QualityEvaluationCriteria {
  accuracy: {
    weight: number
    description: string
    checkPoints: string[]
  }
  relevance: {
    weight: number
    description: string
    checkPoints: string[]
  }
  completeness: {
    weight: number
    description: string
    checkPoints: string[]
  }
  formatAdherence: {
    weight: number
    description: string
    checkPoints: string[]
  }
  coherence: {
    weight: number
    description: string
    checkPoints: string[]
  }
  concreteness: {
    weight: number
    description: string
    checkPoints: string[]
  }
  ageAppropriateness: {
    weight: number
    description: string
    checkPoints: string[]
  }
}

export const QUALITY_EVALUATION_CRITERIA: QualityEvaluationCriteria = {
  accuracy: {
    weight: 0.20,
    description: '准确度 - 输出的知识内容是否符合学科标准',
    checkPoints: [
      '知识点定义是否准确',
      '公式应用是否正确',
      '数据计算是否无误',
      '概念解释是否规范'
    ]
  },
  relevance: {
    weight: 0.18,
    description: '相关性 - 输出内容是否紧密围绕用户问题和上下文',
    checkPoints: [
      '是否针对用户的问题',
      '是否使用了提供的上下文',
      '建议是否与学生情况相关',
      '是否有无关内容'
    ]
  },
  completeness: {
    weight: 0.15,
    description: '完整性 - 输出是否包含所有必要的信息和步骤',
    checkPoints: [
      '是否包含所有必需章节',
      '每个章节是否有实质内容',
      '步骤是否完整',
      '是否有遗漏的重要信息'
    ]
  },
  formatAdherence: {
    weight: 0.15,
    description: '格式遵循度 - 输出是否符合预定义的格式要求',
    checkPoints: [
      '是否使用了正确的结构',
      '表格格式是否规范',
      '标题命名是否符合要求',
      '是否遵循了约束条件'
    ]
  },
  coherence: {
    weight: 0.12,
    description: '连贯性 - 输出内容逻辑是否清晰、前后一致',
    checkPoints: [
      '逻辑是否清晰',
      '各部分是否相互关联',
      '过渡是否自然',
      '结构是否合理'
    ]
  },
  concreteness: {
    weight: 0.12,
    description: '具体性 - 输出是否包含具体可执行的建议而非泛泛而谈',
    checkPoints: [
      '建议是否具体可执行',
      '是否有明确的时间框架',
      '是否有可衡量的目标',
      '是否避免了空泛的建议'
    ]
  },
  ageAppropriateness: {
    weight: 0.08,
    description: '年级适配性 - 输出的语言和内容难度是否适合目标学生',
    checkPoints: [
      '语言难度是否适合',
      '概念解释是否用学生能理解的方式',
      '任务量是否适合',
      '例子是否贴近学生生活'
    ]
  }
}

export function calculateOverallScore(metrics: Omit<QualityMetrics, 'overallScore'>['metrics']): number {
  const weights = QUALITY_EVALUATION_CRITERIA

  const score =
    metrics.accuracy * weights.accuracy.weight +
    metrics.relevance * weights.relevance.weight +
    metrics.completeness * weights.completeness.weight +
    metrics.formatAdherence * weights.formatAdherence.weight +
    metrics.coherence * weights.coherence.weight +
    metrics.concreteness * weights.concreteness.weight +
    metrics.ageAppropriateness * weights.ageAppropriateness.weight

  return Math.round(score * 100) / 100
}

export function createEmptyMetrics(promptId: string): QualityMetrics {
  return {
    timestamp: new Date().toISOString(),
    promptId,
    metrics: {
      accuracy: 0,
      relevance: 0,
      completeness: 0,
      formatAdherence: 0,
      coherence: 0,
      concreteness: 0,
      ageAppropriateness: 0
    },
    overallScore: 0,
    issues: [],
    suggestions: []
  }
}

export function evaluateOutputQuality(
  promptId: string,
  output: string,
  criteria?: Partial<Omit<QualityMetrics, 'overallScore'>['metrics']>
): QualityMetrics {
  const metrics = createEmptyMetrics(promptId)
  const issues: string[] = []
  const suggestions: string[] = []

  const hasHeaders = /^#{1,3}\s+.+$/gm.test(output)
  const hasTables = /\|.*\|.*\|/gm.test(output)
  const paragraphCount = output.split('\n\n').length

  const baseMetrics = {
    accuracy: criteria?.accuracy ?? 0.85,
    relevance: criteria?.relevance ?? 0.85,
    completeness: criteria?.completeness ?? (hasHeaders && paragraphCount > 3 ? 0.80 : 0.60),
    formatAdherence: criteria?.formatAdherence ?? (hasTables || hasHeaders ? 0.80 : 0.50),
    coherence: criteria?.coherence ?? 0.80,
    concreteness: criteria?.concreteness ?? 0.75,
    ageAppropriateness: criteria?.ageAppropriateness ?? 0.85
  }

  if (!hasHeaders && !hasTables) {
    issues.push('输出格式不符合规范，缺少结构化标记')
    suggestions.push('使用markdown标题和表格来组织内容')
    baseMetrics.formatAdherence = Math.max(0, baseMetrics.formatAdherence - 0.3)
  }

  if (paragraphCount < 3) {
    issues.push('输出内容过于简短，可能不够完整')
    suggestions.push('确保每个章节都有充分的说明')
    baseMetrics.completeness = Math.max(0, baseMetrics.completeness - 0.2)
  }

  metrics.metrics = baseMetrics
  metrics.overallScore = calculateOverallScore(baseMetrics)
  metrics.issues = issues
  metrics.suggestions = suggestions

  return metrics
}

export interface QualityBenchmark {
  excellent: number
  good: number
  acceptable: number
  needsImprovement: number
}

export const QUALITY_BENCHMARKS: QualityBenchmark = {
  excellent: 0.90,
  good: 0.80,
  acceptable: 0.70,
  needsImprovement: 0.50
}

export function getQualityLevel(score: number): {
  level: 'excellent' | 'good' | 'acceptable' | 'needsImprovement'
  color: string
  description: string
} {
  if (score >= QUALITY_BENCHMARKS.excellent) {
    return {
      level: 'excellent',
      color: 'emerald',
      description: '优秀 - 输出质量达到最高标准'
    }
  }
  if (score >= QUALITY_BENCHMARKS.good) {
    return {
      level: 'good',
      color: 'blue',
      description: '良好 - 输出质量符合要求'
    }
  }
  if (score >= QUALITY_BENCHMARKS.acceptable) {
    return {
      level: 'acceptable',
      color: 'amber',
      description: '可接受 - 输出质量基本符合要求，有改进空间'
    }
  }
  return {
    level: 'needsImprovement',
    color: 'red',
    description: '需要改进 - 输出质量未达到最低标准'
  }
}

export interface PromptQualityReport {
  promptId: string
  generatedAt: string
  totalEvaluations: number
  averageScores: {
    overall: number
    accuracy: number
    relevance: number
    completeness: number
    formatAdherence: number
    coherence: number
    concreteness: number
    ageAppropriateness: number
  }
  qualityDistribution: {
    excellent: number
    good: number
    acceptable: number
    needsImprovement: number
  }
  commonIssues: Array<{
    issue: string
    frequency: number
  }>
  recommendations: string[]
}

export class QualityMetricsCollector {
  private metrics: QualityMetrics[] = []

  addMetric(metric: QualityMetrics): void {
    this.metrics.push(metric)
  }

  getMetrics(promptId?: string): QualityMetrics[] {
    if (promptId) {
      return this.metrics.filter(m => m.promptId === promptId)
    }
    return this.metrics
  }

  generateReport(promptId?: string): PromptQualityReport | null {
    const filteredMetrics = promptId
      ? this.metrics.filter(m => m.promptId === promptId)
      : this.metrics

    if (filteredMetrics.length === 0) return null

    const totalEvaluations = filteredMetrics.length

    const averageScores = {
      overall: 0,
      accuracy: 0,
      relevance: 0,
      completeness: 0,
      formatAdherence: 0,
      coherence: 0,
      concreteness: 0,
      ageAppropriateness: 0
    }

    for (const metric of filteredMetrics) {
      averageScores.overall += metric.overallScore
      averageScores.accuracy += metric.metrics.accuracy
      averageScores.relevance += metric.metrics.relevance
      averageScores.completeness += metric.metrics.completeness
      averageScores.formatAdherence += metric.metrics.formatAdherence
      averageScores.coherence += metric.metrics.coherence
      averageScores.concreteness += metric.metrics.concreteness
      averageScores.ageAppropriateness += metric.metrics.ageAppropriateness
    }

    averageScores.overall = Math.round((averageScores.overall / totalEvaluations) * 100) / 100
    averageScores.accuracy = Math.round((averageScores.accuracy / totalEvaluations) * 100) / 100
    averageScores.relevance = Math.round((averageScores.relevance / totalEvaluations) * 100) / 100
    averageScores.completeness = Math.round((averageScores.completeness / totalEvaluations) * 100) / 100
    averageScores.formatAdherence = Math.round((averageScores.formatAdherence / totalEvaluations) * 100) / 100
    averageScores.coherence = Math.round((averageScores.coherence / totalEvaluations) * 100) / 100
    averageScores.concreteness = Math.round((averageScores.concreteness / totalEvaluations) * 100) / 100
    averageScores.ageAppropriateness = Math.round((averageScores.ageAppropriateness / totalEvaluations) * 100) / 100

    const qualityDistribution = {
      excellent: 0,
      good: 0,
      acceptable: 0,
      needsImprovement: 0
    }

    for (const metric of filteredMetrics) {
      const level = getQualityLevel(metric.overallScore).level
      qualityDistribution[level]++
    }

    const issueCounts: Record<string, number> = {}
    for (const metric of filteredMetrics) {
      for (const issue of metric.issues) {
        issueCounts[issue] = (issueCounts[issue] || 0) + 1
      }
    }

    const commonIssues = Object.entries(issueCounts)
      .map(([issue, frequency]) => ({ issue, frequency }))
      .sort((a, b) => b.frequency - a.frequency)
      .slice(0, 5)

    const recommendations: string[] = []
    if (averageScores.formatAdherence < 0.80) {
      recommendations.push('需要加强输出格式规范，确保使用markdown标题和表格')
    }
    if (averageScores.completeness < 0.80) {
      recommendations.push('需要确保输出内容完整，包含所有必需章节')
    }
    if (averageScores.concreteness < 0.80) {
      recommendations.push('需要增加具体可执行的建议，避免空泛表述')
    }

    return {
      promptId: promptId || 'all',
      generatedAt: new Date().toISOString(),
      totalEvaluations,
      averageScores,
      qualityDistribution,
      commonIssues,
      recommendations
    }
  }

  clear(): void {
    this.metrics = []
  }
}

export const globalMetricsCollector = new QualityMetricsCollector()
