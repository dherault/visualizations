import type { Visualization, XY } from '~types'

import { createVisualizationState } from '~components/Visualization/createVisualization'
import { MAX_SPLIT_RATIO, MAX_TICK, MIN_SPLIT_RATIO } from '~components/Visualization/constants'

function handleCanvas(canvas: HTMLCanvasElement, visualization: Visualization) {
  const _ = canvas.getContext('2d')!

  const dpr = window.devicePixelRatio || 1

  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr

  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`

  const width = window.innerWidth
  const height = window.innerHeight

  _.scale(dpr, dpr)

  const state = createVisualizationState()

  function draw() {
    _.fillStyle = visualization.backgroundColor
    _.fillRect(0, 0, width, height)

    drawBackgroundSplit()
  }

  function drawBackgroundSplit() {
    if (!visualization.backgroundSplitColor) return

    const splitWidth = 8

    const start: XY = { x: 0, y: 0 }
    const end: XY = { x: 0, y: 0 }

    if (visualization.backgroundSplitPositions[0] === 'top') {
      start.x = width * state.backgroundSplitRatios[0]
      start.y = -splitWidth / 2
    }
    if (visualization.backgroundSplitPositions[0] === 'bottom') {
      start.x = width * state.backgroundSplitRatios[0]
      start.y = height + splitWidth / 2
    }
    if (visualization.backgroundSplitPositions[0] === 'left') {
      start.x = -splitWidth / 2
      start.y = height * state.backgroundSplitRatios[0]
    }
    if (visualization.backgroundSplitPositions[0] === 'right') {
      start.x = width + splitWidth / 2
      start.y = height * state.backgroundSplitRatios[0]
    }
    if (visualization.backgroundSplitPositions[1] === 'top') {
      end.x = width * state.backgroundSplitRatios[1]
      end.y = -splitWidth / 2
    }
    if (visualization.backgroundSplitPositions[1] === 'bottom') {
      end.x = width * state.backgroundSplitRatios[1]
      end.y = height + splitWidth / 2
    }
    if (visualization.backgroundSplitPositions[1] === 'left') {
      end.x = -splitWidth / 2
      end.y = height * state.backgroundSplitRatios[1]
    }
    if (visualization.backgroundSplitPositions[1] === 'right') {
      end.x = width + splitWidth / 2
      end.y = height * state.backgroundSplitRatios[1]
    }

    _.fillStyle = visualization.backgroundSplitColor
    _.beginPath()
    if (visualization.backgroundSplitPositions[0] === 'top') _.moveTo(0, 0)
    if (visualization.backgroundSplitPositions[0] === 'bottom') _.moveTo(0, height)
    if (visualization.backgroundSplitPositions[0] === 'left') _.moveTo(0, 0)
    if (visualization.backgroundSplitPositions[0] === 'right') _.moveTo(width, 0)
    _.lineTo(start.x, start.y)
    _.lineTo(end.x, end.y)
    if (visualization.backgroundSplitPositions[1] === 'top') {
      if (visualization.backgroundSplitPositions[0] === 'bottom') _.lineTo(0, 0)
    }
    if (visualization.backgroundSplitPositions[1] === 'bottom') {
      if (visualization.backgroundSplitPositions[0] === 'top') _.lineTo(0, height)
      if (visualization.backgroundSplitPositions[0] === 'left') _.lineTo(0, height)
      if (visualization.backgroundSplitPositions[0] === 'right') _.lineTo(width, height)
    }
    if (visualization.backgroundSplitPositions[1] === 'left') {
      if (visualization.backgroundSplitPositions[0] === 'right') _.lineTo(0, 0)
    }
    if (visualization.backgroundSplitPositions[1] === 'right') {
      if (visualization.backgroundSplitPositions[0] === 'top') _.lineTo(width, 0)
      if (visualization.backgroundSplitPositions[0] === 'bottom') _.lineTo(width, height)
      if (visualization.backgroundSplitPositions[0] === 'left') _.lineTo(width, 0)
    }
    _.fill()

    if (!visualization.backgroundSplitSeparatorColor) return

    _.beginPath()
    _.moveTo(start.x, start.y)
    _.lineTo(end.x, end.y)
    _.strokeStyle = visualization.backgroundSplitSeparatorColor
    _.lineWidth = splitWidth
    _.stroke()
  }

  function update() {
    state.tick = (state.tick + state.animationSpeed) % MAX_TICK

    if (visualization.isBackgroundSplitMoving) {
      state.backgroundSplitRatios[0] += state.backgroundSplitDirections[0] * 0.001
      state.backgroundSplitRatios[1] += state.backgroundSplitDirections[1] * 0.001

      if (state.backgroundSplitRatios[0] > MAX_SPLIT_RATIO || state.backgroundSplitRatios[0] < MIN_SPLIT_RATIO) state.backgroundSplitDirections[0] *= -1
      if (state.backgroundSplitRatios[1] > MAX_SPLIT_RATIO || state.backgroundSplitRatios[1] < MIN_SPLIT_RATIO) state.backgroundSplitDirections[1] *= -1
    }
  }

  let stopped = false

  function step() {
    update()
    draw()

    if (stopped) return

    requestAnimationFrame(step)
  }

  requestAnimationFrame(step)

  return () => {
    stopped = true
  }
}

export default handleCanvas
