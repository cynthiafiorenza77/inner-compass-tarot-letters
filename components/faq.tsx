'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Is this a live reading?",
    a: "No. Your reading is recorded privately for you, allowing me to take my time with your cards and intuitive impressions. You'll receive the private recording electronically and can watch it whenever you'd like."
  },
  {
    q: "Do I need to tell you what's happening in my life?",
    a: "No. You may provide context if you'd like, or ask me to go into your reading cold."
  },
  {
    q: "Do I have to upload a photograph?",
    a: "No. A photograph is completely optional."
  },
  {
    q: "When will I receive my reading?",
    a: "Within 5 business days after your payment and intake information have been received."
  },
  {
    q: "Can I ask a follow-up question?",
    a: "Your reading includes one clarification question about something already covered in your reading. A new question or topic would require a separate reading."
  },
  {
    q: "Does a Tarot reading guarantee what will happen?",
    a: "No. Tarot and intuitive readings are intended for personal insight, reflection and entertainment. They do not guarantee future events and should not replace professional medical, legal, financial or mental-health advice."
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 bg-[#F9F3EC]">
      <div className="max-w-2xl mx-auto">
        <p className="font-josefin text-xs tracking-[0.25em] uppercase text-[#C4899A] text-center mb-3">
          Questions
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#4A2D40] text-center mb-14">
          Things You Might Wonder
        </h2>

        <div className="divide-y divide-[#4A2D40]/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left group"
              >
                <span className="font-josefin text-sm font-light text-[#4A2D40] pr-4 group-hover:text-[#C4899A] transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C4899A] flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}
              >
                <p className="font-josefin text-sm font-light text-[#6B4C3B] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
