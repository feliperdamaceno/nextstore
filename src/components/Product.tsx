import { ProductFragment } from '@/types/ProductType'
import priceFormatter from '@/helpers/priceFormatter'

// Components
import Link from 'next/link'
import Image from 'next/image'

// Styles
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md'
import { MdFavoriteBorder as FavoriteIcon } from 'react-icons/md'

interface ProductProps {
  product: ProductFragment
}

export default function Product({ product }: ProductProps) {
  return (
    <section className="bg-white p-2 rounded-sm shadow-sm hover:scale-[102.5%] transition-transform ease-linear duration-100 overflow-hidden relative group">
      <div className="bg-white absolute top-0 right-0 w-full flex justify-between p-4 text-lg -translate-y-10 group-hover:translate-y-0 transition-transform ease-linear duration-100">
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
          className="min-h-[220px] object-cover bg-center"
          src={product.pictures[0].url}
          width={product.pictures[0].width}
          height={product.pictures[0].height}
          alt={product.pictures[0].title}
        />

        <h2 className="tracking-wide mt-4 mb-2">
          {product.name.substring(0, 30)}...
        </h2>
        <span className="font-bold text-lg">
          {priceFormatter(product.price, 'EUR')}
        </span>
      </Link>
    </section>
  )
}
