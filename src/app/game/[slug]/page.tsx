import { Game as GameContent } from "../../../templates/Game"
import highlightMock from "../../../components/Highlight/mock"

import { ApiResponse } from "../../../graphql/gqltypes/queryGameBySlugType"
import { QUERY_GAME_BY_SLUG } from "../../../graphql/queries/games"
import { initializeApollo } from "../../../utils/apolo"
import { Platform } from "../../../components/GameDetails"

const apolloClient = initializeApollo()

type ParamsProps = {
  params: { slug: string }
}

const gameMock = [
  {
    slug: "read-dead-2",
    image: "/img/red-dead.png",
    title: "Red Dead Redemption",
    developer: "Rockstar Games",
    price: 235
  }
]

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

  const game = data[0].attributes

  return {
    cover: `http://localhost:1337${game.cover.data.attributes.url}`,
    gameInfo: {
      title: game.name,
      price: game.price,
      description: game.short_description
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
    upcomingGames: gameMock,
    upcomingHighlight: highlightMock,
    recommendedGames: gameMock
  }
}

export default async function Game({ params }: ParamsProps) {
  const data = await generateStaticParams({ params })

  return <GameContent {...data} />
}
