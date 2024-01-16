import { render, screen } from "../../utils/test-utils"

import { Wishlist } from "."
import gamesMock from "../../components/GameCard/mock"
import highlightsMock from "../../components/Highlight/mock"

const props = {
  games: gamesMock,
  recommendedTitle: "Game",
  recommendedGames: gamesMock,
  recommendedHighlights: highlightsMock
}

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

describe("<Wishlist />", () => {
  it("should render the mocks", () => {
    render(<Wishlist {...props} />)

    expect(
      screen.getByRole("heading", { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument()
  })

  it("should render empty when there are no games", () => {
    render(
      <Wishlist
        recommendedTitle={props.recommendedTitle}
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
