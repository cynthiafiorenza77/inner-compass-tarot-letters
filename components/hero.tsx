'use client'
import { useEffect, useRef } from 'react'

export function Hero() {
  const needleRef = useRef<SVGGElement>(null)

  useEffect(() => {
    let frame: number
    let angle = 0
    const animate = () => {
      angle += 0.015
      if (needleRef.current) {
        needleRef.current.setAttribute('transform', `rotate(${Math.sin(angle) * 6}, 120, 120)`)
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#4A2D40]">
      {/* Botanical corners */}
      <svg className="absolute top-0 left-0 w-52 h-52 opacity-10 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M0 0 C40 60,80 40,100 100" stroke="#C4899A" strokeWidth="1"/>
        <ellipse cx="60" cy="55" rx="18" ry="10" stroke="#8BA888" strokeWidth="0.8" transform="rotate(-30 60 55)"/>
        <ellipse cx="35" cy="75" rx="14" ry="8" stroke="#8BA888" strokeWidth="0.8" transform="rotate(20 35 75)"/>
      </svg>
      <svg className="absolute bottom-0 right-0 w-52 h-52 opacity-10 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M200 200 C160 140,120 160,100 100" stroke="#C4899A" strokeWidth="1"/>
        <ellipse cx="140" cy="145" rx="18" ry="10" stroke="#8BA888" strokeWidth="0.8" transform="rotate(-30 140 145)"/>
        <ellipse cx="165" cy="125" rx="14" ry="8" stroke="#8BA888" strokeWidth="0.8" transform="rotate(20 165 125)"/>
      </svg>

      {/* Compass background */}
      <svg className="absolute opacity-10 w-[480px] h-[480px] pointer-events-none" viewBox="0 0 240 240" fill="none">
        <circle cx="120" cy="120" r="114" stroke="#C4899A" strokeWidth="0.5" strokeDasharray="3 6"/>
        <circle cx="120" cy="120" r="94" stroke="#C4899A" strokeWidth="0.3"/>
        <circle cx="120" cy="120" r="74" stroke="#C4899A" strokeWidth="0.3"/>
        {[0,45,90,135,180,225,270,315].map(d => (
          <line key={d} x1="120" y1="7" x2="120" y2={d % 90 === 0 ? "18" : "13"} stroke="#C4899A" strokeWidth={d % 90 === 0 ? "1" : "0.5"} transform={`rotate(${d} 120 120)`}/>
        ))}
        <g ref={needleRef}>
          <path d="M120 30 L123.5 118 L120 120 L116.5 118 Z" fill="#C47856"/>
          <path d="M120 210 L123.5 122 L120 120 L116.5 122 Z" fill="#F9F3EC" opacity="0.35"/>
          <path d="M30 120 L118 116.5 L120 120 L118 123.5 Z" fill="#C4899A" opacity="0.4"/>
          <path d="M210 120 L122 116.5 L120 120 L122 123.5 Z" fill="#C4899A" opacity="0.4"/>
        </g>
        <circle cx="120" cy="120" r="5" fill="#C4899A"/>
        <circle cx="120" cy="120" r="2.5" fill="#F9F3EC"/>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-josefin text-xs tracking-[0.35em] uppercase text-[#C4899A] mb-6">Monthly · Handwritten · Mailed to You</p>

        <h1 className="font-cormorant text-6xl md:text-8xl font-light italic text-[#F9F3EC] leading-none mb-3">
          Inner Compass
        </h1>
        <h2 className="font-josefin text-sm tracking-[0.45em] uppercase text-[#C4899A] mb-10 font-light">
          Tarot Letters
        </h2>

        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="h-px w-20 bg-[#C4899A]/30"/>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 0 L6 4 L5 5 L4 4 Z" fill="#C47856"/>
            <path d="M5 10 L6 6 L5 5 L4 6 Z" fill="#C4899A"/>
            <path d="M0 5 L4 4 L5 5 L4 6 Z" fill="#C4899A"/>
            <path d="M10 5 L6 4 L5 5 L6 6 Z" fill="#C4899A"/>
          </svg>
          <div className="h-px w-20 bg-[#C4899A]/30"/>
        </div>

        <p className="font-cormorant text-xl md:text-2xl italic text-[#F9F3EC]/75 mb-12 leading-relaxed">
          A gentle monthly tarot check-in for your next chapter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="font-josefin text-xs tracking-widest uppercase px-10 py-4 bg-[#C47856] text-[#F9F3EC] hover:bg-[#C4899A] transition-colors duration-300">
            Join the Letter Club
          </a>
          <a href="#inside" className="font-josefin text-xs tracking-widest uppercase px-10 py-4 border border-[#C4899A]/40 text-[#C4899A] hover:border-[#C4899A] hover:text-[#F9F3EC] transition-colors duration-300">
            See What's Inside
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 opacity-30">
          <span className="font-josefin text-xs tracking-widest uppercase text-[#C4899A]">Scroll</span>
          <div className="w-px h-10 bg-[#C4899A]"/>
        </div>
      </div>
    </section>
  )
}
