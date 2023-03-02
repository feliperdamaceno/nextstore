import Link from 'next/link'

// Styles
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md'
import { FiUser as UserIcon } from 'react-icons/fi'
import { IoTriangle as LogoIcon } from 'react-icons/io5'

export default function Navbar() {
  return (
    <header className="bg-white p-4 mb-4 top-0 sticky z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="tracking-wider text-2xl flex items-center">
          <LogoIcon className="-translate-y-[2px] mr-0.5" />
          Next<span className="font-bold">Store</span>
        </Link>

        <ul className="hidden sm:flex gap-6">
          <li className="text-zinc-500 hover:text-zinc-900 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="text-zinc-500 hover:text-zinc-900 transition-colors">
            <Link href="/products">Products</Link>
          </li>
          <li className="text-zinc-500 hover:text-zinc-900 transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex gap-6 items-center text-xl">
          <Link href="/account">
            <UserIcon />
          </Link>

          <button>
            <CartIcon />
          </button>
        </div>
      </nav>
    </header>
  )
}
