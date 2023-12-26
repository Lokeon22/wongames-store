import bannersMock from "../components/BannerSlider/mock"
import gamesMock from "../components/GameCardSlider/mock"
import highlightMock from "../components/Highlight/mock"

import { Home as HomeContent } from "../templates/Home"

async function getMocksData() {
  return {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighlight: highlightMock,
    upcommingMoreGames: gamesMock,
    freeGamesHighlight: highlightMock,
    freeGames: gamesMock
  }
}

export default async function Home() {
  const data = await getMocksData()

  return <HomeContent {...data} />
}
