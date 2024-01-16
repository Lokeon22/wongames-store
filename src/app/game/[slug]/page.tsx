import { initializeApollo } from "../../../utils/apolo"
import { Game as GameContent } from "../../../templates/Game"

import { ApiResponse } from "../../../graphql/gqltypes/queryGameBySlugType"
import { RecommendedGamesProps } from "../../../graphql/gqltypes/queryRecommendedType"
import { UpcomingGamesProps } from "../../../graphql/gqltypes/queryUpcomingType"
import { QUERY_GAME_BY_SLUG } from "../../../graphql/queries/games"
import { QUERY_RECOMMENDED_GAMES } from "../../../graphql/queries/recommended"
import { QUERY_UPCOMING } from "../../../graphql/queries/upcoming"

import { Platform } from "../../../components/GameDetails"
import { gamesMapper, highlightsMapper } from "../../../utils/mappers"

import NotFound from "../../../app/not-found"

const apolloClient = initializeApollo()

type ParamsProps = {
  params: { slug: string }
}

async function generateStaticParams({ params }: ParamsProps) {
  const {
    data: {
      games: { data }
    }
  } = await apolloClient.query<ApiResponse>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params.slug}` },
    context: {
      fetchOptions: {
        next: { revalidate: 60 }
      }
    }
  })

  if (data.length <= 0) return

  const game = data[0].attributes

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

  const {
    data: {
      upcomingGames: { data: upcomingGames },
      showcase: { data: upcomingHighlight }
    }
  } = await apolloClient.query<UpcomingGamesProps>({
    query: QUERY_UPCOMING,
    variables: { date: "2021-01-01" },
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 }
      }
    }
  })

  return {
    cover: `http://localhost:1337${game.cover.data.attributes.url}`,
    gameInfo: {
      id: data[0].id,
      title: game.name,
      price: game.price,
      description: game.short_description,
      developer: game.developers.data[0].attributes.name,
      slug: game.slug,
      image: `http://localhost:1337${game.cover.data.attributes.url}`
    },
    gallery: game.gallery.data.map((img) => ({
      src: `http://localhost:1337${img.attributes.url}`,
      label: img.attributes.label
    })),
    description: game.description,
    details: {
      heading: "Game Details",
      company: game.developers.data[0].attributes.name,
      releaseDate: game.release_date,
      platforms: game.platforms.data.map(
        (platform) => platform.attributes.name as Platform
      ),
      publisher: game.publisher.data.attributes.name,
      ratings: game.rating,
      genres: game.categories.data.map((category) => category.attributes.name)
    },
    upcomingTitle: upcomingHighlight.attributes.upcomingGames.title,
    upcomingGames: gamesMapper(upcomingGames),
    upcomingHighlight: highlightsMapper(
      upcomingHighlight.attributes.upcomingGames.highlight
    ),
    recommendedTitle: recommended.attributes.section.title,
    recommendedGames: gamesMapper(recommended.attributes.section.games.data)
  }
}

export default async function Game({ params }: ParamsProps) {
  const data = await generateStaticParams({ params })

  if (!data) return <NotFound />

  return <GameContent {...data} />
}
