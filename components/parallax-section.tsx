'use client'

import { useEffect, useRef } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
}

export function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollPosition = window.scrollY
      const elementOffset = ref.current.offsetTop
      const distance = scrollPosition - elementOffset

      if (Math.abs(distance) < window.innerHeight) {
        ref.current.style.transform = `translateY(${distance * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
