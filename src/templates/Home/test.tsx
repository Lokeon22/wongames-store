import "../../../.jest/match-media-mock"
import { render, screen } from "../../utils/test-utils"
import { Home } from "./index"

import bannersMock from "../../components/BannerSlider/mock"
import gamesMock from "../../components/GameCardSlider/mock"
import highlightMock from "../../components/Highlight/mock"

const data = {
  banners: bannersMock,
  newGames: gamesMock,
  newGamesTitle: "New Games",
  popularGames: gamesMock,
  popularHighlights: highlightMock,
  popularGamesTitle: "Most Popular Games",
  upcomingGames: gamesMock,
  upcomingHighlights: highlightMock,
  upcomingGamesTitle: "Upcoming Games",
  lowpriceGames: gamesMock,
  lowpriceHighlights: highlightMock,
  lowpriceGamesTitle: "Under $2"
}

jest.mock("components/Showcase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock("components/BannerSlider", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe("<Home />", () => {
  it("should render banner and showcases", () => {
    render(<Home {...data} />)

    expect(screen.getByTestId("Mock BannerSlider")).toBeInTheDocument()
    expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(4)
  })
})
