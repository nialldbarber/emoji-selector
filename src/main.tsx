import { StrictMode } from 'react'

import { render } from 'react-dom'
import { App } from 'src/components/App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
