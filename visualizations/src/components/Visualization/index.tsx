import { createVisualization } from 'components/Visualization/createVisualization'
import { useEffect, useRef, useState } from 'react'
import handleCanvas from 'components/Visualization/handleCanvas'

import { type Visualization as VisualizationType } from '~types'

import VisualizationConfigurator from '~components/Visualization/VisualizationConfigurator'

import useCanvasWidth from '~hooks/common/useCanvasWidth'

function Visualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visualization, setVisualization] = useState<VisualizationType>(createVisualization())
  const width = useCanvasWidth()

  useEffect(() => {
    if (!canvasRef.current) return

    return handleCanvas(canvasRef.current, visualization)
  }, [visualization, width])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="w-screen h-screen"
      />
      <VisualizationConfigurator
        visualization={visualization}
        setVisualization={setVisualization}
      />
    </>
  )
}

export default Visualization
