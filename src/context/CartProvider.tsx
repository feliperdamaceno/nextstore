import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { useStorage } from '@/hooks/useStorage'
import { CartContextType, CartActions } from '@/types/CartTypes'

const CartContext = createContext<CartContextType | null>(null)

function reducer(state: any, action: CartActions): any {
  // TODO: update the state type
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload.product]
    case 'DELETE':
      return state.filter((product: any) => product.id !== action.payload.id)
    // TODO: Fix the product type any
    default:
      return state
  }
}

interface CartProviderProps {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const { storage, updateStorage } = useStorage('store-cart', [])
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
