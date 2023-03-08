// Components
import Image from 'next/image'
import Link from 'next/link'

// Types
import { Product } from '@/types/ProductType'

interface CartProductProps {
  // product: Product // TODO: change back to this
  product: any
}

export default function CartProduct({ product }: CartProductProps) {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm p-1 bg-white shadow-md">
        <img
          className="h-full w-full object-cover object-center rounded-sm"
          src="https://cdn.shopify.com/s/files/1/0728/5129/2440/products/81B4lq_5iSL._AC_SL1500.jpg?v=1678136113"
          alt="Salmon orange fabric pouch with match zipper, zinc zipper pull, and adjustable hip belt."
        />
        {/* <Image
          className="h-full w-full object-cover object-center"
          src={product.picture.url}
          alt={product.picture.altText}
          width={product.picture.width}
          height={product.picture.height}
        /> */}
      </div>

      <section className="ml-4 flex flex-1 flex-col">
        <header>
          <div className="flex justify-between text-base font-medium">
            <h3 className="font-medium">
              <Link href="#">Throwback Hip Bag</Link>
            </h3>
            <p className="ml-4 font-bold">$90.00</p>
          </div>
          <p className="mt-1 text-sm text-zinc-500">Salmon</p>
        </header>

        <footer className="flex flex-1 items-end justify-between text-sm">
          <p className="text-zinc-500">Qty 1</p>

          <div className="flex">
            <button
              type="button"
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
