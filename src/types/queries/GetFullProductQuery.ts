import { Picture } from '@/types/ProductType'

export type GetFullProductQuery = {
  products: {
    items: {
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
    }[]
  }
}

export type GetFullProductQueryVariables = {
  slug: string
}
