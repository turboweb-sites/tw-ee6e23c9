import { Search, Droplets, Paintbrush, Armchair, CheckCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Vehicle Inspection',
    description: 'Thorough assessment of your vehicle\'s condition, identifying every imperfection and area of concern.',
  },
  {
    icon: Droplets,
    step: '02',
    title: 'Deep Cleaning & Decontamination',
    description: 'Multi-stage wash, iron removal, clay bar treatment, and chemical decontamination of all surfaces.',
  },
  {
    icon: Paintbrush,
    step: '03',
    title: 'Paint Protection / Polishing',
    description: 'Machine polishing to remove defects, followed by sealant or ceramic coating application.',
  },
  {
    icon: Armchair,
    step: '04',
    title: 'Interior Restoration',
    description: 'Deep steam clean, leather treatment, trim restoration, and meticulous attention to every detail inside.',
  },
  {
    icon: CheckCircle,
    step: '05',
    title: 'Final Quality Check & Handover',
    description: 'LED-lit inspection under controlled conditions. We don\'t release your car until it\'s perfect.',
  },
]

export default function Process() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Our Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-6">
            <span className="text-white">How We </span>
            <span className="gold-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A meticulous 5-step process refined over 12 years to deliver flawless results every time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className={`relative group ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="glass-card p-6 text-center hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Step Number */}
                    <div className="text-gold-500/20 text-5xl font-display font-bold absolute top-3 right-4">
                      {step.step}
                    </div>
                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto rounded-2xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-500/20">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-3 group-hover:text-gold-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}