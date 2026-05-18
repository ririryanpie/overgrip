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
    id: '1',
    slug: 'neon-tiger-pro',
    name: 'Neon Tiger Pro',
    price: 18,
    collection: 'Wildline',
    colorway: 'Neon Lime / Matte Black',
    description:
      'Tiger-stripe inspired tacky overgrip with pro-level control and a statement finish.',
    features: ['SweatLock absorption', 'CushionFlex comfort', 'High-tack feel', 'Match-grade durability'],
    images: [
      'https://picsum.photos/id/119/1200/1200',
      'https://picsum.photos/id/217/1200/1200',
      'https://picsum.photos/id/234/1200/1200',
      'https://picsum.photos/id/235/1200/1200',
      'https://picsum.photos/id/238/1200/1200'
    ]
  },
  {
    id: '2',
    slug: 'blue-wave',
    name: 'Blue Wave',
    price: 20,
    collection: 'Flowline',
    colorway: 'Electric Blue / Midnight',
    description: 'Wave-inspired performance grip with expressive color and all-match control.',
    features: ['SweatLock absorption', 'CushionFlex comfort', 'High-tack feel', 'Match-grade durability'],
    images: [
      'https://picsum.photos/id/305/1200/1200',
      'https://picsum.photos/id/306/1200/1200',
      'https://picsum.photos/id/307/1200/1200',
      'https://picsum.photos/id/308/1200/1200',
      'https://picsum.photos/id/309/1200/1200'
    ]
  },
  {
    id: '3',
    slug: 'sunset-gradient',
    name: 'Sunset Gradient',
    price: 22,
    collection: 'Chromaline',
    colorway: 'Sunset Orange / Magenta / Violet',
    description:
      'Gradient overgrip built for players who want standout visuals with premium feel.',
    features: ['SweatLock absorption', 'CushionFlex comfort', 'Medium-high tack feel', 'Extra-durable weave'],
    images: [
      'https://picsum.photos/id/1062/1200/1200',
      'https://picsum.photos/id/1063/1200/1200',
      'https://picsum.photos/id/1064/1200/1200',
      'https://picsum.photos/id/1065/1200/1200',
      'https://picsum.photos/id/1066/1200/1200'
    ]
  }
]
