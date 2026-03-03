import { Star, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-display font-bold text-black text-lg">
                E
              </div>
              <div>
                <span className="text-white font-semibold tracking-wide">ELITE</span>
                <span className="text-gold-400 font-light text-xs block -mt-1 tracking-widest">DETAILING</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Los Angeles' premier auto detailing service. Luxury care for exotic, sports, and everyday vehicles since 2012.
            </p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
              <span className="text-gray-400 text-sm ml-2">4.9 on Google (500+ reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Services', 'Process', 'Why Us', 'Pricing', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/10 hover:border-gold-500/30 transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-gold-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/10 hover:border-gold-500/30 transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-gold-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/10 hover:border-gold-500/30 transition-all" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-gray-400 hover:text-gold-400" />
              </a>
            </div>
            <h4 className="text-white font-semibold mb-3">Service Areas</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Beverly Hills • Hollywood • Santa Monica • Malibu • Bel Air • Brentwood • West Hollywood • Downtown LA • Pasadena
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {year} Elite Auto Detailing Los Angeles. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}