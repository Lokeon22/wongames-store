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
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGamesHighlight: highlightMock,
  freeGames: gamesMock
}

describe("<Home />", () => {
  it("should render menu and footer", () => {
    renderWithTheme(<Home {...data} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it("should render the sections", () => {
    renderWithTheme(<Home {...data} />)

    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /free games/i })
    ).toBeInTheDocument()
  })
})
