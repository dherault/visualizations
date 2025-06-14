import { createVisualization } from 'components/Visualization/createVisualization'
import { useEffect, useRef, useState } from 'react'
import handleCanvas from 'components/Visualization/handleCanvas'

import { type Visualization as VisualizationType } from '~types'

import useCanvasWidth from '~hooks/common/useCanvasWidth'

function Visualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visualization] = useState<VisualizationType>(createVisualization())
  const width = useCanvasWidth()

  useEffect(() => {
    if (!canvasRef.current) return

    return handleCanvas(canvasRef.current, visualization)
  }, [visualization, width])

  return (
    <canvas
      ref={canvasRef}
      className="w-screen h-screen"
    />
  )
}

export default Visualization
