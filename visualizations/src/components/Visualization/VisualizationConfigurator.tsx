import { type Dispatch, type SetStateAction, useCallback } from 'react'

import type { Visualization } from '~types'

import { Button } from '~components/ui/Button'
import { createRandomVisualization } from '~components/Visualization/createVisualization'

type Props = {
  visualization: Visualization;
  setVisualization: Dispatch<SetStateAction<Visualization>>;
};

function VisualizationConfigurator({ visualization, setVisualization }: Props) {
  const handleRefresh = useCallback(() => {
    setVisualization(createRandomVisualization())
  }, [setVisualization])

  console.log('visualization', visualization.backgroundSplitPositions)

  return (
    <div className="p-2 fixed top-0 right-0">
      <Button
        onClick={handleRefresh}
        variant="default"
      >
        Refresh
      </Button>
    </div>
  )
}

export default VisualizationConfigurator
