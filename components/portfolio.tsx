'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Premium',
    category: 'Next.js',
    description: 'Plataforma de e-commerce com checkout otimizado, sistema de pagamento integrado e painel administrativo.',
    image: '/ecommerce-store-interface.png',
    tags: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'App de Gestão',
    category: 'React Native',
    description: 'Aplicativo mobile para gestão de projetos com sincronização em tempo real e notificações push.',
    image: '/mobile-app-dashboard.png',
    tags: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Platform SaaS',
    category: 'Next.js',
    description: 'Plataforma colaborativa com recursos avançados, autenticação segura e arquitetura escalável.',
    image: '/saas-platform-dashboard.jpg',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Landing Page Agência',
    category: 'React',
    description: 'Site institucional moderno com animações interativas, totalmente responsivo e otimizado para SEO.',
    image: '/modern-landing-page.png',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Dashboard Analítico',
    category: 'Next.js',
    description: 'Painel de controle em tempo real com gráficos interativos e exportação de relatórios.',
    image: '/analytics-dashboard.png',
    tags: ['Next.js', 'Chart.js', 'Recharts'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Marketplace Digital',
    category: 'Node.js',
    description: 'Plataforma de marketplace com sistemas de ratings, pagamentos e sistema de reputação.',
    image: '/marketplace-platform-interface.jpg',
    tags: ['Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: '#'
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Variáveis do WhatsApp - COLOCAR FORA DO RETURN
  const whatsappNumber = "5585997030397" // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de iniciar um projeto"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border mb-6">
            <span className="text-sm text-foreground/80">Portfólio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Projetos que <span className="text-primary">Transformam</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Veja alguns dos projetos incríveis que desenvolvemos para nossos clientes.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border overflow-hidden rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay com botões */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  
                  
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs text-foreground/60 bg-muted px-2 py-1 rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-foreground/70 mb-6">
            Interessado em trabalhar juntos?
          </p>
          {/* AGORA SIM - DENTRO DO RETURN */}
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 inline-block text-center"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </section>
  )
}