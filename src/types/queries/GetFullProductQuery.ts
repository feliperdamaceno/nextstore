import { Picture } from '@/types/ProductType'

export type GetFullProductQuery = {
  product: {
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
