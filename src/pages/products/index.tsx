// Components
import Head from 'next/head'
import Product from '@/components/Product'

// GraphQL
import client from '@/graphql/apolloClient'
import { GET_PRODUCTS } from '@/graphql/queries'

// Types
import {
  ProductFragment,
  ProductFragmentResponse,
  Picture
} from '@/types/ProductType'

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_PRODUCTS })

  const products = data.products.items.map(
    (product: ProductFragmentResponse): ProductFragment => ({
      ...product,
      id: product.id.id,
      pictures: product.pictures.collection.map(
        (picture: Picture): Picture => ({ ...picture })
      )
    })
  )

  return {
    props: {
      products: products
    }
  }
}

interface ProductsProps {
  products: ProductFragment[]
}

export default function ProductsPage({ products }: ProductsProps) {
  return (
    <>
      <Head>
        <title>All Products</title>
        <meta
          name="description"
          content="All products available on our store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-xs sm:container mx-auto px-4 sm:p-0 grid grid-cols-products gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </main>
    </>
  )
}
