import colors from 'data/colors'

import type { Visualization } from '~types'

function createVisualization(): Visualization {
  return {
    backgroundColor: pickRamdom(colors),
  }
}

function pickRamdom<T>(array: readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export default createVisualization
