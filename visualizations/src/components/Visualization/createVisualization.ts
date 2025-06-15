import colors from 'data/colors'

import type { Visualization, VisualizationState } from '~types'

import bound from '~utils/bound'
import pickRandom from '~utils/pickRandom'

export function createVisualization(): Visualization {
  return {
    backgroundColor: pickRandom(colors),
    hasBackgroudnSplit: true,
    backgroundSplitColor: pickRandom(colors),
    hasBackgroundSplitSeparator: true,
    backgroundSplitSeparatorColor: pickRandom(colors),
  }
}

export function createVisualizationState(): VisualizationState {
  return {
    backgroundSplitRatios: [bound(Math.random(), 0.2, 0.8), bound(Math.random(), 0.3, 0.8)],
  }
}
