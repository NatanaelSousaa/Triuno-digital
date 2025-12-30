'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Team from '@/components/team'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import { ScrollProgressBar } from '@/components/scroll-progress-bar'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Header scrolled={scrolled} />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
