import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-gold-500/5 border-b border-gold-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-display font-bold text-black text-lg group-hover:scale-110 transition-transform">
              E
            </div>
            <div>
              <span className="text-white font-semibold text-sm md:text-base tracking-wide">ELITE</span>
              <span className="text-gold-400 font-light text-xs md:text-sm block -mt-1 tracking-widest">DETAILING</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gold-gradient group-hover:w-2/3 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+13105550199"
              className="hidden sm:flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">(310) 555-0199</span>
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2.5 gold-gradient text-black font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-gold-500/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+13105550199"
            className="flex items-center gap-2 px-4 py-3 text-gold-400"
          >
            <Phone className="w-4 h-4" />
            (310) 555-0199
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center px-4 py-3 gold-gradient text-black font-semibold rounded-lg mt-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}