import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
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
