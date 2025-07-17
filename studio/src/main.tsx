
import { StudioProvider, StudioLayout } from 'sanity'
import { createRoot } from 'react-dom/client'
import config from '../sanity.config'

const container = document.getElementById('sanity')!
const root = createRoot(container)

root.render(
  <StudioProvider config={config}>
    <StudioLayout />
  </StudioProvider>
)
