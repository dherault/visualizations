import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Visualization from '~components/Visualization'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Visualization />
  </StrictMode>,
)
