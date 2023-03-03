import { Product } from '@/types/ProductType'

export type CartContextType = {
  cart: Product[]
  dispatch: React.Dispatch<CartActions>
}
export type CartState = Product[]

export type CartActions =
  | { type: 'ADD'; payload: { product: Product } }
  | { type: 'DELETE'; payload: { id: string } }
