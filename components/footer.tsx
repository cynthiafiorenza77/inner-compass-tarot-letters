import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()
  const nav = [['About','#about'],["What's Inside",'#inside'],['Pricing','#pricing'],['FAQ','#faq'],['Contact','#contact']]
  return (
    <footer className="bg-[#4A2D40] border-t border-[#C4899A]/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Logo column — reversed logo on dark bg */}
          <div>
            {/* Use a plum-tinted version — since logo has cream bg, we invert it or use the icon */}
            <div className="mb-5">
              <p className="font-cormorant text-2xl italic font-light text-[#F9F3EC] leading-tight">Inner Compass</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-px w-16 bg-[#8BA888]"/>
                <p className="font-josefin text-xs tracking-[0.25em] uppercase text-[#8BA888]">Tarot Letters</p>
              </div>
            </div>
            <p className="font-josefin text-xs font-light text-[#F9F3EC]/45 leading-relaxed">
              A gentle monthly tarot check-in<br/>for your next chapter.
            </p>
          </div>

          <div>
            <p className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] mb-5">Navigate</p>
            <ul className="space-y-3">
              {nav.map(([label,href]) => (
                <li key={href}><a href={href} className="font-josefin text-xs font-light text-[#F9F3EC]/45 hover:text-[#C4899A] transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] mb-5">Connect</p>
            <a href="mailto:cynthia@innercompasstarotletters.org" className="font-josefin text-xs font-light text-[#F9F3EC]/45 hover:text-[#C4899A] transition-colors mb-5 block">
              cynthia@innercompasstarotletters.org
            </a>
            <div className="flex gap-5">
              <a href="#" className="font-josefin text-xs font-light tracking-widest uppercase text-[#F9F3EC]/35 hover:text-[#C4899A] transition-colors">TikTok</a>
              <a href="#" className="font-josefin text-xs font-light tracking-widest uppercase text-[#F9F3EC]/35 hover:text-[#C4899A] transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#C4899A]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-josefin text-xs font-light text-[#F9F3EC]/25">© {year} Inner Compass Tarot Letters. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-josefin text-xs font-light text-[#F9F3EC]/25 hover:text-[#C4899A] transition-colors">Privacy</a>
            <a href="#" className="font-josefin text-xs font-light text-[#F9F3EC]/25 hover:text-[#C4899A] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
