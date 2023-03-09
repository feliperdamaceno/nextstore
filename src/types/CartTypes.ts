import { CartProduct } from '@/types/ProductTypes'

export type CartContextType = {
  cart: CartProduct[]
  dispatch: React.Dispatch<CartActions>
  isCartOpen: boolean
  toggleCart: (value: boolean) => void
}
export type CartState = CartProduct[]

export type CartActions =
  | { type: 'ADD'; payload: { product: CartProduct } }
  | { type: 'DELETE'; payload: { id: string } }
