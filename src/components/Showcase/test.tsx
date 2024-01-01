import "../../../.jest/match-media-mock"
import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import Showcase from "."
import gamesMock from "../GameCardSlider/mock"
import highlightMock from "../Highlight/mock"

import { GameCardProps } from "../GameCard"

const items: GameCardProps[] = gamesMock
const props = highlightMock

describe("<Showcase />", () => {
  it("should render showcase with all components", () => {
    renderWithTheme(
      <Showcase headtitle="Hello" highlights={props} gamecards={items} />
    )

    expect(screen.getByRole("heading", { name: /hello/i })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Red Dead Redemption" })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: items[0].title })
    ).toBeInTheDocument()

    expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/rdr2"
    )
  })

  it("should render showcase without highlight", () => {
    renderWithTheme(<Showcase headtitle="Hello" gamecards={items} />)

    expect(
      screen.queryByRole("heading", { name: /heading 1/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("link", { name: /buy now/i })
    ).not.toBeInTheDocument()
  })

  it("should render showcase without gamecards", () => {
    renderWithTheme(<Showcase headtitle="Hello" highlights={props} />)

    expect(
      screen.queryByRole("heading", { name: /red dead redemption/i })
    ).not.toBeInTheDocument()
  })
})
