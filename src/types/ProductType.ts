export type Product = {
  id: string
  name: string
  slug: string
  rating: number
  price: number
  pictures: Picture[]
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

export type Picture = {
  title: string
  url: string
  width: number
  height: number
}
