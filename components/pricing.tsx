'use client'

const usPlans = [
  { duration: 'Monthly', price: '$11', sub: 'per month, cancel anytime', href: '#' },
  { duration: '3 Months', price: '$33', sub: 'one-time payment', href: '#' },
  { duration: '6 Months', price: '$66', sub: 'one-time payment', href: '#' },
  { duration: '1 Year', price: '$132', sub: 'one-time payment', href: '#' },
]

const intlPlans = [
  { duration: 'Monthly', price: '$16', sub: 'per month, cancel anytime', href: '#' },
  { duration: '3 Months', price: '$48', sub: 'one-time payment', href: '#' },
  { duration: '6 Months', price: '$96', sub: 'one-time payment', href: '#' },
  { duration: '1 Year', price: '$192', sub: 'one-time payment', href: '#' },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F9F3EC]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Subscribe</p>
          <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40] mb-4">
            Choose your subscription
          </h2>
          <p className="font-josefin text-sm font-light text-[#6B4C3B] max-w-lg mx-auto leading-relaxed">
            Every envelope includes your tarot reading letter, prompt card, ritual card, affirmation strip, and a monthly surprise — mailed straight to your door.
          </p>
        </div>

        {/* US Subscriptions */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#C4899A]/20"/>
            <span className="font-josefin text-xs tracking-[0.25em] uppercase text-[#4A2D40]">United States — $11 / month</span>
            <div className="h-px flex-1 bg-[#C4899A]/20"/>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#C4899A]/20">
            {usPlans.map((plan, i) => (
              <a key={i} href={plan.href}
                className={`group p-7 flex flex-col justify-between min-h-[180px] hover:bg-[#4A2D40] transition-colors duration-300 ${i < 3 ? 'border-r border-[#C4899A]/20' : ''}`}>
                <div>
                  <p className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] group-hover:text-[#C4899A] mb-3">{plan.duration}</p>
                  <p className="font-cormorant text-4xl font-light text-[#4A2D40] group-hover:text-[#F9F3EC]">{plan.price}</p>
                  <p className="font-josefin text-xs font-light text-[#6B4C3B] group-hover:text-[#F9F3EC]/60 mt-1">{plan.sub}</p>
                </div>
                <span className="font-josefin text-xs tracking-widest uppercase text-[#C47856] group-hover:text-[#C4899A] mt-4">
                  Subscribe →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* International */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#C4899A]/20"/>
            <span className="font-josefin text-xs tracking-[0.25em] uppercase text-[#4A2D40]">International — $16 / month</span>
            <div className="h-px flex-1 bg-[#C4899A]/20"/>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#C4899A]/20">
            {intlPlans.map((plan, i) => (
              <a key={i} href={plan.href}
                className={`group p-7 flex flex-col justify-between min-h-[180px] hover:bg-[#4A2D40] transition-colors duration-300 ${i < 3 ? 'border-r border-[#C4899A]/20' : ''}`}>
                <div>
                  <p className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] mb-3">{plan.duration}</p>
                  <p className="font-cormorant text-4xl font-light text-[#4A2D40] group-hover:text-[#F9F3EC]">{plan.price}</p>
                  <p className="font-josefin text-xs font-light text-[#6B4C3B] group-hover:text-[#F9F3EC]/60 mt-1">{plan.sub}</p>
                </div>
                <span className="font-josefin text-xs tracking-widest uppercase text-[#C47856] group-hover:text-[#C4899A] mt-4">
                  Subscribe →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Gift note */}
        <div className="border border-[#C4899A]/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-cormorant text-2xl italic font-light text-[#4A2D40] mb-1">Gift to a friend 🎁</p>
            <p className="font-josefin text-sm font-light text-[#6B4C3B]">
              Choose any plan above and enter your recipient's address at checkout. A tarot letter is one of the most thoughtful gifts you can send.
            </p>
          </div>
          <a href="#" className="flex-shrink-0 font-josefin text-xs tracking-widest uppercase px-8 py-4 bg-[#C47856] text-[#F9F3EC] hover:bg-[#C4899A] transition-colors duration-300 whitespace-nowrap">
            Gift a Subscription
          </a>
        </div>

        <p className="text-center font-josefin text-xs font-light text-[#6B4C3B] mt-8">
          US letters ship the 1st of each month · International delivery 2–6 weeks · Cancel anytime by email
        </p>
      </div>
    </section>
  )
}
