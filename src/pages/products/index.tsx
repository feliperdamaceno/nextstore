// Components
import Head from 'next/head'

// GraphQL
import client from '@/graphql/apolloClient'
import { GET_PRODUCTS } from '@/graphql/queries'

// Types
import { ProductFragment } from '@/types/ProductType'

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_PRODUCTS })

  const products = data.nextStoreProductsCollection.items.map(
    (product: any): ProductFragment => ({
      id: product.sys.id,
      name: product.name,
      slug: product.slug,
      rating: product.rating,
      price: product.price
    })
  )

  return {
    props: {
      products: products
    }
  }
}

interface ProductsProps {
  products: ProductFragment
}

export default function Products({ products }: ProductsProps) {
  console.log(products)
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
      <main>
        <h1>Products</h1>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </main>
    </>
  )
}
