import type { Metadata } from 'next'
import { Cormorant_Garamond, Josefin_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: 'Inner Compass Tarot Letters',
  description: 'A gentle monthly tarot check-in for your next chapter.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${josefin.variable}`}>
      <body>{children}</body>
    </html>
  )
}
