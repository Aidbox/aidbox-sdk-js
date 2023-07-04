import mermaid from 'mermaid'
import { useEffect } from 'react'

export const MermaidChart = ({ chartDefinition }: { chartDefinition: string }) => {
  mermaid.mermaidAPI.initialize({
    startOnLoad: true,
    securityLevel: 'loose',
    theme: 'forest',
    logLevel: 5
  })

  useEffect(() => {
    mermaid.contentLoaded()
  }, [])

  if (!chartDefinition) return null

  return (
    <div
      className='mermaid'
    >
      {chartDefinition}
    </div>)
}
