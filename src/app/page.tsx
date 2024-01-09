import { initializeApollo } from "../utils/apolo"
import { QUERY_HOME_BANNERS } from "../graphql/queries/home"
import { HomeBannersProps } from "../graphql/gqltypes/queryHomeBannersType"

import { Home as HomeContent } from "../templates/Home"
import gamesMock from "../components/GameCardSlider/mock"
import highlightMock from "../components/Highlight/mock"

const apolloClient = initializeApollo()

async function getHomeData() {
  const {
    data: {
      banners: { data },
      newGames: { data: dataGames }
    }
  } = await apolloClient.query<HomeBannersProps>({
    query: QUERY_HOME_BANNERS,
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 }
      }
    }
  })

  return {
    banners: data.map(({ attributes }) => {
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
    newGames: dataGames.map(({ attributes }) => {
      return {
        slug: attributes.slug,
        image: `http://localhost:1337${attributes.cover.data.attributes.url}`,
        title: attributes.name,
        developer: attributes.developers.data[0].attributes.name,
        price: attributes.price
      }
    }),
    popularGames: gamesMock,
    popularHighlights: highlightMock,
    upcomingGames: gamesMock,
    upcomingHighlights: highlightMock,
    lowpriceGames: gamesMock,
    lowpriceHighlights: highlightMock
  }
}

export default async function Home() {
  const data = await getHomeData()

  return <HomeContent {...data} />
}
