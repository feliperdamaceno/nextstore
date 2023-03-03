import { Picture } from '@/types/ProductType'

export type GetProductsQuery = {
  products: {
    items: {
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
    }[]
  }
}
