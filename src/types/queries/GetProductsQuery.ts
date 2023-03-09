import { Picture } from '@/types/ProductTypes'

export type GetProductsQuery = {
  products: {
    nodes: {
      variants: {
        nodes: [
          {
            id: string
          }
        ]
      }
      title: string
      handle: string
      priceRange: {
        minVariantPrice: {
          amount: string
          currencyCode: string
        }
      }
      featuredImage: Picture
    }[]
  }
}
