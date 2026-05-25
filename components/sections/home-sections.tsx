import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'

const pricing = {
  singleTrialPackAud: 9.95,
  starter3PackAud: 19.95,
  buildYourOwn3PackAud: 24.95,
  value6PackAud: 39.95,
  shippingAud: 6.95,
  freeShippingThresholdAud: 59
}

const showReviews = false

const compatibilityNote = 'Suitable for tennis, padel, pickleball, squash, and badminton racquets.'

const bestSellers = [
  {
    name: 'Single Trial Pack',
    slug: products[0].slug,
    image: products[0].images[0],
    packSize: '1 grip',
    price: pricing.singleTrialPackAud,
    description: 'Try the feel, tack, and style before building your bundle.'
  },
  {
    name: '3 Pack Starter Bundle',
    slug: products[1].slug,
    image: products[1].images[0],
    packSize: '3 grips',
    price: pricing.starter3PackAud,
    description: 'A fast start with fan-favourite designs and everyday court feel.'
  },
  {
    name: 'Build Your Own 3 Pack',
    slug: '/collections',
    image: products[2].images[0],
    packSize: '3 grips',
    price: pricing.buildYourOwn3PackAud,
    description: 'Pick any 3 designs to match your racquet, outfit, and mood.'
  },
  {
    name: '6 Pack Value Bundle',
    slug: '/collections',
    image: products[0].images[4],
    packSize: '6 grips',
    price: pricing.value6PackAud,
    description: 'Best value for weekly hitters who rotate fresh wraps often.'
  }
]

const reviews = [
  {
    name: '{Placeholder} Alex R.',
    rating: 5,
    quote: 'Finally found a grip that looks bold and still feels secure in rallies.',
    playerType: 'Club player',
    reviewed: 'Neon Tiger Pro',
    photo: '/images/products/neon-tiger/neon-tiger-inhand-04.png'
  },
  {
    name: '{Placeholder} Mia L.',
    rating: 5,
    quote: 'The gradient colorways make my racquet feel like part of my kit.',
    playerType: 'Padel player',
    reviewed: 'Sunset Gradient',
    photo: '/images/products/sunset-gradient/sunset-gradient-inhand-04.png'
  }
]

export function HeroSection() {
  return (
    <section className='section-wrap pt-10'>
      <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-surface'>
        <Image
          src='/images/hero/hero-main-01.png'
          alt='Premium overgrip hero featuring racquet and bold colourways'
          width={2400}
          height={1600}
          className='h-[620px] w-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/35' />
        <div className='absolute inset-0 p-6 md:p-14'>
          <p className='text-xs uppercase tracking-[0.2em] text-white/70'>Vibe Grips · Colour your game</p>
          <p className='text-xs uppercase tracking-[0.2em] text-white/70'>Street Performance Overgrips</p>
          <h1 className='mt-4 text-4xl font-black leading-tight md:text-7xl'>
            Your racquet.
            <br />
            Your style.
          </h1>
          <p className='mt-4 max-w-xl text-white/75'>
            Vibe Grips makes premium tennis overgrips in bold limited colourways, built for players who want performance feel without boring design.
            Premium tennis overgrips in bold limited colourways, built for players who want performance feel without boring design.
          </p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Button href='/collections'>Shop Best Sellers</Button>
            <Button href='/collections' variant='ghost'>
              Build a 3 Pack
            </Button>
          </div>
          <div className='mt-10 grid gap-4 md:grid-cols-3'>
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className='rounded-2xl border border-white/15 bg-black/45 p-3 backdrop-blur hover:border-accent-cyan'>
                <Image src={product.images[0]} alt={product.name} width={500} height={500} className='h-36 w-full rounded-xl object-cover' />
                <p className='mt-2 font-semibold'>{product.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContentSections() {
  return (
    <>
      <section className='section-wrap pt-6'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <h2 className='text-3xl font-black'>Best sellers</h2>
          <p className='rounded-full border border-accent-neon/40 bg-accent-neon/10 px-4 py-2 text-sm text-accent-neon'>
            Free shipping over AUD {pricing.freeShippingThresholdAud}
          </p>
        </div>
        <div className='mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {bestSellers.map((item) => (
            <article key={item.name} className='rounded-2xl border border-white/10 bg-surface p-3'>
              <Image src={item.image} alt={`${item.name} product card image`} width={800} height={800} className='h-52 w-full rounded-xl object-cover' />
              <h3 className='mt-3 text-lg font-bold'>{item.name}</h3>
              <p className='text-sm text-white/65'>Pack size: {item.packSize}</p>
              <p className='mt-1 text-lg font-semibold text-accent-neon'>AUD {item.price.toFixed(2)}</p>
              <p className='mt-2 text-sm text-white/70'>{item.description}</p>
              <p className='mt-2 text-xs text-white/60'>{compatibilityNote}</p>
              <div className='mt-4'>
                <Button href={item.slug.startsWith('/') ? item.slug : `/products/${item.slug}`}>Shop</Button>
              </div>
            </article>
          ))}
        </div>
        <p className='mt-3 text-sm text-white/65'>
          Shipping: AUD {pricing.shippingAud.toFixed(2)} · Free shipping threshold: AUD {pricing.freeShippingThresholdAud}
        </p>
      </section>

      <section className='section-wrap'>
        <div className='rounded-3xl border border-white/10 bg-surface p-8 md:p-10'>
          <h2 className='text-3xl font-black'>Build your own 3 pack</h2>
          <p className='mt-3 max-w-3xl text-white/75'>
            Choose any 3 overgrips. Mix wild prints, gradients, and core colours to match your racquet, outfit, or mood.
          </p>
          <div className='mt-8 grid gap-4 md:grid-cols-3'>
            {['Pick your designs', 'Choose your pack size', 'Wrap and play'].map((step, idx) => (
              <div key={step} className='rounded-2xl border border-white/10 bg-black/30 p-5'>
                <p className='text-xs uppercase tracking-wider text-accent-cyan'>Step {idx + 1}</p>
                <p className='mt-2 font-semibold'>{step}</p>
              </div>
            ))}
          </div>
          <div className='mt-6 flex flex-wrap gap-3'>
            {products.map((product) => (
              <div key={product.id} className='rounded-full border border-white/15 px-4 py-2 text-sm'>
                {product.name}
              </div>
            ))}
          </div>
          <div className='mt-7'>
            <Button href='/collections'>Build My Pack</Button>
          </div>
        </div>
      </section>

      <section className='section-wrap'>
        <h2 className='text-3xl font-black'>Why switch from boring grips?</h2>
        <p className='mt-3 max-w-3xl text-white/75'>
          Most overgrips look the same: black, white, blue, pink, or yellow. This brand gives players the same everyday performance feel in designs that actually add personality to the racquet.
        </p>
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          {['Express your style', 'Match your gear', 'Stand out on court'].map((item) => (
            <div key={item} className='rounded-2xl border border-white/10 bg-surface p-6'>
              <h3 className='font-bold'>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className='section-wrap'>
        <h2 className='text-3xl font-black'>Performance benefits</h2>
        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          {[
            {
              title: 'Sweat control',
              copy: 'Designed to help maintain grip confidence during hot sessions and long rallies.'
            },
            { title: 'Cushioned comfort', copy: 'A soft wrap feel made for everyday hitting, training, and match play.' },
            { title: 'Tacky feel', copy: 'Built for players who like a secure, connected racquet feel.' },
            {
              title: 'Made for repeated sessions',
              copy: 'Durable enough for regular play, with easy replacement when it is time for a fresh wrap.'
            }
          ].map((benefit) => (
            <div key={benefit.title} className='rounded-2xl border border-white/10 bg-surface p-6'>
              <h3 className='font-bold'>{benefit.title}</h3>
              <p className='mt-2 text-white/70'>{benefit.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='section-wrap'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <h2 className='text-3xl font-black'>Style collections</h2>
          <Button href='/collections' variant='ghost'>
            Explore Collections
          </Button>
        </div>
        <div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {[
            { name: 'Wildline', desc: 'Tiger, leopard, and animal inspired designs.' },
            { name: 'Gradients', desc: 'Bright colour blends and expressive court ready palettes.' },
            { name: 'Neon Core', desc: 'Black based designs with neon highlights.' },
            { name: 'Core Mono', desc: 'Cleaner everyday options for players who prefer a minimal look.' }
          ].map((collection) => (
            <div key={collection.name} className='rounded-2xl border border-white/10 bg-surface p-6'>
              <h3 className='font-bold'>{collection.name}</h3>
              <p className='mt-2 text-white/70'>{collection.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='section-wrap'>
        {showReviews ? (
          <>
            <h2 className='text-3xl font-black'>Player feedback</h2>
            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {reviews.map((review) => (
                <article key={review.name} className='rounded-2xl border border-white/10 bg-surface p-6'>
                  <div className='flex items-center gap-4'>
                    <Image src={review.photo} alt={`${review.name} review placeholder`} width={80} height={80} className='h-16 w-16 rounded-full object-cover' />
                    <div>
                      <p className='font-semibold'>{review.name}</p>
                      <p className='text-xs text-white/65'>
                        {review.playerType} · {review.reviewed}
                      </p>
                    </div>
                  </div>
                  <p className='mt-3 text-yellow-300'>{'★'.repeat(review.rating)}</p>
                  <p className='mt-2 text-white/75'>“{review.quote}”</p>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className='rounded-3xl border border-white/10 bg-surface p-8'>
            <h2 className='text-2xl font-black'>Player testing coming soon</h2>
            <p className='mt-3 max-w-2xl text-white/75'>
              We are preparing sample drops for real player feedback. Reviews and on court testing notes will be added once products have been tested properly.
            </p>
            <div className='mt-5'>
              <Button href='/contact'>Join Testing List</Button>
            </div>
          </div>
        )}
      </section>

      <section className='section-wrap'>
        <div className='rounded-3xl border border-white/10 bg-gradient-to-r from-accent-violet/20 to-accent-cyan/20 p-8'>
          <h2 className='text-3xl font-black'>Subscribe after your first wrap and save</h2>
          <p className='mt-2 max-w-3xl text-white/80'>
            Get regular grip drops, early access colourways, and bundle pricing once you know your favourites.
          </p>
          <p className='mt-2 text-sm text-white/70'>Subscription can be enabled later in Shopify.</p>
          <div className='mt-6'>
            <Button href='/subscription' variant='ghost'>
              View Subscription Options
            </Button>
          </div>
        </div>
      </section>

      <section className='section-wrap'>
        <div className='rounded-2xl border border-white/10 p-8 text-center'>
          <h2 className='text-2xl font-black'>Get drop alerts</h2>
          <p className='mt-2 text-white/70'>New colourways, limited releases, and member only bundles.</p>
          <div className='mx-auto mt-5 flex max-w-md flex-col gap-2 sm:flex-row'>
            <input className='w-full rounded-full bg-white/5 px-4 py-3' placeholder='Email address' />
            <button className='rounded-full bg-accent-fuchsia px-5 py-3 font-semibold'>Join the List</button>
          </div>
        </div>
      </section>

      <footer className='section-wrap border-t border-white/10 pt-10'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div>
            <p className='font-black tracking-[0.2em]'>VIBE GRIPS</p>
            <p className='mt-1 text-xs uppercase tracking-[0.2em] text-white/60'>Colour your game</p>
            <p className='mt-3 text-sm text-white/65'>Colour-forward overgrips for tennis culture and streetwear energy.</p>
            <p className='font-black tracking-[0.2em]'>OVERGRIP</p>
            <p className='mt-3 text-sm text-white/65'>Premium overgrips for tennis culture and streetwear energy.</p>
          </div>
          <div className='space-y-2 text-sm text-white/80'>
            <p className='font-semibold text-white'>Shop</p>
            <Link href='/collections'>Shop</Link>
            <Link href='/collections'>Build Your Pack</Link>
            <Link href='/subscription'>Subscription</Link>
            <Link href='/faq'>FAQ</Link>
          </div>
          <div className='space-y-2 text-sm text-white/80'>
            <p className='font-semibold text-white'>Support</p>
            <Link href='/contact'>Contact</Link>
            <p>Shipping</p>
            <p>Returns</p>
            <p>Instagram (Placeholder)</p>
            <p>TikTok (Placeholder)</p>
          </div>
          <div>
            <p className='font-semibold'>Join Vibe Grips</p>
            <p className='font-semibold'>Join our list</p>
            <div className='mt-3 flex gap-2'>
              <input className='w-full rounded-full bg-white/5 px-4 py-2 text-sm' placeholder='Email address' />
              <button className='rounded-full border border-white/20 px-4 text-sm'>Join</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export function ProductGrid() {
  return (
    <section className='section-wrap'>
      <h1 className='text-4xl font-black'>Collections</h1>
      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`} className='rounded-2xl border border-white/10 p-3 hover:border-accent-cyan'>
            <Image src={p.images[0]} alt={p.name} width={500} height={500} className='h-56 w-full rounded-xl object-cover' />
            <p className='mt-3 font-bold'>{p.name}</p>
            <p className='text-white/70'>{p.colorway}</p>
            <p className='text-accent-neon'>AUD {p.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
