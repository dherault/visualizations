export type Position = 'top' | 'bottom' | 'left' | 'right'

export type Direction = -1 | 1

export type Visualization = {
  backgroundColor: string
  backgroundSplitColor: string | null
  backgroundSplitSeparatorColor: string | null
  backgroundSplitPositions: [Position, Position]
  backgroundSplitRatios: [number, number]
}

export type VisualizationState = {
  tick: number
}

export type XY = {
  x: number
  y: number
}
