import { initializeApollo } from "../utils/apolo"
import { QUERY_HOME_BANNERS } from "../graphql/queries/home"
import { HomeDataProps } from "../graphql/gqltypes/queryHomeBannersType"

import { Home as HomeContent } from "../templates/Home"

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
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 }
      }
    }
  })

  return {
    banners: banners.map(({ attributes }) => {
      return {
        img: `http://localhost:1337${attributes.image.data.attributes.url}`,
        title: attributes.title,
        subtitle: attributes.subtitle,
        buttonLabel: attributes.button.label,
        buttonLink: attributes.button.link,
        ribbon: attributes.ribbon?.text || null,
        ribbonSize: attributes.ribbon?.size,
        ribbonColor: attributes.ribbon?.color
      }
    }),
    newGames: newGames.map(({ attributes }) => {
      return {
        slug: attributes.slug,
        image: `http://localhost:1337${attributes.cover.data.attributes.url}`,
        title: attributes.name,
        developer: attributes.developers.data[0].attributes.name,
        price: attributes.price
      }
    }),
    newGamesTitle: sections.attributes.newGames.title,
    popularGames: sections.attributes.popularGames.games.data.map(
      ({ attributes }) => {
        return {
          slug: attributes.slug,
          image: `http://localhost:1337${attributes.cover.data.attributes.url}`,
          title: attributes.name,
          developer: attributes.developers.data[0].attributes.name,
          price: attributes.price
        }
      }
    ),
    popularHighlights: {
      title: sections.attributes.popularGames.highlight.title,
      subtitle: sections.attributes.popularGames.highlight.subtitle,
      backgroundImage: `http://localhost:1337${sections.attributes.popularGames.highlight.background.data.attributes.url}`,
      floatImage: `http://localhost:1337${sections.attributes.popularGames.highlight.floatImage.data.attributes.url}`,
      buttonLabel: sections.attributes.popularGames.highlight.buttonLabel,
      buttonLink: sections.attributes.popularGames.highlight.buttonLink
    },
    popularGamesTitle: sections.attributes.popularGames.title,
    upcomingGames: upcomingGames.map(({ attributes }) => {
      return {
        slug: attributes.slug,
        image: `http://localhost:1337${attributes.cover.data.attributes.url}`,
        title: attributes.name,
        developer: attributes.developers.data[0].attributes.name,
        price: attributes.price
      }
    }),
    upcomingHighlights: {
      title: sections.attributes.upcomingGames.highlight.title,
      subtitle: sections.attributes.upcomingGames.highlight.subtitle,
      backgroundImage: `http://localhost:1337${sections.attributes.upcomingGames.highlight.background.data.attributes.url}`,
      floatImage: `http://localhost:1337${sections.attributes.upcomingGames.highlight.floatImage.data.attributes.url}`,
      buttonLabel: sections.attributes.upcomingGames.highlight.buttonLabel,
      buttonLink: sections.attributes.upcomingGames.highlight.buttonLink,
      alignment: sections.attributes.upcomingGames.highlight.alignment
    },
    upcomingGamesTitle: sections.attributes.upcomingGames.title,
    lowpriceGames: lowpriceGames.map(({ attributes }) => {
      return {
        slug: attributes.slug,
        image: `http://localhost:1337${attributes.cover.data.attributes.url}`,
        title: attributes.name,
        developer: attributes.developers.data[0].attributes.name,
        price: attributes.price
      }
    }),
    lowpriceHighlights: {
      title: sections.attributes.lowpriceGames.highlight.title,
      subtitle: sections.attributes.lowpriceGames.highlight.subtitle,
      backgroundImage: `http://localhost:1337${sections.attributes.lowpriceGames.highlight.background.data.attributes.url}`,
      floatImage: `http://localhost:1337${sections.attributes.lowpriceGames.highlight.floatImage.data.attributes.url}`,
      buttonLabel: sections.attributes.lowpriceGames.highlight.buttonLabel,
      buttonLink: sections.attributes.lowpriceGames.highlight.buttonLink
    },
    lowpriceGamesTitle: sections.attributes.lowpriceGames.title
  }
}

export default async function Home() {
  const data = await getHomeData()

  return <HomeContent {...data} />
}
