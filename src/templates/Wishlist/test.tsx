import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import { Wishlist } from "."
import gamesMock from "../../components/GameCard/mock"
import highlightsMock from "../../components/Highlight/mock"

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlights: highlightsMock
}

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

describe("<Wishlist />", () => {
  it("should render the mocks", () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole("heading", { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument()

    expect(screen.getAllByText(/red dead redemption/i)).toHaveLength(5)
  })

  it("should render empty when there are no games", () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlights={props.recommendedHighlights}
      />
    )

    expect(
      screen.getByRole("img", { name: "a gamer in a couch playing" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Nothing to see here" })
    ).toBeInTheDocument()
    expect(screen.getByText("Your wishlist is empty")).toBeInTheDocument()
  })
})
