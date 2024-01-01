import "../../../.jest/match-media-mock"
import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"
import { Home } from "./index"

import bannersMock from "../../components/BannerSlider/mock"
import gamesMock from "../../components/GameCardSlider/mock"
import highlightMock from "../../components/Highlight/mock"

const data = {
  banners: bannersMock,
  highlightsDT: highlightMock,
  gamecardsDT: gamesMock
}

jest.mock("components/Menu", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock("components/Footer", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

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
  it("should render menu and footer", () => {
    renderWithTheme(<Home {...data} />)

    expect(screen.getByTestId("Mock Menu")).toBeInTheDocument()
    expect(screen.getByTestId("Mock BannerSlider")).toBeInTheDocument()
    expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(5)
    expect(screen.getByTestId("Mock Footer")).toBeInTheDocument()
  })
})
