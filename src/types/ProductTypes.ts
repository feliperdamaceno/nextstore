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
  id: string
  title: string
  handle: string
  description: string
  availableForSale: boolean
  tags: string[]
  price: {
    value: number
    currency: string
  }
  pictures: Picture[]
}

export type CartProductWithoutQuantity = {
  id: string
  title: string
  handle: string
  tags: string[]
  price: {
    value: number
    currency: string
  }
  picture: Picture
}

export type CartProduct = {
  id: string
  title: string
  handle: string
  tags: string[]
  price: {
    value: number
    currency: string
  }
  picture: Picture
  quantity: number
}

export type Picture = {
  altText: string
  url: string
  width: number
  height: number
}
