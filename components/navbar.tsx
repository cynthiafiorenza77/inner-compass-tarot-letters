'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: "What's Inside", href: '#inside' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F9F3EC]/97 backdrop-blur-md shadow-sm border-b border-[#C4899A]/15' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo — full image when scrolled, icon mark when at top */}
        <a href="#" className="flex items-center">
          {scrolled ? (
            /* Full logo on cream background */
            <Image
              src="/logo.png"
              alt="Inner Compass Tarot Letters"
              width={200}
              height={67}
              className="h-12 w-auto object-contain"
              priority
            />
          ) : (
            /* Minimal icon + text on dark hero */
            <div className="flex items-center gap-2">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="#C4899A" strokeWidth="0.8"/>
                {/* envelope */}
                <rect x="6" y="10" width="20" height="13" rx="1" stroke="#C4899A" strokeWidth="0.8" fill="none"/>
                <path d="M6 10 L16 18 L26 10" stroke="#C4899A" strokeWidth="0.8" fill="none"/>
                {/* compass star center */}
                <path d="M16 12 L16.8 15.2 L16 16 L15.2 15.2 Z" fill="#C47856"/>
                <path d="M16 20 L16.8 16.8 L16 16 L15.2 16.8 Z" fill="#8BA888"/>
                <path d="M12 16 L15.2 15.2 L16 16 L15.2 16.8 Z" fill="#8BA888"/>
                <path d="M20 16 L16.8 15.2 L16 16 L16.8 16.8 Z" fill="#8BA888"/>
              </svg>
              <div>
                <p className="font-cormorant text-base font-light text-[#F9F3EC] leading-none" style={{letterSpacing:'0.1em'}}>Inner Compass</p>
                <p className="font-josefin text-[9px] tracking-[0.25em] uppercase text-[#C4899A] leading-none mt-0.5">Tarot Letters</p>
              </div>
            </div>
          )}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.href} href={link.href}
              className={`font-josefin text-xs tracking-widest uppercase transition-colors ${
                scrolled ? 'text-[#6B4C3B] hover:text-[#C4899A]' : 'text-[#F9F3EC]/70 hover:text-[#C4899A]'
              }`}>
              {link.label}
            </a>
          ))}
          <a href="#pricing"
            className="font-josefin text-xs tracking-widest uppercase px-5 py-2.5 bg-[#4A2D40] text-[#F9F3EC] hover:bg-[#C47856] transition-colors">
            Subscribe
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className={`md:hidden ${scrolled ? 'text-[#4A2D40]' : 'text-[#F9F3EC]'}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F9F3EC] border-t border-[#C4899A]/20 px-6 py-6 flex flex-col gap-5">
          <div className="pb-4 border-b border-[#C4899A]/15">
            <Image src="/logo.png" alt="Inner Compass Tarot Letters" width={160} height={54} className="h-10 w-auto"/>
          </div>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="font-josefin text-xs tracking-widest uppercase text-[#6B4C3B]">
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setMenuOpen(false)}
            className="font-josefin text-xs tracking-widest uppercase px-5 py-3 bg-[#4A2D40] text-[#F9F3EC] text-center">
            Subscribe
          </a>
        </div>
      )}
    </nav>
  )
}
