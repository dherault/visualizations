import colors from 'data/colors'

import type { Position, Visualization, VisualizationState } from '~types'

import bound from '~utils/bound'
import { chance, pickRandom } from '~utils/random'

const positions: Position[] = ['top', 'bottom', 'left', 'right']

export function createRandomVisualization(): Visualization {
  const position1 = pickRandom(positions)
  const position2 = pickRandom(positions.filter(pos => pos !== position1))

  return {
    backgroundColor: pickRandom(colors),
    backgroundSplitColor: chance(0.5) ? pickRandom(colors) : null,
    backgroundSplitSeparatorColor: chance(0.5) ? pickRandom(colors) : null,
    backgroundSplitPositions: [position1, position2],
  }
}

export function createVisualizationState(): VisualizationState {
  return {
    backgroundSplitRatios: [bound(Math.random(), 0.2, 0.8), bound(Math.random(), 0.2, 0.8)],
  }
}
