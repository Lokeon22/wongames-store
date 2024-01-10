import { initializeApollo } from "../../utils/apolo"
import { Wishlist as WishlistContent } from "../../templates/Wishlist"
import gamesMock from "../../components/GameCard/mock"

import { QUERY_RECOMMENDED_GAMES } from "../../graphql/queries/recommended"
import { RecommendedGamesProps } from "../../graphql/gqltypes/queryRecommendedType"
import { gamesMapper, highlightsMapper } from "../../utils/mappers"

const apolloClient = initializeApollo()

async function getDataRecommended() {
  const {
    data: {
      recommended: { data: recommended }
    }
  } = await apolloClient.query<RecommendedGamesProps>({
    query: QUERY_RECOMMENDED_GAMES,
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 }
      }
    }
  })

  return {
    games: gamesMock,
    recommendedTitle: recommended.attributes.section.title,
    recommendedGames: gamesMapper(recommended.attributes.section.games.data),
    recommendedHighlights: highlightsMapper(
      recommended.attributes.section.highlight
    )
  }
}

export default async function Wishlist() {
  const data = await getDataRecommended()

  return <WishlistContent {...data} />
}
