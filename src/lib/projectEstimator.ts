export interface ProjectData {
  budget: number;
  services: string[];
  timeline: string;
}

export interface ProjectScoreResult {
  score: number;
  priority: 'Low' | 'Standard' | 'High' | 'Enterprise';
  complexity: number;
}

const THRESHOLDS = {
  ENTERPRISE: 80,
  HIGH: 50,
  STANDARD: 10,
} as const;

const SCORE_MULTIPLIER = 0.01; // $1000 = 10 points
const COMPLEXITY_PER_SERVICE = 15;

export function calculateProjectScore(data: ProjectData): ProjectScoreResult {
  const { budget, services } = data;
  
  if (budget === 0 && services.length === 0) {
    return { score: 0, priority: 'Low', complexity: 0 };
  }

  const complexity = services.length * COMPLEXITY_PER_SERVICE;
  
  // Calculate score: budget * 0.01 (e.g. 1000 * 0.01 = 10)
  // We divide by 1 here as multiplier is already 0.01
  const rawScore = budget * SCORE_MULTIPLIER;
  const score = Math.min(Math.max(rawScore, 0), 100);

  const priority = 
    score >= THRESHOLDS.ENTERPRISE ? 'Enterprise' :
    score >= THRESHOLDS.HIGH ? 'High' :
    score >= THRESHOLDS.STANDARD ? 'Standard' : 'Low';

  return { score, priority, complexity };
}
