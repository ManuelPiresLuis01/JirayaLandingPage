import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './assets/app/app'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
