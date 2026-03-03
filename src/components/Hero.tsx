import { ChevronDown, Star, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&h=1080&fit=crop"
          alt="Luxury car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
          <span className="text-gold-300 text-sm font-medium tracking-wide">#1 Rated Detailing in Los Angeles</span>
          <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          <span className="text-white">Elite Auto Detailing</span>
          <br />
          <span className="gold-text">in Los Angeles, CA</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Luxury care for your ride. Premium detailing for exotic, sports, and luxury vehicles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          <a
            href="#contact"
            className="px-8 py-4 gold-gradient text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Book Your Appointment Today
          </a>
          <a
            href="tel:+13105550199"
            className="px-8 py-4 border-2 border-gold-500/40 text-gold-400 font-semibold text-lg rounded-xl hover:bg-gold-500/10 transition-all duration-300 w-full sm:w-auto"
          >
            Call (310) 555-0199
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in-up delay-400">
          <div className="glass-card p-4 md:p-6">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold gold-text">5,000+</div>
            <div className="text-gray-400 text-xs md:text-sm mt-1">Cars Detailed</div>
          </div>
          <div className="glass-card p-4 md:p-6">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold gold-text">4.9</div>
            <div className="text-gray-400 text-xs md:text-sm mt-1">Google Rating</div>
          </div>
          <div className="glass-card p-4 md:p-6">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold gold-text">12+</div>
            <div className="text-gray-400 text-xs md:text-sm mt-1">Years Experience</div>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#services" className="inline-block">
            <ChevronDown className="w-8 h-8 text-gold-400/60" />
          </a>
        </div>
      </div>
    </section>
  )
}