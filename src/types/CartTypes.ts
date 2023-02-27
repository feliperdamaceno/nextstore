type Product = {
  id: number
}

export type CartContextType = {
  cart: Product[]
  dispatch: React.Dispatch<CartActions>
}

export type CartActions =
  | { type: 'ADD'; payload: { product: [] } }
  | { type: 'DELETE'; payload: { id: number } }

export type CartState = [] // TODO: create cart type / change the cart reducer type to be equal to this instead of any
