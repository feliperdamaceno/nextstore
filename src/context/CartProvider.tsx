import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { useStorage } from '@/hooks/useStorage'
import { CartContextType, CartActions, CartState } from '@/types/CartTypes'
import { ProductFragment } from '@/types/ProductType'

const initialCart = [
  {
    id: '',
    name: '',
    price: 0,
    rating: 0,
    slug: ''
  }
]

const initialContext = {
  cart: initialCart,
  dispatch: () => {}
}

const CartContext = createContext<CartContextType>(initialContext)

function reducer(state: CartState, action: CartActions): CartState {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload.product]
    case 'DELETE':
      return state.filter(
        (product: ProductFragment) => product.id !== action.payload.id
      )
    default:
      return state
  }
}

interface CartProviderProps {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const { storage, updateStorage } = useStorage('store-cart', initialCart)
  const [cart, dispatch] = useReducer(reducer, storage)

  useEffect(() => {
    updateStorage(cart)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
