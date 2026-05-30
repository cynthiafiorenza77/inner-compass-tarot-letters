'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F3EC]/95 backdrop-blur-md shadow-sm border-b border-[#C4899A]/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#C4899A" strokeWidth="0.8"/>
            <path d="M11 2 L12.2 9.8 L11 11 L9.8 9.8 Z" fill="#C47856"/>
            <path d="M11 20 L12.2 12.2 L11 11 L9.8 12.2 Z" fill="#4A2D40"/>
            <path d="M2 11 L9.8 9.8 L11 11 L9.8 12.2 Z" fill="#4A2D40"/>
            <path d="M20 11 L12.2 9.8 L11 11 L12.2 12.2 Z" fill="#4A2D40"/>
            <circle cx="11" cy="11" r="1.5" fill="#C4899A"/>
          </svg>
          <span className="font-cormorant text-lg font-light text-[#4A2D40]" style={{letterSpacing:'0.15em'}}>Inner Compass</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.href} href={link.href} className="font-josefin text-xs tracking-widest uppercase text-[#6B4C3B] hover:text-[#C4899A] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#pricing" className="font-josefin text-xs tracking-widest uppercase px-5 py-2.5 bg-[#4A2D40] text-[#F9F3EC] hover:bg-[#6B4C3B] transition-colors">
            Subscribe
          </a>
        </div>

        <button className="md:hidden text-[#4A2D40]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F9F3EC] border-t border-[#C4899A]/20 px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="font-josefin text-xs tracking-widest uppercase text-[#6B4C3B]">
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="font-josefin text-xs tracking-widest uppercase px-5 py-3 bg-[#4A2D40] text-[#F9F3EC] text-center">
            Subscribe
          </a>
        </div>
      )}
    </nav>
  )
}
