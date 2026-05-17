import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Button({ href, children, variant='primary' }: { href:string; children:React.ReactNode; variant?:'primary'|'ghost' }) {
  return <Link href={href} className={cn('inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition', variant==='primary'?'bg-accent-neon text-black hover:scale-105':'border border-white/30 hover:border-accent-cyan hover:text-accent-cyan')}>{children}</Link>
}
