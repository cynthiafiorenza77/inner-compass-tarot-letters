'use client'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbgrzjve'

export default function IntakePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  const [approach, setApproach] = useState<'cold' | 'context' | ''>('')
  const [context, setContext] = useState('')
  const [anythingElse, setAnythingElse] = useState('')
  const [photo, setPhoto] = useState<File | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!approach) {
      setError('Please let me know how you\'d like me to approach your reading.')
      return
    }
    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('form_type', 'Year Ahead Intake')
      formData.append('name', name)
      formData.append('email', email)
      formData.append('birthday', birthday || 'Not provided')
      formData.append('approach', approach === 'cold' ? 'Go in cold' : 'Provide context')
      if (approach === 'context') {
        formData.append('context', context || 'No details provided')
      }
      formData.append('anything_else', anythingElse || 'None')
      if (photo) {
        formData.append('photo', photo)
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong submitting your intake. Please email me directly at cynthia@innercompasstarotletters.org so I can make sure I have everything I need.')
      }
    } catch {
      setError('Something went wrong submitting your intake. Please email me directly at cynthia@innercompasstarotletters.org so I can make sure I have everything I need.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F9F3EC] flex items-center justify-center px-6 py-24">
        <div className="max-w-lg text-center">
          <svg className="w-14 h-14 mx-auto mb-8" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="26" stroke="#C4899A" strokeWidth="1.2"/>
            <path d="M32 10 L35 32 L32 27 L29 32 Z" fill="#C4899A"/>
            <path d="M32 54 L35 32 L32 37 L29 32 Z" fill="#C4899A" opacity="0.5"/>
            <path d="M54 32 L32 35 L37 32 L32 29 Z" fill="#C4899A" opacity="0.5"/>
            <path d="M10 32 L32 35 L27 32 L32 29 Z" fill="#C4899A" opacity="0.5"/>
            <circle cx="32" cy="32" r="2.5" fill="#C47856"/>
          </svg>
          <h1 className="font-cormorant text-4xl italic font-light text-[#4A2D40] mb-6">
            You&apos;re all set.
          </h1>
          <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light mb-4">
            Thank you for trusting me with your Year Ahead reading.
          </p>
          <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light mb-4">
            I&apos;ve received your information and will begin preparing your reading. Your private video reading and Year Ahead Guide will be delivered to your email within 5 business days.
          </p>
          <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light mb-8">
            There is nothing else you need to do right now.
          </p>
          <p className="font-cormorant text-xl italic text-[#C4899A]">— Cynthia</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F9F3EC] py-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Almost There</p>
          <h1 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40] mb-4">
            Tell Me About You
          </h1>
          <p className="font-josefin text-sm font-light text-[#6B4C3B]">
            Thank you for your purchase! Please complete this short form so I can prepare your Year Ahead reading.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="border border-[#C4899A]/20 bg-white/40">

          <div className="p-6 border-b border-[#C4899A]/20">
            <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">Name</label>
            <input type="text" required value={name} onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] placeholder-[#6B4C3B]/35 outline-none border-b border-[#4A2D40]/15 pb-2"/>
          </div>

          <div className="p-6 border-b border-[#C4899A]/20">
            <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] placeholder-[#6B4C3B]/35 outline-none border-b border-[#4A2D40]/15 pb-2"/>
          </div>

          <div className="p-6 border-b border-[#C4899A]/20">
            <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">Birthday <span className="normal-case text-[#6B4C3B]/50">(optional)</span></label>
            <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)}
              className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] outline-none border-b border-[#4A2D40]/15 pb-2"/>
          </div>

          <div className="p-6 border-b border-[#C4899A]/20">
            <p className="font-cormorant text-xl italic font-light text-[#4A2D40] mb-4">How would you like me to approach your reading?</p>
            <div className="space-y-3">
              <label className={`block p-4 border cursor-pointer transition-colors ${approach === 'cold' ? 'border-[#C47856] bg-[#C47856]/5' : 'border-[#4A2D40]/15'}`}>
                <div className="flex items-start gap-3">
                  <input type="radio" name="approach" value="cold" checked={approach === 'cold'} onChange={() => setApproach('cold')} className="mt-1"/>
                  <span className="font-josefin text-sm font-light text-[#4A2D40]">
                    <strong className="font-normal">Go in cold.</strong> I&apos;d prefer to give you little or no background and let the cards and your intuition lead the reading.
                  </span>
                </div>
              </label>
              <label className={`block p-4 border cursor-pointer transition-colors ${approach === 'context' ? 'border-[#C47856] bg-[#C47856]/5' : 'border-[#4A2D40]/15'}`}>
                <div className="flex items-start gap-3">
                  <input type="radio" name="approach" value="context" checked={approach === 'context'} onChange={() => setApproach('context')} className="mt-1"/>
                  <span className="font-josefin text-sm font-light text-[#4A2D40]">
                    <strong className="font-normal">I&apos;ll give you some context.</strong> I&apos;d like to tell you a little about what&apos;s happening in my life and/or what I&apos;d especially like explored.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {approach === 'context' && (
            <div className="p-6 border-b border-[#C4899A]/20">
              <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">What would you especially like me to explore?</label>
              <p className="font-josefin text-xs font-light text-[#6B4C3B]/60 mb-3">You might include relationships, career/money, family, personal growth or a particular situation. Share only what you&apos;re comfortable sharing.</p>
              <textarea rows={4} value={context} onChange={e => setContext(e.target.value)}
                className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] outline-none border-b border-[#4A2D40]/15 pb-2 resize-none"/>
            </div>
          )}

          <div className="p-6 border-b border-[#C4899A]/20">
            <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-3">Anything else you&apos;d like me to know? <span className="normal-case text-[#6B4C3B]/50">(optional)</span></label>
            <textarea rows={3} value={anythingElse} onChange={e => setAnythingElse(e.target.value)}
              className="w-full bg-transparent font-josefin text-sm font-light text-[#4A2D40] outline-none border-b border-[#4A2D40]/15 pb-2 resize-none"/>
          </div>

          <div className="p-6 border-b border-[#C4899A]/20">
            <label className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] block mb-2">Optional Photo</label>
            <p className="font-josefin text-xs font-light text-[#6B4C3B]/60 mb-3">
              You may upload one recent photo of yourself — JPG, PNG, or HEIC. Completely optional.
            </p>
            <input
              type="file"
              accept="image/jpeg,image/png,image/heic,image/heif,.heic,.heif"
              onChange={e => setPhoto(e.target.files?.[0] || null)}
              className="w-full font-josefin text-xs font-light text-[#4A2D40] file:mr-4 file:py-2 file:px-4 file:border file:border-[#C4899A]/40 file:bg-transparent file:text-[#4A2D40] file:font-josefin file:text-xs file:tracking-widest file:uppercase file:cursor-pointer"
            />
          </div>

          {error && (
            <p className="font-josefin text-xs text-[#C47856] text-center px-6 pt-4">{error}</p>
          )}

          <button type="submit" disabled={loading} className="w-full font-josefin text-xs tracking-widest uppercase py-5 bg-[#4A2D40] text-[#F9F3EC] hover:bg-[#6B4C3B] transition-colors disabled:opacity-60">
            {loading ? 'Submitting...' : 'Submit My Information'}
          </button>
        </form>

        <p className="font-josefin text-xs font-light text-[#6B4C3B]/50 text-center mt-8 leading-relaxed">
          Your information and photo are kept private and are never shared publicly or displayed on this site.
        </p>
      </div>
    </main>
  )
}
