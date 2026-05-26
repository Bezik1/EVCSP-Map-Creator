import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import MapSettingsProvider from './contexts/MapSettingsProvider.tsx'
import MapsProvider from './contexts/MapsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MapsProvider>
        <MapSettingsProvider>
          <App />
        </MapSettingsProvider>
      </MapsProvider>
    </BrowserRouter>
  </StrictMode>,
)
