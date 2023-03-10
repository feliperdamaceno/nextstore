// Helpers
import calculateCartProductsQuantity from '@/helpers/calculateCartProductsQuantity'

// Hooks
import { createContext, useReducer, ReactNode } from 'react'
import { useToggle } from '@/hooks/useToggle'

// Types
import { CartContextType, CartActions, CartState } from '@/types/CartTypes'
import { CartProduct } from '@/types/ProductTypes'

export const CartContext = createContext<CartContextType>(null!)

function reducer(state: CartState, action: CartActions): CartState {
  switch (action.type) {
    case 'ADD':
      return calculateCartProductsQuantity([...state, action.payload.product])
    case 'DELETE':
      const currentProductIndex = state.findIndex(
        (product: CartProduct) => product.id === action.payload.id
      )

      if (state[currentProductIndex].quantity > 1) {
        state[currentProductIndex].quantity -= 1
        return [...state]
      }

      return state.filter(
        (product: CartProduct) => product.id !== action.payload.id
      )
    default:
      return state
  }
}

interface CartProviderProps {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(reducer, [])
  const { value: isCartOpen, toggleValue: toggleCart } = useToggle(false)

  return (
    <CartContext.Provider value={{ cart, dispatch, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
