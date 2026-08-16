'use client'

// TODO: Replace with the live Stripe Payment Link for "Your Year Ahead — $197 one-time"
const YEAR_AHEAD_CHECKOUT_URL = 'https://buy.stripe.com/9B65kwaJ3aWZ1JS5rZdEs08'

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#4A2D40]">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Ready?</p>
        <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#F9F3EC] mb-10">
          Ready to See What Your Year Holds?
        </h2>

        <div className="border border-[#F9F3EC]/15 p-10 bg-[#F9F3EC]/5">
          <h3 className="font-cormorant text-2xl italic font-light text-[#F9F3EC] mb-3">Your Year Ahead</h3>
          <p className="font-josefin text-sm font-light text-[#F9F3EC]/60 mb-1">
            Personalized 30–45 minute Tarot &amp; intuitive video reading
          </p>
          <p className="font-josefin text-sm font-light text-[#F9F3EC]/60 mb-1">
            + 2–3 page Year Ahead Guide
          </p>
          <p className="font-josefin text-sm font-light text-[#F9F3EC]/60 mb-8">
            + one clarification question
          </p>

          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="font-cormorant text-6xl font-light text-[#F9F3EC]">$197</span>
          </div>
          <p className="font-josefin text-xs tracking-[0.25em] uppercase text-[#C47856] mb-8">
            Founding Client Price
          </p>

          <a
            href={YEAR_AHEAD_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-josefin text-xs tracking-widest uppercase px-6 py-4 bg-[#C47856] text-[#F9F3EC] hover:bg-[#C4899A] transition-colors duration-300"
          >
            Get My Year Ahead Reading
          </a>
        </div>

        <p className="font-josefin text-xs font-light text-[#F9F3EC]/35 mt-8 leading-relaxed">
          The founding price is available for a limited number of initial readings and may increase in the future.
        </p>
      </div>
    </section>
  )
}
