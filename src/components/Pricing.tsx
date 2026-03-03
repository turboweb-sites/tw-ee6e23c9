import { Check, Zap, Crown, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const plans = [
  {
    icon: Zap,
    name: 'Express Detail',
    price: '$199',
    description: 'Quick refresh for your daily driver',
    features: [
      'Hand wash & dry',
      'Tire & wheel cleaning',
      'Interior vacuum',
      'Dashboard wipe-down',
      'Window cleaning',
      'Air freshener',
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: 'Complete Detail',
    price: '$349',
    description: 'Full inside-out transformation',
    features: [
      'Everything in Express',
      'Clay bar treatment',
      'One-step polish',
      'Leather conditioning',
      'Steam cleaning',
      'Trunk detailing',
      'Engine bay cleaning',
    ],
    popular: true,
  },
  {
    icon: Shield,
    name: 'Ultimate Protection',
    price: '$999',
    description: 'Maximum shine & lasting protection',
    features: [
      'Everything in Complete',
      'Multi-stage paint correction',
      '9H Ceramic coating',
      'Wheel ceramic coating',
      'Glass coating',
      'Interior fabric protection',
      '2-year warranty',
      'Annual maintenance plan',
    ],
    popular: false,
  },
]

export default function Pricing() {
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
    <section id="pricing" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-6">
            <span className="text-white">Choose Your </span>
            <span className="gold-text">Package</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent pricing, no hidden fees. Every package includes our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative group ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 gold-gradient text-black text-xs font-bold rounded-full uppercase tracking-wider z-10">
                    Most Popular
                  </div>
                )}
                <div
                  className={`h-full glass-card p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular
                      ? 'border-gold-500/50 shadow-xl shadow-gold-500/10'
                      : 'hover:border-gold-500/30'
                  }`}
                >
                  <div className="text-center mb-8">
                    <div
                      className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                        plan.popular
                          ? 'gold-gradient shadow-lg shadow-gold-500/30'
                          : 'bg-gold-500/10 border border-gold-500/20'
                      }`}
                    >
                      <Icon className={`w-7 h-7 ${plan.popular ? 'text-black' : 'text-gold-400'}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold gold-text">{plan.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'gold-gradient text-black hover:shadow-lg hover:shadow-gold-500/30 hover:scale-105'
                        : 'border-2 border-gold-500/40 text-gold-400 hover:bg-gold-500/10'
                    }`}
                  >
                    Select Package
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}