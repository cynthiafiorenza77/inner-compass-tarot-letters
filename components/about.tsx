'use client'

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F9F3EC]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-[#C4899A]/25"/>
          <span className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A]">The Story</span>
          <div className="h-px flex-1 bg-[#C4899A]/25"/>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute top-5 left-5 w-64 h-80 border border-[#C4899A]/25"/>
            <div className="relative w-64 h-80 bg-[#4A2D40] flex flex-col items-center justify-center gap-3">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#C4899A" strokeWidth="0.8"/>
                <path d="M24 5 L25.4 22 L24 24 L22.6 22 Z" fill="#C47856"/>
                <path d="M24 43 L25.4 26 L24 24 L22.6 26 Z" fill="#C4899A"/>
                <path d="M5 24 L22 22.6 L24 24 L22 25.4 Z" fill="#C4899A"/>
                <path d="M43 24 L26 22.6 L24 24 L26 25.4 Z" fill="#C4899A"/>
                <circle cx="24" cy="24" r="3" fill="#C4899A"/>
              </svg>
              <span className="font-josefin text-xs tracking-widest uppercase text-[#C4899A]/50">Your photo here</span>
            </div>
            <div className="absolute -bottom-4 right-6 bg-[#8BA888] px-4 py-2">
              <span className="font-josefin text-xs tracking-widest uppercase text-[#F9F3EC]">Cynthia</span>
            </div>
          </div>

          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40] leading-tight mb-6">
              A letter written<br/>just for you.
            </h2>
            <div className="w-10 h-px bg-[#C47856] mb-7"/>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] mb-5 font-light">
              After years in the classroom, I found myself at a crossroads — the kind tarot knows well. The cards did not just give me answers; they gave me the language to ask better questions.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] mb-5 font-light">
              Inner Compass Tarot Letters was born from that turning point. Each month, I pull cards with intention, write you a personal reading, and mail it straight to your door — alongside a prompt card, a ritual guide, and a few small surprises.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              This is not a newsletter. It is a conversation between you and the cards, held inside an envelope.
            </p>
            <p className="font-cormorant text-2xl italic text-[#C4899A] mt-8">With love, Cynthia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
