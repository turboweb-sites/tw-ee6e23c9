import { Droplets, Sparkles, Car, Paintbrush, ShieldCheck, MapPin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: Droplets,
    title: 'Exterior Detailing',
    description: 'Complete exterior wash, clay bar treatment, machine polish, and premium carnauba wax protection.',
    price: '$179',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Interior Deep Cleaning',
    description: 'Full vacuum, steam cleaning, leather conditioning, dashboard detail, and odor elimination.',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
  },
  {
    icon: Car,
    title: 'Full Detail Package',
    description: 'Comprehensive interior and exterior detailing with paint decontamination and fabric protection.',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
  },
  {
    icon: Paintbrush,
    title: 'Paint Correction',
    description: 'Multi-stage machine polishing to remove swirl marks, scratches, and oxidation for a flawless finish.',
    price: 'From $499',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop',
  },
  {
    icon: ShieldCheck,
    title: 'Ceramic Coating',
    description: 'Professional-grade 9H ceramic coating for long-lasting hydrophobic protection and showroom shine.',
    price: 'From $999',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
  },
  {
    icon: MapPin,
    title: 'Mobile Detailing',
    description: 'Full-service detailing at your location — home, office, or anywhere in the Los Angeles area.',
    price: '+$60 Travel Fee',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
  },
]

export default function Services() {
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
    <section id="services" className="section-padding bg-black relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-6">
            <span className="text-white">Our Premium </span>
            <span className="gold-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tailored detailing services for every vehicle type. From daily drivers to million-dollar exotics.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group glass-card overflow-hidden hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10 ${
                  visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 gold-gradient text-black text-sm font-bold rounded-lg">
                    {service.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}