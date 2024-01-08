import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import Games from "."

import filterMock from "../../components/ExploreSidebar/mock"
import gamesMock from "../../components/GameCard/mock"

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
    renderWithTheme(<Games games={gamesMock} filterItems={filterMock} />)

    expect(screen.getByTestId("Mock Base")).toBeInTheDocument()
  })
})
