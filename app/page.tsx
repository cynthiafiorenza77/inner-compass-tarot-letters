import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { WhatsInside } from '@/components/whats-inside'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhatsInside />
      <Pricing />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
