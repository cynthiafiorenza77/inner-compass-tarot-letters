export function Footer() {
  const year = new Date().getFullYear()
  const nav = [['About','#about'],["What's Inside",'#inside'],['Pricing','#pricing'],['FAQ','#faq'],['Contact','#contact']]
  return (
    <footer className="bg-[#4A2D40] border-t border-[#C4899A]/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="mb-4">
              <circle cx="16" cy="16" r="14" stroke="#C4899A" strokeWidth="0.8"/>
              <path d="M16 4 L17.4 14.6 L16 16 L14.6 14.6 Z" fill="#C47856"/>
              <path d="M16 28 L17.4 17.4 L16 16 L14.6 17.4 Z" fill="#C4899A"/>
              <path d="M4 16 L14.6 14.6 L16 16 L14.6 17.4 Z" fill="#C4899A"/>
              <path d="M28 16 L17.4 14.6 L16 16 L17.4 17.4 Z" fill="#C4899A"/>
              <circle cx="16" cy="16" r="2.5" fill="#C4899A"/>
            </svg>
            <h3 className="font-cormorant text-xl italic font-light text-[#F9F3EC] mb-1">Inner Compass</h3>
            <p className="font-josefin text-xs tracking-widest uppercase text-[#C4899A] mb-4">Tarot Letters</p>
            <p className="font-josefin text-xs font-light text-[#F9F3EC]/45 leading-relaxed">A gentle monthly tarot check-in<br/>for your next chapter.</p>
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
