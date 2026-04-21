function calcBTarget(currentScore: number, targetScore: number, fullScore: number, confidence: number): number {
  const gap = targetScore - currentScore
  const scoreRatio = currentScore / fullScore
  const diminishingFactor = 1 - scoreRatio * 0.5
  const improvement = gap * (confidence / 10) * diminishingFactor
  return Math.round((currentScore + improvement) * 10) / 10
}

function getTrend(current: number, last: number): 'up' | 'stable' | 'down' {
  if (current - last >= 3) return 'up'
  if (last - current >= 3) return 'down'
  return 'stable'
}

export { calcBTarget, getTrend }
