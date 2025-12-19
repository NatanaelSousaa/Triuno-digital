import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute('href')

      if (href?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])
}
