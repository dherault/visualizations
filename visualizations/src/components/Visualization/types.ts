export type Position = 'top' | 'bottom' | 'left' | 'right'

export type Direction = -1 | 1

export type Visualization = {
  backgroundColor: string
  backgroundSplitColor: string | null
  backgroundSplitSeparatorColor: string | null
  backgroundSplitPositions: [Position, Position]
  isBackgroundSplitMoving: boolean
}

export type VisualizationState = {
  tick: number
  animationSpeed: number
  backgroundSplitRatios: [number, number]
  backgroundSplitDirection: Direction
}

export type XY = {
  x: number
  y: number
}
