import { initializeApollo } from "../../utils/apolo"
import { QUERY_GAMES } from "../../graphql/queries/games"
import { ApiResponse } from "../../graphql/gqltypes/queryGameType"

import GamesTemplate from "../../templates/Games"
import filterMock from "../../components/ExploreSidebar/mock"

export default async function Games() {
  const apolloClient = initializeApollo()

  const {
    data: {
      games: { data }
    }
  } = await apolloClient.query<ApiResponse>({
    query: QUERY_GAMES,
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 * 24 }
      }
    }
  })

  const games = data.map((game) => {
    return {
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      image: `http://localhost:1337${game.attributes.cover.data.attributes.url}`,
      price: game.attributes.price
    }
  })

  return <GamesTemplate games={games} filterItems={filterMock} />
}
