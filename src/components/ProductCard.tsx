// Components
import Link from 'next/link'
import Image from 'next/image'

// Styles
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md'
import { MdFavoriteBorder as FavoriteIcon } from 'react-icons/md'

// Helpers
import priceFormatter from '@/helpers/priceFormatter'

// Types
import { Product } from '@/types/ProductType'

interface ProductProps {
  product: Product
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <section
      className="bg-white p-2 rounded-sm shadow-sm hover:scale-[102.5%] transition-transform ease-linear duration-100 overflow-hidden relative group"
      aria-label="product card"
    >
      <div className="bg-white absolute top-0 right-0 w-full flex justify-between p-4 text-lg sm:-translate-y-10 group-hover:translate-y-0 transition-transform ease-linear duration-100">
        <button className="text-zinc-500 hover:text-zinc-900 transition-colors">
          <FavoriteIcon />
        </button>

        <button className="text-zinc-500 hover:text-zinc-900 transition-colors">
          <CartIcon />
        </button>
      </div>

      <Link
        className="inline-block text-center text-sm"
        href={`/products/${product.slug}`}
      >
        <Image
          className="h-[240px] sm:h-[200px] object-cover bg-center"
          src={product.pictures[0].url}
          alt={product.pictures[0].title}
          width={product.pictures[0].width}
          height={product.pictures[0].height}
        />

        <div className="mt-4 mb-2">
          <h2 className="tracking-wide mb-2" title={product.name}>
            {product.name.length > 25
              ? `${product.name.substring(0, 25).trim()}...`
              : product.name}
          </h2>
          <span className="font-bold text-lg">
            {priceFormatter(product.price, 'EUR')}
          </span>
        </div>
      </Link>
    </section>
  )
}
