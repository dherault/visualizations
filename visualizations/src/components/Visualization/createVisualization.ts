import colors from 'data/colors'

import type { Position, Visualization, VisualizationState } from '~components/Visualization/types'
import { MAX_SPLIT_RATIO, MIN_SPLIT_RATIO } from '~components/Visualization/constants'

import bound from '~utils/bound'
import { chance, pickRandom } from '~utils/random'

const positions: Position[] = ['top', 'bottom', 'left', 'right']

export function createRandomVisualization(): Visualization {
  const position1 = pickRandom(positions)
  const position2 = pickRandom(positions.filter(pos => pos !== position1))

  return {
    backgroundColor: pickRandom(colors),
    backgroundSplitColor: chance(1) ? pickRandom(colors) : null,
    backgroundSplitSeparatorColor: chance(0.5) ? pickRandom(colors) : null,
    backgroundSplitPositions: [position1, position2],
    backgroundSplitRatios: [bound(Math.random(), MIN_SPLIT_RATIO, MAX_SPLIT_RATIO), bound(Math.random(), MIN_SPLIT_RATIO, MAX_SPLIT_RATIO)],
  }
}

export function createVisualizationState(): VisualizationState {
  return {
    tick: 0,
  }
}
