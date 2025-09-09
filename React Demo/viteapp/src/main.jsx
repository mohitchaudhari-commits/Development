import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Example from './example.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Example/>
  </StrictMode>,
)
