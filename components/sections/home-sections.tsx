import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="section-wrap pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-main-01.png"
            alt="Cinematic hero overgrip scene"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative z-10 p-8 md:p-14">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            Street Performance Overgrips
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-7xl">
            YOUR RACQUET.
            <br />
            YOUR STYLE.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Premium collectible overgrips blending tennis performance with modern streetwear energy.
          </p>

          <div className="mt-8 flex gap-3">
            <Button href="/collections">Shop Grips</Button>
            <Button href="/subscription" variant="ghost">
              Build Your Pack
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {products.map((p) => (
              <div key={p.id} className="rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur">
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  width={500}
                  height={500}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <p className="mt-2 font-semibold">{p.name}</p>
              </div>
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
      {/* Featured collections */}
      <section className="section-wrap grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Featured Collections",
            body: "Wildline, Core Mono, and limited drops built for style-led athletes.",
            image: "/images/hero/hero-alt-02.png",
          },
          {
            title: "Why Players Switch",
            body: "From boring white grips to bold textures that complete your look.",
            image: "/images/lifestyle/lifestyle-urban-01.png",
          },
          {
            title: "Performance Benefits",
            body: "Sweat absorption, comfort, tackiness, and durability tuned for match play.",
            image: "/images/lifestyle/lifestyle-urban-02.png",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:-translate-y-1"
          >
            <Image src={item.image} alt={item.title} width={1200} height={800} className="h-44 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits image row */}
      <section className="section-wrap grid gap-6 md:grid-cols-3">
        {[
          { title: "Sweat Control", image: "/images/benefits/benefit-sweat-control.png" },
          { title: "All-Match Comfort", image: "/images/benefits/benefit-comfort.png" },
          { title: "Built to Last", image: "/images/benefits/benefit-durability.png" },
        ].map((item) => (
          <div key={item.title} className="overflow-hidden rounded-2xl border border-white/10">
            <Image src={item.image} alt={item.title} width={1200} height={800} className="h-56 w-full object-cover" />
            <div className="p-4">
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Subscription banner */}
      <section className="section-wrap">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/subscription/subscription-banner.png"
            alt="Subscription bundle banner"
            width={2400}
            height={1200}
            className="h-[280px] w-full object-cover md:h-[360px]"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-black">Subscribe & Save 20%</h2>
              <p className="mt-2 max-w-xl text-white/80">
                Monthly curated grip drops, early access colorways, and bundle pricing.
              </p>
              <div className="mt-5">
                <Button href="/subscription">Start Subscription</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews + social image */}
      <section className="section-wrap grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-black">Player Reviews</h3>
          <p className="mt-4 text-white/70">
            “Best feeling grip I have used, and people ask about it every match.” — Riya P.
          </p>
          <p className="mt-3 text-white/70">
            “Finally something that performs and actually looks premium.” — Jalen M.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/social/social-grid-mix-01.png"
            alt="@OVERGRIP social proof"
            width={1080}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Email CTA */}
      <section className="section-wrap">
        <div className="rounded-2xl border border-white/10 p-8 text-center">
          <h3 className="text-2xl font-black">Get drop alerts</h3>
          <p className="text-white/70">New colorways. Limited releases. Member-only bundles.</p>
          <div className="mx-auto mt-5 flex max-w-md gap-2">
            <input className="w-full rounded-full bg-white/5 px-4 py-3" placeholder="Email address" />
            <button className="rounded-full bg-accent-fuchsia px-5 font-semibold">Join</button>
          </div>
        </div>
      </section>
    </>
  )
}

export function ProductGrid() {
  return (
    <section className="section-wrap">
      <h1 className="text-4xl font-black">Collections</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}`}
            className="rounded-2xl border border-white/10 p-3 hover:border-accent-cyan"
          >
            <Image src={p.images[0]} alt={p.name} width={500} height={500} className="h-56 w-full rounded-xl object-cover" />
            <p className="mt-3 font-bold">{p.name}</p>
            <p className="text-white/70">{p.colorway}</p>
            <p className="text-accent-neon">${p.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}