import mermaid from 'mermaid'
import { useEffect, useRef, useState } from 'react'

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    fontFamily: 'ui-mono, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    primaryColor: '#0ea5e9',
    primaryTextColor: '#f9f9f9',
    primaryBorderColor: '#0ea5e9',
    lineColor: '#52525b',
    secondaryColor: '#141414',
    tertiaryColor: '#0a0a0a',
    mainBkg: '#0a0a0a',
    nodeBorder: '#222222',
    clusterBkg: '#141414',
    clusterBorder: '#222222'
  }
})

export function MermaidChart({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [svgContent, setSvgContent] = useState<string>('')

  useEffect(() => {
    const renderChart = async () => {
      try {
        const id = `mermaid-chart-${Math.random().toString(36).substr(2, 9)}`
        const { svg } = await mermaid.render(id, chart)
        setSvgContent(svg)
      } catch (error) {
        console.error('Failed to render mermaid chart:', error)
      }
    }
    if (chart) {
      renderChart()
    }
  }, [chart])

  return (
    <div 
      ref={ref} 
      className="w-full flex justify-center p-8 overflow-x-auto min-h-[300px] items-center mermaid-container"
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  )
}
