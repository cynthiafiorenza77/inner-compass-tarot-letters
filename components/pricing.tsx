'use client'
import { Check } from 'lucide-react'

const plans = [
  {
    name:'Digital', price:'$9', period:'/month',
    desc:'PDF reading delivered to your inbox each month.',
    features:['Monthly tarot reading (PDF)','Digital prompt card','Digital ritual guide','Digital affirmation strip','Subscriber-only content'],
    cta:'Start Digital', featured:false,
  },
  {
    name:'Physical', price:'$15', period:'/month',
    desc:'Everything printed and mailed to your door.',
    features:['Handwritten reading letter','Printed prompt card','Printed ritual card','Affirmation bookmark strip','Monthly surprise gift','Wax-sealed envelope'],
    cta:'Get Physical Letters', featured:true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F9F3EC]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Investment</p>
          <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40]">Choose your path</h2>
        </div>

        <div className="grid md:grid-cols-2 border border-[#C4899A]/20">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 flex flex-col ${plan.featured ? 'bg-[#4A2D40]' : 'bg-[#F9F3EC] border-r border-[#C4899A]/20'}`}>
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C47856] px-4 py-1">
                  <span className="font-josefin text-xs tracking-widest uppercase text-[#F9F3EC]">Most Popular</span>
                </div>
              )}
              <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-2">{plan.name}</p>
              <div className="flex items-end gap-1 mb-2">
                <span className={`font-cormorant text-6xl font-light ${plan.featured ? 'text-[#F9F3EC]' : 'text-[#4A2D40]'}`}>{plan.price}</span>
                <span className="font-josefin text-sm mb-3 text-[#C4899A]">{plan.period}</span>
              </div>
              <p className={`font-josefin text-xs leading-relaxed mb-8 font-light ${plan.featured ? 'text-[#F9F3EC]/65' : 'text-[#6B4C3B]'}`}>{plan.desc}</p>
              <div className={`h-px mb-8 ${plan.featured ? 'bg-[#C4899A]/25' : 'bg-[#C4899A]/20'}`}/>
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={13} className="text-[#8BA888] mt-0.5 flex-shrink-0"/>
                    <span className={`font-josefin text-xs font-light ${plan.featured ? 'text-[#F9F3EC]/75' : 'text-[#6B4C3B]'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`font-josefin text-xs tracking-widest uppercase text-center py-4 transition-colors duration-300 ${
                plan.featured ? 'bg-[#C47856] text-[#F9F3EC] hover:bg-[#C4899A]' : 'border border-[#4A2D40] text-[#4A2D40] hover:bg-[#4A2D40] hover:text-[#F9F3EC]'
              }`}>{plan.cta}</a>
            </div>
          ))}
        </div>

        <p className="text-center font-josefin text-xs font-light text-[#6B4C3B] mt-8">
          Cancel anytime &nbsp;·&nbsp; Ships 5–7 business days &nbsp;·&nbsp; US only for physical
        </p>
      </div>
    </section>
  )
}
