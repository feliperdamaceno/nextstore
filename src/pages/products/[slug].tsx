// Components
import Head from 'next/head'
import List from '@/components/List'
import Button from '@/components/Button'
import ImagePreview from '@/components/ImagePreview'

// GraphQL
import client from '@/graphql/apolloClient'
import { GET_SLUGS, GET_FULL_PRODUCT } from '@/graphql/queries'

// Types
import { FullProduct, FullProductResponse, Picture } from '@/types/ProductType'
import { GetStaticPropsContext } from 'next'

type ProductSlug = {
  slug: string
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_SLUGS })

  const paths = data.products.items.map((product: { slug: ProductSlug }) => ({
    params: { slug: product.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { data } = await client.query({
    query: GET_FULL_PRODUCT,
    variables: { slug: params?.slug }
  })

  const product = data.products.items.map(
    (product: FullProductResponse): FullProduct => ({
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
        <meta name="description" content="PRODUCT DESCRIPTION HERE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto px-4 md:px-0 flex flex-wrap gap-10 lg:gap-24">
        <ImagePreview pictures={product.pictures} />

        <aside className="max-w-md">
          <h1>{product.name}</h1>

          <ul className="flex gap-2">
            <List
              items={product.categories}
              render={(category, index) => (
                <li className="" key={index}>
                  {category}
                </li>
              )}
            />
          </ul>

          <Button
            variant="regular"
            render={(styles) => <button className={styles}>Add to Cart</button>}
          />
        </aside>
      </main>
    </>
  )
}
