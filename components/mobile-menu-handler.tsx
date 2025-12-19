'use client'

import { useEffect, useState } from 'react'

export const useMobileMenuHandler = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Close menu on ESC key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    // Close menu when clicking on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a[href^="#"]')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleAnchorClick)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [isOpen])

  return { isOpen, setIsOpen }
}
