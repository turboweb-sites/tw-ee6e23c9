import { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const vehicleTypes = ['Sedan', 'SUV / Truck', 'Sports Car', 'Exotic / Supercar', 'Electric Vehicle', 'Classic / Vintage', 'Other']
const serviceOptions = ['Exterior Detailing – $179', 'Interior Deep Cleaning – $199', 'Full Detail Package – $349', 'Paint Correction – From $499', 'Ceramic Coating – From $999', 'Mobile Detailing']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', phone: '', email: '', vehicle: '', service: '', date: '', message: '' })
  }

  const inputClasses = 'w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 focus:bg-white/10 transition-all duration-300 outline-none'

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className={`relative max-w-7xl mx-auto ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-6">
            <span className="text-white">Book Your </span>
            <span className="gold-text">Appointment</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to experience the difference? Fill out the form or give us a call. We respond within 1 hour during business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-gold-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Booking Received!</h3>
                  <p className="text-gray-400">We'll confirm your appointment within 1 hour. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required className={inputClasses} />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(310) 555-0199" required className={inputClasses} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required className={inputClasses} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Vehicle Type *</label>
                      <select name="vehicle" value={form.vehicle} onChange={handleChange} required className={inputClasses}>
                        <option value="">Select vehicle type</option>
                        {vehicleTypes.map((v) => (<option key={v} value={v}>{v}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Service *</label>
                      <select name="service" value={form.service} onChange={handleChange} required className={inputClasses}>
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Preferred Date *</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} required className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any specific concerns or requests..." rows={3} className={`${inputClasses} resize-none`} />
                  </div>
                  <button type="submit" className="w-full py-4 gold-gradient text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Book Your Appointment
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <a href="tel:+13105550199" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-gold-400 transition-colors">(310) 555-0199</div>
                  <div className="text-gray-500 text-sm">Call or text anytime</div>
                </div>
              </a>
              <a href="mailto:info@elitedetailingla.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-gold-400 transition-colors">info@elitedetailingla.com</div>
                  <div className="text-gray-500 text-sm">Email us anytime</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium">8500 Beverly Blvd</div>
                  <div className="text-gray-500 text-sm">Los Angeles, CA 90048</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold-400" />
                <h3 className="text-lg font-semibold text-white">Business Hours</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Monday – Friday</span>
                  <span className="text-white font-medium">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-medium">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-gold-400 font-medium">By Appointment</span>
                </div>
              </div>
            </div>

            <div className="glass-card overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0735!2d-118.3695!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzI1LjAiTiAxMTjCsDIyJzEwLjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Auto Detailing Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}