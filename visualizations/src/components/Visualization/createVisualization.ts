import colors from 'data/colors'

import type { Visualization, VisualizationState } from '~types'

import pickRandom from '~utils/pickRandom'

export function createVisualization(): Visualization {
  return {
    backgroundColor: pickRandom(colors),
    backgroundSplitColor: pickRandom(colors),
  }
}

export function createVisualizationState(): VisualizationState {
  return {
    backgroundSplitTopAndBottom: [Math.random(), Math.random()],
  }
}
