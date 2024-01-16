import "../../../.jest/match-media-mock"
import { render, screen } from "../../utils/test-utils"

import Showcase from "."
import gamesMock from "../GameCardSlider/mock"
import highlightMock from "../Highlight/mock"

import { GameCardProps } from "../GameCard"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

const items: GameCardProps[] = gamesMock
const props = highlightMock

describe("<Showcase />", () => {
  it("should render showcase with all components", () => {
    render(<Showcase headtitle="Hello" highlights={props} gamecards={items} />)

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
    render(<Showcase headtitle="Hello" gamecards={items} />)

    expect(
      screen.queryByRole("heading", { name: /heading 1/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("link", { name: /buy now/i })
    ).not.toBeInTheDocument()
  })

  it("should render showcase without gamecards", () => {
    render(<Showcase headtitle="Hello" highlights={props} />)

    expect(
      screen.queryByRole("heading", { name: /red dead redemption/i })
    ).not.toBeInTheDocument()
  })
})
