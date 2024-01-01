import bannersMock from "../components/BannerSlider/mock"
import gamesMock from "../components/GameCardSlider/mock"
import highlightMock from "../components/Highlight/mock"

import { Home as HomeContent } from "../templates/Home"

async function getMocksData() {
  return {
    banners: bannersMock,
    gamecardsDT: gamesMock,
    highlightsDT: highlightMock
  }
}

export default async function Home() {
  const data = await getMocksData()

  return <HomeContent {...data} />
}
