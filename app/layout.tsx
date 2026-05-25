import './globals.css'
import Link from 'next/link'

const navLinks = [
  { href: '/collections', label: 'Shop' },
  { href: '/collections', label: 'Build a Pack' },
  { href: '/subscription', label: 'Subscription' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className='sticky top-0 z-30 border-b border-white/10 bg-black/75 backdrop-blur'>
          <nav className='section-wrap flex flex-wrap items-center justify-between gap-3 py-4 md:py-5'>
            <div>
              <Link href='/' className='font-black tracking-[0.2em]'>
                VIBE GRIPS
              </Link>
              <p className='text-[10px] uppercase tracking-[0.2em] text-white/60'>Colour your game</p>
            </div>
            <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85'>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className='hover:text-white'>
                  {link.label}
                </Link>
              ))}
              <button type='button' className='rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wider'>
                Cart (0)
              </button>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
