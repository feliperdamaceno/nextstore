import { CartProduct } from '@/types/ProductTypes'

export default function calculateCartSubtotal(products: CartProduct[]) {
  const output = products.map((product) => {
    return product.price.value * product.quantity
  })
  return output.reduce((previous, current) => previous + current, 0)
}
