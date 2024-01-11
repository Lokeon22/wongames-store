import { initializeApollo } from "../../utils/apolo"
import { QUERY_GAMES } from "../../graphql/queries/games"
import { ApiResponse } from "../../graphql/gqltypes/queryGameType"

import GamesTemplate from "../../templates/Games"
import filterMock from "../../components/ExploreSidebar/mock"

export default async function Games() {
  const apolloClient = initializeApollo()

  await apolloClient.query<ApiResponse>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  const apolloInitialState = JSON.stringify(apolloClient.cache.extract())

  return (
    <GamesTemplate
      apolloInitialState={apolloInitialState}
      filterItems={filterMock}
    />
  )
}
