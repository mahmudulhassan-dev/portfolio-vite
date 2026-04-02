import { describe, it, expect } from 'vitest'
import { calculateProjectScore, type ProjectData } from './projectEstimator'

describe('calculateProjectScore', () => {
  it('should return a high priority score for enterprise-level budgets', () => {
    const data: ProjectData = {
      budget: 20000,
      services: ['AI Automation', 'Custom SaaS'],
      timeline: '8 weeks'
    }
    const result = calculateProjectScore(data)
    expect(result.score).toBeGreaterThan(80)
    expect(result.priority).toBe('Enterprise')
  })

  it('should return a low complexity score for small projects', () => {
    const data: ProjectData = {
      budget: 1000,
      services: ['UI/UX Design'],
      timeline: '2 weeks'
    }
    const result = calculateProjectScore(data)
    expect(result.score).toBeLessThan(40)
    expect(result.priority).toBe('Standard')
  })

  it('should handle zero or empty inputs gracefully', () => {
    const data: ProjectData = {
      budget: 0,
      services: [],
      timeline: ''
    }
    const result = calculateProjectScore(data)
    expect(result.score).toBe(0)
    expect(result.priority).toBe('Low')
  })

  it('should increase complexity score based on number of services', () => {
    const lowComplexity = calculateProjectScore({ budget: 5000, services: ['Web Apps'], timeline: '4 weeks' })
    const highComplexity = calculateProjectScore({ budget: 5000, services: ['AI Automation', 'Custom SaaS', 'API Integration'], timeline: '4 weeks' })
    
    expect(highComplexity.complexity).toBeGreaterThan(lowComplexity.complexity)
  })
})
