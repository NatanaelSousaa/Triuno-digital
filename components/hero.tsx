'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      // Atualiza o gradiente diretamente
      containerRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(238, 11, 59, 0.2) 0%, transparent 50%)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div
        ref={containerRef}
        className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(238, 11, 59, 0.2) 0%, transparent 50%)',
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(238, 11, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(238, 11, 59, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center"> {/* ⬅️ MUDEI AQUI */}
          {/* Left Content - AGORA CENTRALIZADO */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border w-fit mx-auto">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Impulsionando Vendas Digitais</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="text-primary">Tráfego, Consultoria</span> e Soluções Web
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto text-pretty">
              Transformamos visitantes em clientes. Com estratégias de tráfego qualificado, consultoria especializada e plataformas digitais de alto desempenho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30">
                Aumentar Vendas
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-card hover:bg-card/90 text-foreground border border-border px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Ver Cases
              </button>
            </div>

            <div className="flex gap-8 pt-4 justify-center">
              <div>
                <div className="text-3xl font-bold text-primary">+4</div>
                <p className="text-sm text-foreground/60">Anos em experiência em tráfego local e direto</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">+3</div>
                <p className="text-sm text-foreground/60">Anos em desenvolvimento Web e Mobile</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">7</div>
                <p className="text-sm text-foreground/60">dígitos de faturamento em dólar gerados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}