'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q:"When does my first letter arrive?", a:"Letters ship the first week of each month. Subscribe before the 20th and you will be included that month. After the 20th, your first letter ships the following month." },
  { q:"Do you offer readings for specific questions?", a:"Monthly letters use a general spread focused on what your soul needs right now, which tends to land very personally. Custom one-question readings will be available soon as an add-on." },
  { q:"What if I do not connect with the reading?", a:"Tarot is intuitive — sit with it. Cards that feel least relevant often become the most accurate a few weeks later. Reach out and I will offer additional context." },
  { q:"Is the digital plan a PDF?", a:"Yes — beautifully formatted PDFs emailed to your inbox, designed to also print well on standard paper if you want a physical copy." },
  { q:"Do you ship internationally?", a:"Physical letters are US-only for now. International subscribers are welcome on the digital plan." },
  { q:"How do I cancel?", a:"Cancel anytime through your account before your next billing date. No hoops, no guilt — this is meant to serve you." },
]

export function FAQ() {
  const [open, setOpen] = useState<number|null>(null)
  return (
    <section id="faq" className="py-24 bg-[#4A2D40]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Questions</p>
          <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#F9F3EC]">Things people ask</h2>
        </div>
        <div className="divide-y divide-[#C4899A]/20">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button className="w-full py-6 flex items-start justify-between gap-4 text-left group" onClick={() => setOpen(open===i ? null : i)}>
                <span className="font-cormorant text-lg italic font-light text-[#F9F3EC] group-hover:text-[#C4899A] transition-colors">{faq.q}</span>
                <ChevronDown size={16} className={`text-[#C4899A] flex-shrink-0 mt-1 transition-transform duration-300 ${open===i?'rotate-180':''}`}/>
              </button>
              {open===i && (
                <div className="pb-6">
                  <p className="font-josefin text-sm font-light leading-relaxed text-[#F9F3EC]/65">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
