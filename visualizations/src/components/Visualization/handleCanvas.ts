import type { Visualization, XY } from '~types'

import { createVisualizationState } from '~components/Visualization/createVisualization'

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

    const top: XY = {
      x: state.backgroundSplitTopAndBottom[0] * width,
      y: -splitWidth / 2,
    }
    const bottom: XY = {
      x: state.backgroundSplitTopAndBottom[1] * width,
      y: height + splitWidth / 2,
    }

    _.beginPath()
    _.moveTo(0, 0)
    _.lineTo(top.x, top.y)
    _.lineTo(bottom.x, bottom.y)
    _.lineTo(0, height)
    _.lineTo(0, 0)
    _.fillStyle = visualization.backgroundSplitColor
    _.fill()

    if (!state.backgroundSplitSeparatorColor) return

    _.beginPath()
    _.moveTo(top.x, top.y)
    _.lineTo(bottom.x, bottom.y)
    _.strokeStyle = state.backgroundSplitSeparatorColor
    _.lineWidth = splitWidth
    _.stroke()
  }

  function update() {
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
