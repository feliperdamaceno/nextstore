import { ProductFragment } from '@/types/ProductType'

export type CartContextType = {
  cart: ProductFragment[]
  dispatch: React.Dispatch<CartActions>
}
export type CartState = ProductFragment[]

export type CartActions =
  | { type: 'ADD'; payload: { product: ProductFragment } }
  | { type: 'DELETE'; payload: { id: string } }
