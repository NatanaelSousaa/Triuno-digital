'use client'

import { Code2, Smartphone, Palette, Zap, Shield, BarChart3, TrendingUp, Globe, Sparkles, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Estratégia de Tráfego',
    description: 'Campanhas Google Ads, Facebook Ads e tráfego qualificado para converter visitantes em clientes.'
  },
  {
    icon: Lightbulb,
    title: 'Consultoria Digital',
    description: 'Análise completa do seu funil de vendas, optimizações e estratégias personalizadas de crescimento.'
  },
  {
    icon: Globe,
    title: 'Sites & Landing Pages',
    description: 'Plataformas high-converting, responsivas e otimizadas para SEO e geração de leads.'
  },
  {
    icon: Smartphone,
    title: 'Mini Apps',
    description: 'Aplicações web progressivas e mini apps para engajar clientes e aumentar conversões.'
  },
  {
    icon: Sparkles,
    title: 'Design & UX',
    description: 'Interfaces intuitivas e bonitas que guiam o usuário para ação, aumentando taxas de conversão.'
  },
  {
    icon: Zap,
    title: 'Otimização & Performance',
    description: 'Velocidade extrema, Core Web Vitals perfeitos e análise completa de métricas de conversão.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'linear-gradient(rgba(238, 11, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(238, 11, 59, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Soluções Completas para <span className="gradient-text">Crescimento Digital</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Do tráfego qualificado à consultoria estratégica, construímos a jornada digital que converte.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group glow-effect bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:translate-y-[-8px]"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
