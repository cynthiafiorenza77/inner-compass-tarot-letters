'use client'

const items = [
  { n:'01', title:'Reading Letter', desc:'A monthly tarot reading channeled for the collective — the kind of message that has a way of landing exactly where it needs to.', accent:'#C4899A', bg:'#4A2D40' },
  { n:'02', title:'Prompt Card', desc:'Three journaling questions drawn from the month\'s reading to help you go deeper on your own terms.', accent:'#C47856', bg:'#6B4C3B' },
  { n:'03', title:'Ritual Card', desc:'A simple moon-aligned ritual — candle work, breathwork, intention setting — matched to the energy of this month\'s reading.', accent:'#8BA888', bg:'#3B5438' },
  { n:'04', title:'Affirmation Strip', desc:'A bookmark-sized affirmation drawn from the month\'s cards. Tuck it in your journal, tape it to your mirror, carry it with you.', accent:'#F9F3EC', bg:'#C47856' },
  { n:'05', title:'Monthly Surprise', desc:'A small seasonal gift — a crystal card, pressed herb, wax seal, sticker — something lovely to make you smile.', accent:'#4A2D40', bg:'#8BA888' },
]

export function WhatsInside() {
  return (
    <section id="inside" className="py-24 bg-[#4A2D40]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Every Month</p>
          <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#F9F3EC]">
            What&apos;s inside your envelope
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-[#C4899A]/30"/>
            <div className="w-1.5 h-1.5 bg-[#C47856] rotate-45"/>
            <div className="h-px w-12 bg-[#C4899A]/30"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          {items.map((item, i) => (
            <div key={i} style={{backgroundColor: item.bg}} className="p-8 min-h-[300px] flex flex-col justify-between">
              <span className="font-cormorant text-5xl font-light opacity-20" style={{color: item.accent}}>{item.n}</span>
              <div>
                <div className="w-8 h-px mb-4" style={{backgroundColor: item.accent}}/>
                <h3 className="font-cormorant text-xl italic font-light mb-3" style={{color: item.accent}}>{item.title}</h3>
                <p className="font-josefin text-xs leading-relaxed font-light" style={{color: item.accent, opacity: 0.7}}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
