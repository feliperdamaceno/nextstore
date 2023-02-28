import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query getProducts {
    nextStoreProductsCollection {
      items {
        sys {
          id
        }
        name
        slug
        rating
        price
      }
    }
  }
`
