// Components
import Head from 'next/head'
import ProductCard from '@/components/ProductCard'

// Libs
import client from '@/libs/apolloClient'

// Queries
import { GetProducts } from '@/graphql/productQueries'

// Types
import { GetProductsQuery } from '@/types/queries/GetProductsQuery'
import { Product } from '@/types/ProductType'

export async function getStaticProps() {
  const { data } = await client.query<GetProductsQuery>({
    query: GetProducts
  })

  const products = data.products.nodes.map(
    (product): Product => ({
      id: product.id,
      title: product.title,
      handle: product.handle,
      price: {
        value: parseFloat(product.priceRange.minVariantPrice.amount),
        currency: product.priceRange.minVariantPrice.currencyCode
      },
      picture: product.featuredImage
    })
  )

  return {
    props: {
      products
    },
    revalidate: 60
  }
}

interface ProductsProps {
  products: Product[]
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
      <main className="max-w-xs sm:container mx-auto px-4 pb-4 sm:px-0 grid grid-cols-products gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  )
}
