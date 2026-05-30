'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "When will my letter arrive?",
    a: "I mail Inner Compass letters on the 15th of every month. US subscribers typically receive theirs within 3–10 days. International subscribers should allow 2–6 weeks for delivery. Subscribe before the 15th and your letter ships that same month — sign up after the 15th and your first letter goes out the following month."
  },
  {
    q: "How do I cancel or update my address?",
    a: "Just email me at cynthia@innercompasstarotletters.org and I will take care of everything. Whether you need to cancel, update your shipping address, or change your billing info — please reach out before the 15th of the month so I can make adjustments before that month's letters go out."
  },
  {
    q: "What if my letter does not arrive?",
    a: "US mail can occasionally take up to two weeks, and international deliveries can take up to six. If your letter has not arrived by the end of the month (US) or six weeks (international), email me at cynthia@innercompasstarotletters.org and I will make it right — either with a replacement or a refund. Before reaching out, please double-check that the address on your receipt is correct, as that is often the culprit!"
  },
  {
    q: "Can I gift a subscription?",
    a: "Yes, and it makes such a meaningful gift! Simply choose any subscription length, enter your recipient's name and mailing address at checkout, and I will handle the rest. Each month they will receive a beautiful envelope full of tarot goodness — no wrapping required."
  },
  {
    q: "What is tarot — do I need to believe in it?",
    a: "Tarot is a tool for reflection, not fortune-telling. You do not need to hold any particular belief — just bring an open mind. Many subscribers use their monthly letter as a journaling prompt, a moment of intentional pause, or simply a beautiful piece of mail to look forward to. The cards meet you wherever you are."
  },
  {
    q: "Do you offer readings for specific questions?",
    a: "The monthly letter is a general reading for the collective energy of that month — it is not personalized to a specific situation or question. If you are looking for a one-on-one reading, feel free to reach out at cynthia@innercompasstarotletters.org and we can chat about what that might look like."
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
