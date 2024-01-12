import { render, screen } from "../../utils/test-utils"
import { MockedProvider } from "@apollo/client/testing"

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
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <span>Mock Base</span>
      </MockedProvider>
    )

    expect(screen.getByText("Mock Base"))
  })
})
