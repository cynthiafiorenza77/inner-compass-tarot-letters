'use client'
import { useState } from 'react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name:'', email:'', message:'' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/meedbpoj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email me directly at cynthia@innercompasstarotletters.org')
      }
    } catch {
      setError('Something went wrong. Please email me directly at cynthia@innercompasstarotletters.org')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#F9F3EC]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Get in Touch</p>
          <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40]">Say hello</h2>
          <p className="font-josefin text-sm font-light text-[#6B4C3B] mt-4">
            Questions about your subscription, gifting, or just curious about the cards? I would love to hear from you.
          </p>
          <a href="mailto:cynthia@innercompasstarotletters.org" className="font-josefin text-xs tracking-widest uppercase text-[#C47856] hover:text-[#C4899A] transition-colors mt-3 inline-block">
            cynthia@innercompasstarotletters.org
          </a>
        </div>

        {submitted ? (
          <div className="text-center py-16 border border-[#C4899A]/20">
            <svg className="w-14 h-14 mx-auto mb-6" viewBox="0 0 64 64" fill="none">
              <rect x="4" y="14" width="56" height="36" stroke="#C4899A" strokeWidth="1.5"/>
              <path d="M4 14 L32 36 L60 14" stroke="#C4899A" strokeWidth="1.5"/>
              <circle cx="32" cy="36" r="6" fill="#C47856"/>
            </svg>
            <h3 className="font-cormorant text-2xl italic font-light text-[#4A2D40] mb-2">Message received</h3>
            <p className="font-josefin text-sm font-light text-[#6B4C3B]">I will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border border-[#C4899A]/20">
            <div className="grid md:grid-cols-2">
              <div className="p-6 border-b border-r border-[#C4899A]/20">
                <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">Name</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                  className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] placeholder-[#6B4C3B]/35 outline-none"/>
              </div>
              <div className="p-6 border-b border-[#C4899A]/20">
                <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">Email</label>
                <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                  className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] placeholder-[#6B4C3B]/35 outline-none"/>
              </div>
            </div>
            <div className="p-6 border-b border-[#C4899A]/20">
              <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">Message</label>
              <textarea required rows={5} placeholder="What's on your mind?" value={form.message} onChange={e => setForm({...form, message:e.target.value})}
                className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] placeholder-[#6B4C3B]/35 outline-none resize-none"/>
            </div>
            {error && (
              <p className="font-josefin text-xs text-[#C47856] text-center px-6 pt-4">{error}</p>
            )}
            <button type="submit" disabled={loading} className="w-full font-josefin text-xs tracking-widest uppercase py-5 bg-[#4A2D40] text-[#F9F3EC] hover:bg-[#6B4C3B] transition-colors disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
