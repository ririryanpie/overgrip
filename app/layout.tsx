import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='en'><body><header className='sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur'><nav className='section-wrap flex items-center justify-between py-4'><Link href='/' className='font-black tracking-wide'>OVERGRIP</Link><div className='flex gap-4 text-sm text-white/80'><Link href='/collections'>Shop</Link><Link href='/subscription'>Subscription</Link><Link href='/about'>About</Link><Link href='/faq'>FAQ</Link><Link href='/contact'>Contact</Link></div></nav></header>{children}</body></html>
}
