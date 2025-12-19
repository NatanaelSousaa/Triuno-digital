'use client'

import { Linkedin, Github, Mail } from 'lucide-react'

const team = [

  
 
]

export default function Team() {
  return (
    <section id="team" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'linear-gradient(rgba(101, 143, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(101, 143, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
       
        

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group glow-effect bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
