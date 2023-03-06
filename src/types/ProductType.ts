export type Product = {
  id: string
  title: string
  handle: string
  price: {
    value: number
    currency: string
  }
  picture: Picture
}

export type FullProduct = {
  title: string
  description: string
  availableForSale: boolean
  tags: string[]
  price: {
    value: number
    currency: string
  }
  pictures: Picture[]
}

export type Picture = {
  altText: string
  url: string
  width: number
  height: number
}
