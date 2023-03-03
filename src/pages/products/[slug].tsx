// Components
import Head from 'next/head'
import List from '@/components/List'
import Button from '@/components/Button'
import ImagePreview from '@/components/ImagePreview'
import Rating from '@/components/Rating'

// Styles
import { MdFavoriteBorder as FavoriteIcon } from 'react-icons/md'

// Libs
import client from '@/libs/apolloClient'

// Helpers
import priceFormatter from '@/helpers/priceFormatter'

// Queries
import { GetSlugs, GetFullProduct } from '@/graphql/productQueries'

// Types
import {
  GetFullProductQuery,
  GetFullProductQueryVariables
} from '@/types/queries/GetFullProductQuery'
import { GetSlugsQuery } from '@/types/queries/GetSlugsQuery'
import { FullProduct, Picture } from '@/types/ProductType'

export async function getStaticPaths() {
  const { data } = await client.query<GetSlugsQuery>({ query: GetSlugs })

  const paths = data.products.items.map((product) => ({
    params: { slug: product.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

type getStaticProps = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: getStaticProps) {
  const { data } = await client.query<
    GetFullProductQuery,
    GetFullProductQueryVariables
  >({
    query: GetFullProduct,
    variables: { slug: params.slug }
  })

  const product = data.products.items.map(
    (product): FullProduct => ({
      ...product,
      pictures: product.pictures.collection.map(
        (picture): Picture => ({ ...picture })
      )
    })
  )

  return {
    props: {
      product: product[0]
    }
  }
}

interface ProductPageProps {
  product: FullProduct
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto px-4 pb-2 xl:px-0 flex flex-col lg:flex-row gap-10 lg:gap-24">
        <ImagePreview pictures={product.pictures} />

        <aside className="max-w-xl lg:max-w-md p-2">
          <h1 className="font-bold text-xl mb-2">{product.name}</h1>

          <div className="flex gap-2 mb-2 text-sm">
            <span>Availability:</span>
            <span className="text-green-600">{product.availability}</span>
          </div>

          <div className="mb-4">
            <Rating rating={product.rating} />
          </div>

          <h2 className="text-2xl font-bold mb-4">
            {priceFormatter(product.price, 'EUR')}
          </h2>

          <p className="mb-2">{product.description}</p>

          <ul className="flex flex-wrap gap-2 mb-6">
            <List
              items={product.categories}
              render={(category, index) => (
                <li
                  className="px-2 py-1 bg-zinc-200 rounded-sm text-sm"
                  key={index}
                >
                  {category}
                </li>
              )}
            />
          </ul>

          <div className="flex gap-4">
            <Button
              variant="regular"
              render={(styles) => (
                <button className={`${styles} text-lg w-full`}>
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
