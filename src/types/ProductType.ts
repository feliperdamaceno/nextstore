export type ProductFragment = {
  id: string
  name: string
  slug: string
  rating: number
  price: number
  pictures: Picture[]
}

export type ProductFragmentResponse = {
  id: {
    id: string
  }
  name: string
  slug: string
  rating: number
  price: number
  pictures: {
    collection: Picture[]
  }
}

export type FullProduct = {
  name: string
  slug: string
  description: string
  availability: string
  categories: string[]
  rating: number
  price: number
  pictures: Picture[]
}

export type FullProductResponse = {
  name: string
  slug: string
  description: string
  availability: string
  categories: string[]
  rating: number
  price: number
  pictures: {
    collection: Picture[]
  }
}

export type Picture = {
  title: string
  url: string
  width: number
  height: number
}
