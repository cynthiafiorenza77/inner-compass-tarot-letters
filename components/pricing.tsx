'use client'

const usPlans = [
  { duration: 'Monthly', price: '$11', billing: 'billed every month', href: 'https://buy.stripe.com/3cI6oA4kF4yB9ckaMjdEs00' },
  { duration: 'Quarterly', price: '$33', billing: 'billed every 3 months', href: 'https://buy.stripe.com/8x200c8AVd5774c2fNdEs01' },
  { duration: 'Semi-Annual', price: '$66', billing: 'billed every 6 months', href: 'https://buy.stripe.com/5kQ7sE04pfdf88g9IfdEs02' },
  { duration: 'Annual', price: '$132', billing: 'billed every year', href: 'https://buy.stripe.com/dRm4gsbN7fdfcow2fNdEs03' },
]

const intlPlans = [
  { duration: 'Monthly', price: '$16', billing: 'billed every month', href: 'https://buy.stripe.com/3cIdR218tghjdsA9IfdEs04' },
  { duration: 'Quarterly', price: '$48', billing: 'billed every 3 months', href: 'https://buy.stripe.com/14A4gsg3nd572NW3jRdEs05' },
  { duration: 'Semi-Annual', price: '$96', billing: 'billed every 6 months', href: 'https://buy.stripe.com/aFabIU4kFd57bksdYvdEs06' },
  { duration: 'Annual', price: '$192', billing: 'billed every year', href: 'https://buy.stripe.com/9B600cdVfc13gEMaMjdEs07' },
]

function PlanCard({ plan, index }: { plan: typeof usPlans[0], index: number }) {
  const isFirst = index === 0
  return (
    <div className={`border border-[#F9F3EC]/15 p-8 flex flex-col justify-between ${isFirst ? 'bg-[#F9F3EC]/10' : ''}`}>
      <div>
        <p className="font-josefin text-xs tracking-[0.25em] uppercase text-[#C4899A] mb-4">{plan.duration}</p>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-cormorant text-5xl font-light text-[#F9F3EC]">{plan.price}</span>
          <span className="font-josefin text-xs text-[#F9F3EC]/50">/mo</span>
        </div>
        <p className="font-josefin text-xs text-[#F9F3EC]/40 font-light">{plan.billing}</p>
      </div>
      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block text-center font-josefin text-xs tracking-widest uppercase px-6 py-4 border border-[#F9F3EC]/30 text-[#F9F3EC] hover:bg-[#F9F3EC] hover:text-[#4A2D40] transition-colors duration-300"
      >
        Subscribe
      </a>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#4A2D40]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Join the Letter Club</p>
          <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#F9F3EC]">
            Choose your subscription
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-[#C4899A]/30"/>
            <div className="w-1.5 h-1.5 bg-[#C47856] rotate-45"/>
            <div className="h-px w-12 bg-[#C4899A]/30"/>
          </div>
        </div>

        {/* US Plans */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#F9F3EC]/10"/>
            <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A]">United States</p>
            <div className="h-px flex-1 bg-[#F9F3EC]/10"/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F9F3EC]/10">
            {usPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i}/>)}
          </div>
        </div>

        {/* International Plans */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#F9F3EC]/10"/>
            <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A]">International</p>
            <div className="h-px flex-1 bg-[#F9F3EC]/10"/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F9F3EC]/10">
            {intlPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i}/>)}
          </div>
        </div>

        {/* Gift section */}
        <div className="border border-[#F9F3EC]/15 p-8 text-center">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-3">Give the Gift of Guidance</p>
          <h3 className="font-cormorant text-2xl italic font-light text-[#F9F3EC] mb-3">Gift a subscription</h3>
          <p className="font-josefin text-xs font-light text-[#F9F3EC]/50 max-w-md mx-auto mb-6">
            Choose any plan, enter your recipient's name and address at checkout, and I'll handle the rest. Available in 3-month, 6-month, and 1-year options.
          </p>
          <a href="mailto:cynthia@innercompasstarotletters.org" className="flex-shrink-0 font-josefin text-xs tracking-widest uppercase px-8 py-4 bg-[#C47856] text-[#F9F3EC] hover:bg-[#C4899A] transition-colors duration-300 inline-block">
            Inquire About Gifting
          </a>
        </div>

        {/* Footer note */}
        <p className="font-josefin text-xs font-light text-[#F9F3EC]/30 text-center mt-10">
          US letters ship the 15th of each month · International delivery 2–6 weeks · Cancel anytime by email
        </p>

      </div>
    </section>
  )
}
