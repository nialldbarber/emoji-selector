import { StrictMode } from 'react'

import { render } from 'react-dom'
import { App } from 'src/components/App'
import 'src/styles/main.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
