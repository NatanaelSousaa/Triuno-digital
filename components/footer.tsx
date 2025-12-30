'use client'

import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Produto': [
      { label: 'Serviços', href: '#services' },
      { label: 'Portfólio', href: '#portfolio' },
      { label: 'Preços', href: '#' },
    ],
    'Empresa': [
      { label: 'Sobre', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Carreiras', href: '#' },
    ],
    'Legal': [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  }

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-lg">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'linear-gradient(rgba(101, 143, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(101, 143, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-white overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="400" fill="#EE0B3B"/>
                  <path d="M90 90 L90 310 L210 310 Q270 310 270 250 L270 160 L190 160 L270 90 L410 90 Q410 250 270 310 L410 310 L410 410 L90 410 Z" fill="white"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Triuno Digital</span>
            </div>
            <p className="text-foreground/60 leading-relaxed max-w-sm">
              Agência especializada em tráfego pago, consultoria digital e desenvolvimento de soluções web de alto desempenho que convertem.
            </p>
            <div className="flex gap-4">
             
              <a href="https://www.instagram.com/triuno.digital/" className="w-10 h-10 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Triuno Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Status
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Suporte
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
