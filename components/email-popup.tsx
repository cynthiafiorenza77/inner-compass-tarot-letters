'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const dismissed = localStorage.getItem('ic_popup_dismissed')
    const subscribed = localStorage.getItem('ic_popup_subscribed')
    if (dismissed || subscribed) return

    const timer = setTimeout(() => setIsVisible(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('ic_popup_dismissed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        localStorage.setItem('ic_popup_subscribed', 'true')
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Connection error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-[#3A2030] border border-[#C4899A]/20 max-w-md w-full p-10 md:p-12 text-center shadow-2xl overflow-hidden">

              {/* Botanical corner — top left */}
              <svg className="absolute top-0 left-0 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 120 120" fill="none">
                <path d="M0 0 C24 36,48 24,60 60" stroke="#C4899A" strokeWidth="0.8"/>
                <ellipse cx="32" cy="30" rx="12" ry="7" stroke="#8BA888" strokeWidth="0.7" transform="rotate(-30 32 30)"/>
                <ellipse cx="18" cy="46" rx="9" ry="5.5" stroke="#8BA888" strokeWidth="0.7" transform="rotate(20 18 46)"/>
              </svg>

              {/* Botanical corner — bottom right */}
              <svg className="absolute bottom-0 right-0 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 120 120" fill="none">
                <path d="M120 120 C96 84,72 96,60 60" stroke="#C4899A" strokeWidth="0.8"/>
                <ellipse cx="88" cy="90" rx="12" ry="7" stroke="#8BA888" strokeWidth="0.7" transform="rotate(-30 88 90)"/>
                <ellipse cx="102" cy="74" rx="9" ry="5.5" stroke="#8BA888" strokeWidth="0.7" transform="rotate(20 102 74)"/>
              </svg>

              {/* Dismiss X */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-[#C4899A]/40 hover:text-[#C4899A] transition-colors duration-200"
                aria-label="Close"
              >
                <X size={17} />
              </button>

              {/* Small compass icon */}
              <div className="flex justify-center mb-6">
                <svg width="44" height="44" viewBox="0 0 240 240" fill="none" className="opacity-55">
                  <circle cx="120" cy="120" r="114" stroke="#C4899A" strokeWidth="1.2" strokeDasharray="4 7"/>
                  <circle cx="120" cy="120" r="72" stroke="#C4899A" strokeWidth="0.6"/>
                  {[0,45,90,135,180,225,270,315].map(d => (
                    <line key={d} x1="120" y1="10" x2="120" y2={d % 90 === 0 ? "22" : "16"}
                      stroke="#C4899A" strokeWidth={d % 90 === 0 ? "1.2" : "0.6"}
                      transform={`rotate(${d} 120 120)`}/>
                  ))}
                  <path d="M120 32 L124 116 L120 120 L116 116 Z" fill="#C47856"/>
                  <path d="M120 208 L124 124 L120 120 L116 124 Z" fill="#F9F3EC" opacity="0.35"/>
                  <circle cx="120" cy="120" r="6" fill="#C4899A"/>
                  <circle cx="120" cy="120" r="3" fill="#F9F3EC"/>
                </svg>
              </div>

              {status !== 'success' ? (
                <>
                  {/* Label */}
                  <p className="font-josefin text-[10px] tracking-[0.38em] uppercase text-[#C4899A] mb-3">
                    A free gift for you
                  </p>

                  {/* Headline */}
                  <h2 className="font-cormorant text-[1.85rem] font-light italic text-[#F9F3EC] leading-snug mb-4">
                    What Your Birth Card Reveals<br/>About the Year Ahead
                  </h2>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="h-px w-12 bg-[#C4899A]/25"/>
                    <svg width="8" height="8" viewBox="0 0 10 10">
                      <path d="M5 0 L6 4 L5 5 L4 4 Z" fill="#C47856"/>
                      <path d="M5 10 L6 6 L5 5 L4 6 Z" fill="#C4899A"/>
                      <path d="M0 5 L4 4 L5 5 L4 6 Z" fill="#C4899A"/>
                      <path d="M10 5 L6 4 L5 5 L6 6 Z" fill="#C4899A"/>
                    </svg>
                    <div className="h-px w-12 bg-[#C4899A]/25"/>
                  </div>

                  {/* Body */}
                  <p className="font-cormorant text-[1.05rem] italic text-[#F9F3EC]/60 mb-8 leading-relaxed px-2">
                    Drop your email below and I'll send you a free tarot guide — discover the energy your birth card is inviting you into this year.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrorMsg('') }}
                      placeholder="your@email.com"
                      className="w-full bg-[#4A2D40] border border-[#C4899A]/25 text-[#F9F3EC] placeholder-[#C4899A]/35
                                 px-5 py-3 font-josefin text-xs tracking-widest
                                 focus:outline-none focus:border-[#C4899A]/55 transition-colors duration-200"
                      required
                    />

                    {errorMsg && (
                      <p className="font-josefin text-[10px] tracking-wider text-[#C47856]">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full font-josefin text-[10px] tracking-[0.22em] uppercase
                                 px-8 py-4 bg-[#C47856] text-[#F9F3EC]
                                 hover:bg-[#C4899A] transition-colors duration-300
                                 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Sending…' : 'Send Me the Free Guide'}
                    </button>
                  </form>

                  <button
                    onClick={handleDismiss}
                    className="mt-6 font-josefin text-[10px] tracking-widest uppercase text-[#C4899A]/30
                               hover:text-[#C4899A]/60 transition-colors duration-200"
                  >
                    No thank you, I'm all set
                  </button>
                </>
              ) : (
                /* Success state */
                <>
                  <p className="font-josefin text-[10px] tracking-[0.38em] uppercase text-[#C4899A] mb-3">
                    You're on the list ✦
                  </p>
                  <h2 className="font-cormorant text-[1.85rem] font-light italic text-[#F9F3EC] leading-snug mb-4">
                    Your guide is on its way
                  </h2>
                  <div className="h-px w-16 bg-[#C4899A]/25 mx-auto mb-5"/>
                  <p className="font-cormorant text-[1.05rem] italic text-[#F9F3EC]/60 mb-8 leading-relaxed px-2">
                    Check your inbox in a few moments. In the meantime, explore what's waiting for you below.
                  </p>
                  <button
                    onClick={handleDismiss}
                    className="font-josefin text-[10px] tracking-[0.22em] uppercase
                               px-10 py-4 bg-[#C47856] text-[#F9F3EC]
                               hover:bg-[#C4899A] transition-colors duration-300"
                  >
                    Explore the Letters
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
