'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return

    hasAnimated.current = true
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      const value = Math.floor(progress * end)

      if (progress < 1) {
        setCount(value)
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
