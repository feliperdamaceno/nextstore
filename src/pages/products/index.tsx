// GrahpQL
import { client } from '@/graphql/apollo.config'
import { gql } from '@apollo/client'

// Components
import Head from 'next/head'

export async function getStaticProps() {
  return {
    props: {
      products: []
    }
  }
}

interface ProductsProps {
  products: []
}

export default function Products({ products }: ProductsProps) {
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
