import { CartProduct } from '@/types/ProductTypes'

export default function countCartProducts(
  products: CartProduct[]
): CartProduct[] {
  const output: CartProduct[] = []

  products.forEach((product) => {
    const existingItem = output.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
      return
    }
    output.push({ ...product })
  })

  return output
}
