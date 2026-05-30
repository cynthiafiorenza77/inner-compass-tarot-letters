'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "When will my letter arrive?",
    a: "I mail Inner Compass letters on the 1st of every month. US subscribers typically receive theirs within 3–10 days. International subscribers should allow 2–6 weeks for delivery. Subscribe before the 1st and your letter ships that same month — sign up after the 1st and your first letter goes out the following month."
  },
  {
    q: "How do I cancel or update my address?",
    a: "Just email me at cynthia@innercompasstarotletters.org and I will take care of everything. Whether you need to cancel, update your shipping address, or change your billing info — please reach out before the 1st of the month so I can make adjustments before that month's letters go out."
  },
  {
    q: "What if my letter does not arrive?",
    a: "US mail can occasionally take up to two weeks, and international deliveries can take up to six. If your letter has not arrived by the end of the month (US) or six weeks (international), email me at cynthia@innercompasstarotletters.org and I will make it right — either with a replacement or a refund. Before reaching out, please double-check that the address on your receipt is correct, as that is often the culprit!"
  },
  {
    q: "Can I gift a subscription to someone?",
    a: "Yes, and it makes such a meaningful gift! Simply choose any subscription length, enter your recipient's name and mailing address at checkout, and I will handle the rest. Each month they will receive a beautiful envelope full of tarot goodness — no wrapping required."
  },
  {
    q: "What is tarot, and do I need to believe in it?",
    a: "Tarot is a tool for reflection, not fortune-telling. You do not need to hold any particular belief — just bring an open mind. Many subscribers use their monthly letter as a journaling prompt, a moment of intentional pause, or simply a beautiful piece of mail to look forward to. The cards meet you wherever you are."
  },
  {
    q: "Do you offer readings for specific questions?",
    a: "The monthly letters use a general spread — what does this soul need right now — which tends to feel surprisingly personal. Custom one-question readings will be offered as an add-on in the future. Stay tuned!"
  },
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
                <ChevronDown size={16} className={`text-[#C4899A] flex-shrink-0 mt-1 transition-transform duration-300 ${open===i ? 'rotate-180' : ''}`}/>
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
