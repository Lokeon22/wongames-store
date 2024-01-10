import { initializeApollo } from "../utils/apolo"
import { QUERY_HOME_BANNERS } from "../graphql/queries/home"
import { HomeDataProps } from "../graphql/gqltypes/queryHomeBannersType"

import { Home as HomeContent } from "../templates/Home"
import { bannerMapper, gamesMapper, highlightsMapper } from "@/utils/mappers"

const apolloClient = initializeApollo()

async function getHomeData() {
  const {
    data: {
      banners: { data: banners },
      newGames: { data: newGames },
      upcomingGames: { data: upcomingGames },
      lowpriceGames: { data: lowpriceGames },
      sections: { data: sections }
    }
  } = await apolloClient.query<HomeDataProps>({
    query: QUERY_HOME_BANNERS,
    variables: { date: "2021-01-01" },
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 }
      }
    }
  })
  return {
    banners: bannerMapper(banners),
    newGames: gamesMapper(newGames),
    newGamesTitle: sections.attributes.newGames.title,
    popularGames: gamesMapper(sections.attributes.popularGames.games.data),
    popularHighlights: highlightsMapper(
      sections.attributes.popularGames.highlight
    ),
    popularGamesTitle: sections.attributes.popularGames.title,
    upcomingGames: gamesMapper(upcomingGames),
    upcomingHighlights: highlightsMapper(
      sections.attributes.upcomingGames.highlight
    ),
    upcomingGamesTitle: sections.attributes.upcomingGames.title,
    lowpriceGames: gamesMapper(lowpriceGames),
    lowpriceHighlights: highlightsMapper(
      sections.attributes.lowpriceGames.highlight
    ),
    lowpriceGamesTitle: sections.attributes.lowpriceGames.title
  }
}

export default async function Home() {
  const data = await getHomeData()

  return <HomeContent {...data} />
}
