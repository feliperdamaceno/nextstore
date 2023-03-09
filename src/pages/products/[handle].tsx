// Components
import Head from 'next/head'
import List from '@/components/List'
import Button from '@/components/Button'
import ImagePreview from '@/components/ImagePreview'

// Styles
import { MdFavoriteBorder as FavoriteIcon } from 'react-icons/md'

// Libs
import client from '@/libs/apolloClient'

// Helpers
import priceFormatter from '@/helpers/priceFormatter'

// Queries
import { GetHandlers, GetFullProduct } from '@/graphql/productQueries'

// Types
import {
  GetFullProductQuery,
  GetFullProductQueryVariables
} from '@/types/queries/GetFullProductQuery'
import { GetHandlersQuery } from '@/types/queries/GetHandlersQuery'
import { FullProduct, Picture } from '@/types/ProductType'

export async function getStaticPaths() {
  const { data } = await client.query<GetHandlersQuery>({ query: GetHandlers })

  const paths = data.products.nodes.map((product) => ({
    params: { handle: product.handle }
  }))

  return {
    paths,
    fallback: false
  }
}

type getStaticProps = {
  params: {
    handle: string
  }
}

export async function getStaticProps({ params }: getStaticProps) {
  const { data } = await client.query<
    GetFullProductQuery,
    GetFullProductQueryVariables
  >({
    query: GetFullProduct,
    variables: { handle: params.handle }
  })

  const product = {
    id: data.product.variants.nodes[0].id,
    title: data.product.title,
    description: data.product.description,
    availableForSale: data.product.availableForSale,
    tags: data.product.tags,
    price: {
      value: parseFloat(data.product.priceRange.minVariantPrice.amount),
      currency: data.product.priceRange.minVariantPrice.currencyCode
    },
    pictures: data.product.images.nodes.map((image): Picture => ({ ...image }))
  }

  return {
    props: {
      product
    },
    revalidate: 60
  }
}

interface ProductPageProps {
  product: FullProduct
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto px-4 pb-2 xl:px-0 flex flex-col lg:flex-row gap-10 lg:gap-24">
        <ImagePreview pictures={product.pictures} />

        <aside className="max-w-xl lg:max-w-md p-2">
          <h1 className="font-bold text-xl mb-2">{product.title}</h1>

          <div className="flex gap-2 mb-2 text-sm">
            <span>Availability:</span>
            {product.availableForSale ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>

          <h2 className="text-2xl font-bold mb-4">
            {priceFormatter(product.price.value, product.price.currency)}
          </h2>

          <p className="mb-2">{product.description}</p>

          <ul className="flex flex-wrap gap-2 mb-6">
            <List
              items={product.tags}
              render={(tag, index) => (
                <li
                  className="px-2 py-1 bg-zinc-200 rounded-sm text-sm shadow-sm"
                  key={index}
                >
                  {tag}
                </li>
              )}
            />
          </ul>

          <div className="flex gap-4">
            <Button
              variant="regular"
              render={(styles) => (
                <button
                  disabled={!product.availableForSale}
                  className={`${styles} text-lg w-full`}
                >
                  Add to Cart
                </button>
              )}
            />

            <button className="flex gap-2 items-center text-xl">
              <FavoriteIcon className="text-zinc-500 hover:text-zinc-900 transition-colors" />
            </button>
          </div>
        </aside>
      </main>
    </>
  )
}
