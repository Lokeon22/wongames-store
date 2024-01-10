import { Cart as CartContent } from "../../templates/Cart"
import items from "../../components/CartList/mock"
import cards from "../../components/PaymentOptions/mock"

import { initializeApollo } from "../..//utils/apolo"
import { QUERY_RECOMMENDED_GAMES } from "../../graphql/queries/recommended"
import { RecommendedGamesProps } from "../../graphql/gqltypes/queryRecommendedType"
import { gamesMapper, highlightsMapper } from "../../utils/mappers"

const apolloClient = initializeApollo()

async function getDataCart() {
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
    recommendedTitle: recommended.attributes.section.title,
    games: gamesMapper(recommended.attributes.section.games.data),
    highlights: highlightsMapper(recommended.attributes.section.highlight),
    items,
    total: "R$ 350,00",
    cards
  }
}

export default async function Cart() {
  const data = await getDataCart()

  return <CartContent {...data} />
}
