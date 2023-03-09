// Components
import Link from 'next/link'
import List from './List'
import CartProductCard from './CartProductCard'
import Button from './Button'

// Styles
import { IoCloseOutline as CloseIcon } from 'react-icons/io5'

// Helpers
import priceFormatter from '@/helpers/priceFormatter'

// Libs
import { useSwipeable } from 'react-swipeable'

// Context
import { CartContext } from '@/context/CartProvider'

// Hooks
import { useContext } from 'react'

//  Types
import { CartProduct } from '@/types/ProductTypes'

export default function Cart() {
  const { cart, isCartOpen, toggleCart } = useContext(CartContext)
  const swipeHandlers = useSwipeable({
    onSwipedRight: closeCart
  })
  const backdropToggleAnimation = isCartOpen
    ? 'opacity-100'
    : 'opacity-0 invisible'
  const cartToggleAnimation = isCartOpen ? 'translate-x-0' : 'translate-x-full'
  const isCartEmpty = cart.length === 0
  const subtotal = cart.reduce((prev, curr) => prev + curr.price.value, 0)

  function closeCart() {
    toggleCart(false)
  }

  return (
    <aside
      className="relative z-[100]"
      aria-label="cart"
      aria-modal={isCartOpen}
      {...swipeHandlers}
    >
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-zinc-500 bg-opacity-75 transition-all ease-linear duration-200 ${backdropToggleAnimation}`}
      />

      <section
        className={`fixed inset-y-0 right-0 flex max-w-full pl-10 transition-transform ease-linear duration-200 ${cartToggleAnimation}`}
      >
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-zinc-100 shadow-sm">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    onClick={closeCart}
                    className="-m-2 p-2 text-zinc-400 hover:text-zinc-500 text-3xl transition-colors ease-linear"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className="mt-8 flow-root">
                <ul className="-my-6 divide-y divide-zinc-200">
                  {isCartEmpty ? (
                    <li className="text-sm font-light text-zinc-400">
                      Your cart is empty!
                    </li>
                  ) : (
                    <List
                      items={cart}
                      render={(product: CartProduct, index) => (
                        <CartProductCard key={index} product={product} />
                      )}
                    />
                  )}
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-semibold">
                <p>Subtotal</p>
                <p className="font-bold">{priceFormatter(subtotal, 'EUR')}</p>
              </div>
              <div className="mt-6">
                <Button
                  variant="regular"
                  render={(styles) => (
                    <button className={`${styles} w-full py-2.5 text-lg`}>
                      Checkout
                    </button>
                  )}
                />
              </div>
              <div className="mt-6 flex justify-center text-center text-sm  gap-1">
                <span className="text-zinc-500">or </span>
                <Link href="/products" className="font-bold">
                  Continue Shopping &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  )
}
