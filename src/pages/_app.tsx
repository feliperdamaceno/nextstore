import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import CartProvider from '@/context/CartProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  )
}
