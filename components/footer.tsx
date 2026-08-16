export function Footer() {
  const year = new Date().getFullYear()
  const nav = [['The Offer','#offer'],['About','#about'],['FAQ','#faq'],['Contact','#contact']]
  return (
    <footer className="bg-[#4A2D40] border-t border-[#C4899A]/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          <div>
            <p className="font-cormorant text-2xl italic font-light text-[#F9F3EC] leading-tight mb-5">Inner Compass Tarot</p>
            <p className="font-josefin text-xs font-light text-[#F9F3EC]/45 leading-relaxed">
              A personalized Tarot &amp; intuitive<br/>reading for your year ahead.
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

        {/* Disclaimer */}
        <div className="border-t border-[#C4899A]/10 pt-8 mb-6">
          <p className="font-josefin text-xs font-light text-[#F9F3EC]/30 leading-relaxed text-center max-w-3xl mx-auto">
            Inner Compass Tarot is intended for entertainment, personal insight and reflection purposes only. Tarot and intuitive readings are not a substitute for professional medical, legal, financial, or psychological advice. By purchasing a reading, you acknowledge that it is for inspirational and self-exploratory purposes and does not guarantee future events or outcomes.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C4899A]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-josefin text-xs font-light text-[#F9F3EC]/25">© {year} Inner Compass Tarot. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-josefin text-xs font-light text-[#F9F3EC]/25 hover:text-[#C4899A] transition-colors">Privacy</a>
            <a href="#" className="font-josefin text-xs font-light text-[#F9F3EC]/25 hover:text-[#C4899A] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
