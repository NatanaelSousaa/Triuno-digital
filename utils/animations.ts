export const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3)
}

export const animateValue = (
  element: HTMLElement,
  startValue: number,
  endValue: number,
  duration: number,
  easing = easeInOutQuad
) => {
  let startTime: number | null = null

  const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const value = startValue + (endValue - startValue) * easing(progress)

    element.textContent = Math.round(value).toString()

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

export const addClassOnScroll = (selector: string, className: string, offset = 0) => {
  const elements = document.querySelectorAll(selector)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
        }
      })
    },
    { rootMargin: `${offset}px` }
  )

  elements.forEach((el) => observer.observe(el))
}
