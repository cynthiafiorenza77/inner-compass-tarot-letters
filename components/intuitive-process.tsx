'use client'

export function IntuitiveProcess() {
  return (
    <section className="py-24 bg-[#6B4C3B]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-josefin text-xs tracking-[0.3em] uppercase text-[#C4899A] mb-4">Your Process</p>
        <h2 className="font-cormorant text-4xl md:text-5xl italic font-light text-[#F9F3EC] mb-8">
          Want Me to Go In Cold?
        </h2>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-[#C4899A]/30"/>
          <div className="w-1.5 h-1.5 bg-[#C47856] rotate-45"/>
          <div className="h-px w-12 bg-[#C4899A]/30"/>
        </div>

        <p className="font-josefin text-sm leading-loose text-[#F9F3EC]/75 font-light mb-6">
          You don&apos;t have to tell me your whole story before I read for you.
        </p>
        <p className="font-josefin text-sm leading-loose text-[#F9F3EC]/75 font-light mb-10">
          After purchasing, you&apos;ll have the choice to either give me some background and tell me what areas you&apos;d especially like explored, or ask me to go in cold with little or no background information.
        </p>

        <div className="border border-[#F9F3EC]/15 p-8 text-left">
          <h3 className="font-cormorant text-xl italic font-light text-[#C4899A] mb-3">Optional Photo</h3>
          <p className="font-josefin text-sm leading-loose text-[#F9F3EC]/70 font-light">
            If you&apos;d like, you may upload a recent photo of yourself. I sometimes like having a photograph to focus on as part of my intuitive process while preparing a reading.
          </p>
          <p className="font-josefin text-sm leading-loose text-[#F9F3EC]/70 font-light mt-4">
            This is completely optional. You can absolutely choose to have me go in cold without providing a photograph.
          </p>
        </div>
      </div>
    </section>
  )
}
