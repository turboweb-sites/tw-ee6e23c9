import { Award, Leaf, Truck, ThumbsUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'IDA-certified professionals with training from Rupes, Gyeon, and XPEL. Only the best hands touch your vehicle.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'We use biodegradable, VOC-free cleaning solutions. Premium results with minimal environmental impact.',
  },
  {
    icon: Truck,
    title: 'Fast, Mobile Service',
    description: 'We come to you anywhere in LA County. Fully equipped mobile unit with filtered water and generator.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guarantee',
    description: '100% satisfaction or we redo it free. Period. We stand behind every detail with a written guarantee.',
  },
]

export default function WhyUs() {
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
    <section id="why-us" className="section-padding bg-black relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`relative ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop"
                alt="Premium car detailing in Los Angeles"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-6 glass-card gold-border p-4 md:p-6 animate-float">
              <div className="text-3xl font-bold gold-text">12+</div>
              <div className="text-gray-300 text-sm">Years of Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-6">
              <span className="text-white">Los Angeles' Most </span>
              <span className="gold-text">Trusted Detailers</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              We don't cut corners. From the products we use to the technicians we employ, 
              everything is selected for one purpose — making your car look better than the day it left the showroom.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, i) => {
                const Icon = reason.icon
                return (
                  <div
                    key={reason.title}
                    className={`flex gap-4 group ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${(i + 1) * 0.15}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-gold-400 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}