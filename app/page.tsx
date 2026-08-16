import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { WhatsInside } from '@/components/whats-inside'
import { About } from '@/components/about'
import { IntuitiveProcess } from '@/components/intuitive-process'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatsInside />
      <About />
      <IntuitiveProcess />
      <Pricing />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
