import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButton from '../components/FloatingButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButton />
    </div>
  )
}