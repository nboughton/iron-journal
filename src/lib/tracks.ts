import { IDiff, IMenace, IProgressTrack } from 'src/components/models'

export const Difficulty: { [index: number]: IDiff } = {
  1: <IDiff>{ label: 'Troublesome', mark: 3, harm: 1 },
  2: <IDiff>{ label: 'Dangerous', mark: 2, harm: 2 },
  3: <IDiff>{ label: 'Formidable', mark: 1, harm: 3 },
  4: <IDiff>{ label: 'Extreme', mark: 0.5, harm: 4 },
  5: <IDiff>{ label: 'Epic', mark: 0.25, harm: 5 }
}

export function NewMenace (): IMenace {
  return {
    name: '',
    boxes: Array(10).fill(false) as boolean[]
  }
}

export function NewProgressTrack (): IProgressTrack {
  return {
    name: '',
    difficulty: 1,
    boxes: Array(10).fill(0) as number[],
    showMenace: false
  }
}