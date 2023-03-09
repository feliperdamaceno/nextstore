import { Picture } from '@/types/ProductType'

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
