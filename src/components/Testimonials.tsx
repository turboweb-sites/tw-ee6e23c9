import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Michael R.',
    vehicle: '2023 Lamborghini Huracán',
    rating: 5,
    text: 'Absolutely phenomenal work. My Huracán looks better than when I picked it up from the dealer. The ceramic coating is flawless and the attention to detail is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Sarah K.',
    vehicle: '2024 Tesla Model S Plaid',
    rating: 5,
    text: 'I\'ve tried several detailers in LA and Elite is by far the best. They came to my office, and my Tesla looked absolutely stunning when they finished. Professional, punctual, and worth every penny.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'James L.',
    vehicle: '2022 Porsche 911 GT3',
    rating: 5,
    text: 'The paint correction on my GT3 was incredible. They removed years of swirl marks and the ceramic coating gives it a depth of shine I didn\'t think was possible. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Amanda T.',
    vehicle: '2023 Range Rover Sport',
    rating: 5,
    text: 'Elite transformed my Range Rover. The interior deep clean made it smell and look brand new. Their eco-friendly approach is a huge plus. I\'m a client for life.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'David C.',
    vehicle: '2024 Ferrari Roma',
    rating: 5,
    text: 'I trust only Elite with my Ferrari. Their certified technicians understand exotic cars and treat them with the care they deserve. The Ultimate Protection package is worth every cent.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (index: number) => {
    setCurrent(index)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((current + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding bg-black relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className={`max-w-4xl mx-auto ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-6">
            <span className="text-white">What Our </span>
            <span className="gold-text">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative glass-card p-8 md:p-12 gold-border">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-gold-500/15" />

          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-light italic min-h-[80px]">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/30"
              />
              <div className="text-left">
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-gold-400 text-sm">{t.vehicle}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-white/10 hover:border-gold-500/30 hover:bg-gold-500/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gold-400" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'gold-gradient w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-white/10 hover:border-gold-500/30 hover:bg-gold-500/10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gold-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}