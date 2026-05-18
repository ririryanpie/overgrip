export type Product = {
  id: string
  slug: string
  name: string
  price: number
  collection: string
  colorway: string
  description: string
  features: string[]
  images: string[]
}

export const products: Product[] = [
  {
    id: "1",
    slug: "neon-tiger-pro",
    name: "Neon Tiger Pro",
    price: 18,
    collection: "Wildline",
    colorway: "Neon Lime / Matte Black",
    description:
      "Tiger-stripe inspired tacky overgrip with pro-level control and a statement finish.",
    features: [
      "SweatLock absorption",
      "CushionFlex comfort",
      "High-tack feel",
      "Match-grade durability"
    ],
    images: [
      "/images/products/neon-tiger/neon-tiger-packshot-01.png",
      "/images/products/neon-tiger/neon-tiger-angle-02.png",
      "/images/products/neon-tiger/neon-tiger-macro-03.png",
      "/images/products/neon-tiger/neon-tiger-inhand-04.png",
      "/images/products/neon-tiger/neon-tiger-lifestyle-05.png"
    ]
  },
  {
    id: "2",
    slug: "blue-wave",
    name: "Blue Wave",
    price: 20,
    collection: "Flowline",
    colorway: "Electric Blue / Midnight",
    description:
      "Wave-inspired performance grip with expressive color and all-match control.",
    features: [
      "SweatLock absorption",
      "CushionFlex comfort",
      "High-tack feel",
      "Match-grade durability"
    ],
    images: [
      "/images/products/blue-wave/blue-wave-packshot-01.png",
      "/images/products/blue-wave/blue-wave-angle-02.png",
      "/images/products/blue-wave/blue-wave-macro-03.png",
      "/images/products/blue-wave/blue-wave-inhand-04.png",
      "/images/products/blue-wave/blue-wave-lifestyle-05.png"
    ]
  },
  {
    id: "3",
    slug: "sunset-gradient",
    name: "Sunset Gradient",
    price: 22,
    collection: "Chromaline",
    colorway: "Sunset Orange / Magenta / Violet",
    description:
      "Gradient overgrip built for players who want standout visuals with premium feel.",
    features: [
      "SweatLock absorption",
      "CushionFlex comfort",
      "Medium-high tack feel",
      "Extra-durable weave"
    ],
    images: [
      "/images/products/sunset-gradient/sunset-gradient-packshot-01.png",
      "/images/products/sunset-gradient/sunset-gradient-angle-02.png",
      "/images/products/sunset-gradient/sunset-gradient-macro-03.png",
      "/images/products/sunset-gradient/sunset-gradient-inhand-04.png",
      "/images/products/sunset-gradient/sunset-gradient-lifestyle-05.png"
    ]
  }
]