// Components
import Navbar from './Navbar'
import Footer from './Footer'
import Cart from '@/components/Cart'

// Styles
import { Nunito } from '@next/font/google'

// Types
import { ReactNode } from 'react'

const fontFamily = Nunito({
  subsets: ['latin']
})

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`bg-zinc-100 text-zinc-900 flex flex-col min-h-screen ${fontFamily.className}`}
    >
      <Navbar />
      <Cart />
      {children}
      <Footer />
    </div>
  )
}
