import "../../../.jest/match-media-mock"
import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"
import { Home } from "./index"

import bannersMock from "../../components/BannerSlider/mock"
import gamesMock from "../../components/GameCardSlider/mock"
import highlightMock from "../../components/Highlight/mock"

const data = {
  banners: bannersMock,
  newGames: gamesMock,
  popularGames: gamesMock,
  popularHighlights: highlightMock,
  upcomingGames: gamesMock,
  upcomingHighlights: highlightMock,
  lowpriceGames: gamesMock,
  lowpriceHighlights: highlightMock
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
    renderWithTheme(<Home {...data} />)

    expect(screen.getByTestId("Mock BannerSlider")).toBeInTheDocument()
    expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(5)
  })
})
