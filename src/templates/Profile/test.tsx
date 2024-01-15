import { render, screen } from "../../utils/test-utils"

import { Profile } from "."

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe("<Profile />", () => {
  it("should render the heading", () => {
    render(
      <Profile>
        <h2>teste</h2>
      </Profile>
    )

    expect(
      screen.getByRole("heading", { name: /my profile/i })
    ).toBeInTheDocument()
  })
})
