import { cacheExchange, createClient, fetchExchange } from '@urql/core'

const apiToken = process.env.NEXT_DATO_CMS_API_TOKEN
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + apiToken
}

export const datoClient = () => {
  return createClient({
    url: 'https://graphql.datocms.com',
    fetchOptions: { headers },
    exchanges: [cacheExchange, fetchExchange]
  })
}
