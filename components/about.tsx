'use client'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F9F3EC]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-[#C4899A]/25"/>
          <span className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A]">About Cynthia</span>
          <div className="h-px flex-1 bg-[#C4899A]/25"/>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative flex justify-center">
            <div className="absolute top-5 left-5 w-72 h-96 border border-[#C4899A]/25"/>
            <div className="relative w-72 h-96 overflow-hidden">
              <Image
                src="/cynthia.jpg"
                alt="Cynthia — Inner Compass Tarot"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            <div className="absolute -bottom-4 right-6 bg-[#8BA888] px-4 py-2">
              <span className="font-josefin text-xs tracking-widest uppercase text-[#F9F3EC]">Cynthia</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#4A2D40] leading-tight mb-6">
              Hi, I&apos;m Cynthia.
            </h2>
            <div className="w-10 h-px bg-[#C47856] mb-7"/>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] mb-5 font-light">
              My connection to intuitive work started with my mother, who was a psychic medium.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] mb-5 font-light">
              Wanting to understand and develop those abilities for myself, I studied at the Holistic Studies Institute, where I learned to develop my intuitive abilities and also became a Reiki practitioner.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] mb-5 font-light">
              Tarot came differently. I&apos;m self-taught because I&apos;ve never viewed Tarot as simply a system of card meanings to memorize. For me, the cards are a tool of divination — a starting point that works alongside my intuitive and mediumistic abilities.
            </p>
            <p className="font-josefin text-sm leading-loose text-[#6B4C3B] font-light">
              That&apos;s why my readings can go beyond the cards themselves. I pay attention to what I see, feel, hear, sense and intuitively pick up as the reading unfolds.
            </p>
            <p className="font-cormorant text-2xl italic text-[#C4899A] mt-8">With love, Cynthia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
