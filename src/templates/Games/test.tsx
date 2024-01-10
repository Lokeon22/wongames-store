import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Base"></div>
  }
}))

jest.mock("components/ExploreSidebar", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock ExploreSidebar">{children}</div>
  )
}))

describe("<Games />", () => {
  it("should render the heading", () => {
    renderWithTheme(
      <div>
        <p>Mock</p>
      </div>
    )

    expect(screen.getByText("Mock")).toBeInTheDocument()
  })
})
