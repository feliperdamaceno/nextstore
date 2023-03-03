import { gql } from '@apollo/client'

export const GetProducts = gql`
  query getProducts {
    products: nextStoreProductsCollection {
      items {
        id: sys {
          id
        }
        name
        slug
        rating
        price
        pictures: picturesCollection {
          collection: items {
            title
            url
            width
            height
          }
        }
      }
    }
  }
`

export const GetFullProduct = gql`
  query getFullProduct($slug: String!) {
    products: nextStoreProductsCollection(limit: 1, where: { slug: $slug }) {
      items {
        name
        slug
        description
        availability
        categories
        rating
        price
        pictures: picturesCollection {
          collection: items {
            title
            url
            width
            height
          }
        }
      }
    }
  }
`

export const GetSlugs = gql`
  query getSlugs {
    products: nextStoreProductsCollection {
      items {
        slug
      }
    }
  }
`
