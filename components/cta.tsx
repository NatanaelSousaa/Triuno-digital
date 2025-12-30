'use client'

import { ArrowRight, Zap } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="cta" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="glow-effect bg-card border border-border rounded-2xl p-8 md:p-16 text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-medium">Vamos Trabalhar Juntos</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Sua <span className="gradient-text">Visão em Realidade</span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Pronto para levar seu negócio para o próximo nível? Vamos conversar sobre como nossa expertise pode impulsionar seu sucesso digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 whitespace-nowrap"
                >
                  {submitted ? '✓ Enviado' : 'Fale Conosco'}
                  {!submitted && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary mb-2">+500</p>
                <p className="text-foreground/60 text-sm">Horas de Desenvolvimento</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent mb-2">98%</p>
                <p className="text-foreground/60 text-sm">Satisfação dos Clientes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary mb-2">24/7</p>
                <p className="text-foreground/60 text-sm">Suporte Técnico</p>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Outras Formas de Nos Contatar</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+5585997030397" className="px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 font-medium">
                📱 (85) 99703-0397
              </a>
              <a href="mailto:contato@triuno.com.br" className="px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 font-medium">
                ✉️ contato@triuno.com.br
              </a>
              <a href="https://wa.me/5585997030397" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 font-medium">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
