import { ApolloClient, InMemoryCache } from '@apollo/client'

const API_URI = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
  }
})

export default client
