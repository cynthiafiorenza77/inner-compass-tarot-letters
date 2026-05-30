'use client'
import Image from 'next/image'

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

          {/* Photo */}
          <div className="relative flex justify-center">
            {/* Offset decorative border */}
            <div className="absolute top-5 left-5 w-72 h-96 border border-[#C4899A]/25"/>
            {/* Photo */}
            <div className="relative w-72 h-96 overflow-hidden">
              <Image
                src="/cynthia.jpg"
                alt="Cynthia — Inner Compass Tarot Letters"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            {/* Name tag */}
            <div className="absolute -bottom-4 right-6 bg-[#8BA888] px-4 py-2">
              <span className="font-josefin text-xs tracking-widest uppercase text-[#F9F3EC]">Cynthia</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40] leading-tight mb-6">
              A letter that finds<br/>you where you are.
            </h2>
            <div className="w-10 h-px bg-[#C47856] mb-7"/>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] mb-5 font-light">
              After years in the classroom, I found myself at a crossroads — the kind tarot knows well. The cards did not just give me answers; they gave me the language to ask better questions.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] mb-5 font-light">
              Inner Compass Tarot Letters was born from that turning point. Each month, I pull cards with intention, channel a reading for the collective, and mail it straight to your door — alongside a prompt card, a ritual guide, and a few small surprises.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              Tarot has a way of speaking directly to whoever needs to hear it. This letter is not addressed to everyone — it is waiting for you.
            </p>
            <p className="font-cormorant text-2xl italic text-[#C4899A] mt-8">With love, Cynthia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
