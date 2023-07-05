import mermaid from 'mermaid'
import { useEffect } from 'react'

export const MermaidChart = ({ chartDefinition }: { chartDefinition: string }) => {
  mermaid.mermaidAPI.initialize({
    startOnLoad: true,
    securityLevel: 'loose',
    theme: 'forest',
    logLevel: 5
    // themeVariables: {
    //   primaryColor: '#0072F5',
    //   primaryTextColor: '#fff',
    //   primaryBorderColor: '#7C0000',
    //   lineColor: '#F8B229',
    //   secondaryColor: '#006100',
    //   tertiaryColor: '#fff'
    // }
  })

  useEffect(() => {
    mermaid.contentLoaded()
  }, [])

  if (!chartDefinition) return null

  return (
    <>
      <div
        className='mermaid'
        style={{ width: '100%' }}
      >
        {chartDefinition}
      </div>
    </>)
}
