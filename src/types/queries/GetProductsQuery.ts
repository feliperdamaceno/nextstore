import { Picture } from '@/types/ProductType'

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
