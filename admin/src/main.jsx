import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import './assets/css/table.css'
import './assets/css/fonts.css'
import './assets/css/color.css'
import './assets/css/button.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
