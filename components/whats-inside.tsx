'use client'

const receiveItems = [
  { n:'01', title:'A 30–45 Minute Private Video Reading', desc:'A recorded Tarot and intuitive reading created specifically for you that you can watch privately and revisit whenever you’d like.', accent:'#C4899A', bg:'#4A2D40' },
  { n:'02', title:'Your Big-Picture Reading', desc:'We’ll explore the overall energy surrounding your year along with themes involving areas such as love and relationships, career and money, personal growth, challenges and opportunities.', accent:'#C47856', bg:'#6B4C3B' },
  { n:'03', title:'Your 12-Month Forecast', desc:'We’ll move through the coming 12 months and explore the cards, themes and intuitive impressions surrounding each part of your year.', accent:'#8BA888', bg:'#3B5438' },
  { n:'04', title:'A 2–3 Page Year Ahead Guide', desc:'A written reference guide summarizing your important cards, major themes, life-area insights, month-by-month highlights and key takeaways.', accent:'#F9F3EC', bg:'#C47856' },
  { n:'05', title:'One Clarification Question', desc:'After receiving your reading, you may send one follow-up question asking me to clarify something already covered. This does not include a new topic or an additional reading.', accent:'#4A2D40', bg:'#8BA888' },
]

export function WhatsInside() {
  return (
    <>
      {/* THE OFFER */}
      <section id="offer" className="py-24 bg-[#F9F3EC]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">The Offer</p>
          <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40] mb-8">
            What Is Your Year Ahead?
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#C4899A]/30"/>
            <div className="w-1.5 h-1.5 bg-[#C47856] rotate-45"/>
            <div className="h-px w-12 bg-[#C4899A]/30"/>
          </div>

          <div className="text-left space-y-5">
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              Your Year Ahead is a private, personalized Tarot and intuitive reading created specifically for you.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              We&apos;ll begin with the bigger picture — the overall energy surrounding your year and what comes through around important areas such as relationships, career and money, personal growth, challenges and opportunities.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              Then we&apos;ll move through the next 12 months to explore the themes and energies that may unfold throughout your year.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              I don&apos;t approach Tarot as simply a set of card meanings to interpret. The cards are a tool of divination within a larger intuitive process.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              As your reading unfolds, I also pay attention to intuitive and mediumistic impressions that arise naturally.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              You can tell me what&apos;s happening in your life and what you&apos;d especially like me to explore — or you can tell me absolutely nothing and ask me to <span className="italic text-[#4A2D40]">go in cold and tell you what I see.</span>
            </p>
            <p className="font-cormorant text-lg italic text-[#C4899A]">The choice is yours.</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="py-24 bg-[#4A2D40]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">What You Receive</p>
            <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#F9F3EC]">
              Your $197 Year Ahead Reading Includes
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-12 bg-[#C4899A]/30"/>
              <div className="w-1.5 h-1.5 bg-[#C47856] rotate-45"/>
              <div className="h-px w-12 bg-[#C4899A]/30"/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5">
            {receiveItems.map((item, i) => (
              <div key={i} style={{backgroundColor: item.bg}} className="p-8 min-h-[300px] flex flex-col justify-between">
                <span className="font-cormorant text-5xl font-light opacity-20" style={{color: item.accent}}>{item.n}</span>
                <div>
                  <div className="w-8 h-px mb-4" style={{backgroundColor: item.accent}}/>
                  <h3 className="font-cormorant text-lg italic font-light mb-3 leading-snug" style={{color: item.accent}}>{item.title}</h3>
                  <p className="font-josefin text-xs leading-relaxed font-light" style={{color: item.accent, opacity: 0.7}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-josefin text-xs font-light text-[#F9F3EC]/40 text-center mt-10">
            Delivery within 5 business days · Delivered electronically to the email address provided with your order
          </p>
        </div>
      </section>
    </>
  )
}
