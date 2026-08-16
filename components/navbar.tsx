'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'The Offer', href: '#offer' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const wordmarkColor = scrolled ? '#4A2D40' : '#F9F3EC'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F9F3EC]/97 backdrop-blur-md shadow-sm border-b border-[#C4899A]/15' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Wordmark logo */}
        <a href="#" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#C4899A" strokeWidth="0.8"/>
            <path d="M16 6 L17.5 16 L16 13 L14.5 16 Z" fill="#C4899A"/>
            <path d="M16 26 L17.5 16 L16 19 L14.5 16 Z" fill="#C4899A" opacity="0.5"/>
            <path d="M26 16 L16 17.5 L19 16 L16 14.5 Z" fill="#C4899A" opacity="0.5"/>
            <path d="M6 16 L16 17.5 L13 16 L16 14.5 Z" fill="#C4899A" opacity="0.5"/>
            <circle cx="16" cy="16" r="1.5" fill="#C47856"/>
          </svg>
          <span
            className="font-cormorant text-xl font-light italic"
            style={{ color: wordmarkColor, letterSpacing: '0.02em' }}
          >
            Inner Compass Tarot
          </span>
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
          <a href="#offer"
            className="font-josefin text-xs tracking-widest uppercase px-5 py-2.5 bg-[#4A2D40] text-[#F9F3EC] hover:bg-[#C47856] transition-colors">
            Get My Reading
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
            <span className="font-cormorant text-xl italic font-light text-[#4A2D40]">Inner Compass Tarot</span>
          </div>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="font-josefin text-xs tracking-widest uppercase text-[#6B4C3B]">
              {link.label}
            </a>
          ))}
          <a href="#offer" onClick={() => setMenuOpen(false)}
            className="font-josefin text-xs tracking-widest uppercase px-5 py-3 bg-[#4A2D40] text-[#F9F3EC] text-center">
            Get My Reading
          </a>
        </div>
      )}
    </nav>
  )
}
