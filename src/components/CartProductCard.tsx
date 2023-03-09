// Components
import Image from 'next/image'
import Link from 'next/link'

// Helpers
import priceFormatter from '@/helpers/priceFormatter'

// Context
import { CartContext } from '@/context/CartProvider'

// Hooks
import { useContext } from 'react'

// Types
import { CartProduct } from '@/types/ProductTypes'

interface CartProductProps {
  product: CartProduct
}

export default function CartProductCard({ product }: CartProductProps) {
  const { dispatch } = useContext(CartContext)

  function removeProduct() {
    dispatch({ type: 'DELETE', payload: { id: product.id } })
  }

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm p-1 bg-white shadow-md">
        <Image
          className="h-full w-full object-cover object-center"
          src={product.picture.url}
          alt={product.picture.altText}
          width={product.picture.width}
          height={product.picture.height}
        />
      </div>

      <section className="ml-4 flex flex-1 flex-col">
        <header>
          <div className="flex justify-between text-base font-medium">
            <h3 className="font-medium">
              <Link href={`/products/${product.handle}`}>{product.title}</Link>
            </h3>
            <p className="ml-4 font-bold">
              {priceFormatter(product.price.value, product.price.currency)}
            </p>
          </div>
          <p className="mt-1 text-sm text-zinc-500">{product.tags[0]}</p>
        </header>

        <footer className="flex flex-1 items-end justify-between text-sm">
          <p className="text-zinc-500">Qty {product.quantity}</p>

          <div className="flex">
            <button
              onClick={removeProduct}
              className="font-semibold text-red-600 hover:text-red-400 transition-colors ease-linear duration-75"
            >
              Remove
            </button>
          </div>
        </footer>
      </section>
    </li>
  )
}
