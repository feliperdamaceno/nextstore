// Hooks
import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { useStorage } from '@/hooks/useStorage'
import { useToggle } from '@/hooks/useToggle'

// Types
import { CartContextType, CartActions, CartState } from '@/types/CartTypes'
import { Product } from '@/types/ProductType'

const initialCart = [
  {
    id: '',
    title: '',
    handle: '',
    price: {
      value: 0,
      currency: ''
    },
    picture: {
      altText: '',
      url: '',
      width: 0,
      height: 0
    }
  }
]

export const CartContext = createContext<CartContextType>(null!)

function reducer(state: CartState, action: CartActions): CartState {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload.product]
    case 'DELETE':
      return state.filter(
        (product: Product) => product.id !== action.payload.id
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
  const { value: isCartOpen, toggleValue: toggleCart } = useToggle(false)

  useEffect(() => {
    updateStorage(cart)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, dispatch, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
