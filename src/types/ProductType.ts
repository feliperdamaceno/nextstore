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

export type Product = {
  name: string
}

export type Picture = {
  title: string
  url: string
  width: number
  height: number
}
