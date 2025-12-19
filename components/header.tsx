'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Time', href: '#team' },
    { label: 'Contato', href: '#cta' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md overflow-hidden flex items-center justify-center bg-white">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="400" fill="#EE0B3B"/>
              <path d="M90 90 L90 310 L210 310 Q270 310 270 250 L270 160 L190 160 L270 90 L410 90 Q410 250 270 310 L410 310 L410 410 L90 410 Z" fill="white"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground hidden md:inline">Triuno</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/70 hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
            Começar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium w-full mt-2">
              Começar
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
