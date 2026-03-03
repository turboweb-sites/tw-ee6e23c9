import { Phone, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href="tel:+13105550199"
        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl hover:bg-gold-500/20 hover:border-gold-500/30 transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-gold-400 group-hover:animate-pulse" />
      </a>
      <a
        href="#contact"
        className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center shadow-xl shadow-gold-500/30 hover:scale-110 transition-all duration-300 group"
        aria-label="Book appointment"
      >
        <Calendar className="w-6 h-6 text-black" />
      </a>
    </div>
  )
}