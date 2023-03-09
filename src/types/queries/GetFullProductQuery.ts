import { Picture } from '@/types/ProductTypes'

export type GetFullProductQuery = {
  product: {
    variants: {
      nodes: [
        {
          id: string
        }
      ]
    }
    title: string
    description: string
    handle: string
    availableForSale: boolean
    tags: string[]
    priceRange: {
      minVariantPrice: {
        amount: string
        currencyCode: string
      }
    }
    images: {
      nodes: Picture[]
    }
  }
}

export type GetFullProductQueryVariables = {
  handle: string
}
