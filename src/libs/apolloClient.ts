import { ApolloClient, InMemoryCache } from '@apollo/client'

const API_URI = `https://${process.env.SHOPIFY_DOMAIN_NAME}/api/2023-01/graphql.json`

const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache(),
  headers: {
    'X-Shopify-Storefront-Access-Token': `${process.env.SHOPIFY_ACCESS_TOKEN}`
  }
})

export default client
