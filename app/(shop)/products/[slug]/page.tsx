import Image from 'next/image'
import { notFound } from 'next/navigation'
import { products } from '@/data/products'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return notFound()
  return <main className='section-wrap'><div className='grid gap-8 md:grid-cols-2'><Image src={product.images[0]} alt={product.name} width={900} height={900} className='h-[520px] w-full rounded-3xl object-cover'/><div><p className='text-sm uppercase tracking-wider text-accent-cyan'>{product.collection}</p><h1 className='mt-2 text-4xl font-black'>{product.name}</h1><p className='mt-2 text-white/70'>{product.description}</p><p className='mt-3 text-2xl text-accent-neon'>${product.price}</p><div className='mt-6 space-y-2'>{product.features.map(f=><p key={f}>• {f}</p>)}</div><div className='mt-8 rounded-2xl border border-white/10 p-5'><p className='font-bold'>Subscribe & save 20%</p><p className='text-white/70'>Monthly restock, cancel anytime.</p></div></div></div></main>
}
