'use client'

import { Zap } from 'lucide-react'

const services = [
  {
    icon: '📊',
    title: 'Tráfego Pago',
    description: 'Campanhas Google Ads e Facebook Ads estrategicamente planejadas para máximo ROI e conversão qualificada.'
  },
  {
    icon: '🎯',
    title: 'Consultoria de Vendas',
    description: 'Análise profunda do seu funil, otimização de processos e estratégias comprovadas de aumento de faturamento.'
  },
  {
    icon: '🌐',
    title: 'Sites Responivos',
    description: 'Plataformas modernas, rápidas e otimizadas para SEO que geram leads e conversões automaticamente.'
  },
  {
    icon: '📱',
    title: 'Landing Pages',
    description: 'Páginas de captura de leads de alto desempenho, testadas e otimizadas para máxima conversão.'
  },
  {
    icon: '⚡',
    title: 'Mini Apps',
    description: 'Aplicações web progressivas e interativas que aumentam engajamento e mantêm usuários voltando.'
  },
  {
    icon: '🎨',
    title: 'Design & Otimização',
    description: 'Interfaces intuitivas e testes A/B contínuos que aumentam taxas de conversão consistentemente.'
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'linear-gradient(rgba(238, 11, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(238, 11, 59, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Serviços Triuno</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Crescimento Digital <span className="gradient-text">Comprovado</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Transformamos estratégia em resultados mensuráveis. Cada serviço é pensado para gerar ROI real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glow-effect bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
