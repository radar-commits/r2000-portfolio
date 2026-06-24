import { preloadModule } from 'react-dom'
import StudioClientWrapper from './StudioClientWrapper'

export { metadata, viewport } from 'next-sanity/studio'
export const dynamic = 'force-dynamic'

const bridgeScript = 'https://core.sanity-cdn.com/bridge.js'

export default function StudioPage() {
  preloadModule(bridgeScript, { as: 'script' })
  return (
    <>
      <script src={bridgeScript} async type="module" data-sanity-core />
      <StudioClientWrapper />
    </>
  )
}
