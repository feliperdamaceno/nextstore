import { CartProduct } from '@/types/ProductTypes'

export default function calculateCartProductsQuantity(
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
