import { gql } from '@apollo/client'

export const GetProducts = gql`
  query GetProducts {
    products(first: 100) {
      nodes {
        variants(first: 1) {
          nodes {
            id
          }
        }
        title
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          altText
          url
          width
          height
        }
      }
    }
  }
`

export const GetFullProduct = gql`
  query getFullProduct($handle: String!) {
    product(handle: $handle) {
      variants(first: 1) {
        nodes {
          id
        }
      }
      title
      description
      availableForSale
      tags
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 100) {
        nodes {
          altText
          url
          width
          height
        }
      }
    }
  }
`

export const GetHandlers = gql`
  query getHandlers {
    products(first: 100) {
      nodes {
        handle
      }
    }
  }
`
