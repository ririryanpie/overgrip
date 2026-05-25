'use client'

import Image from 'next/image'
import { useState } from 'react'

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <Image
        src={images[activeIndex]}
        alt={`${alt} image ${activeIndex + 1}`}
        width={900}
        height={900}
        className='h-[520px] w-full rounded-3xl object-cover'
      />
      <div className='mt-4 grid grid-cols-5 gap-3'>
        {images.map((image, index) => (
          <button
            key={image}
            type='button'
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-xl border transition ${
              activeIndex === index ? 'border-accent-cyan' : 'border-white/10 hover:border-white/40'
            }`}
            aria-label={`Show ${alt} image ${index + 1}`}
          >
            <Image src={image} alt={`${alt} thumbnail ${index + 1}`} width={220} height={220} className='h-20 w-full object-cover' />
          </button>
        ))}
      </div>
    </div>
  )
}
