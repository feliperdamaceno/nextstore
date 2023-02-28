import { ApolloClient, InMemoryCache } from '@apollo/client'

const URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/explore?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`

export const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache()
})
