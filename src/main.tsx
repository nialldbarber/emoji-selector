import { StrictMode } from 'react'

import { render } from 'react-dom'
import { App } from 'src/components/App'
import { ToastProvider } from 'src/context'
import 'src/styles/main.css'

render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>,
  document.getElementById('root')
)
