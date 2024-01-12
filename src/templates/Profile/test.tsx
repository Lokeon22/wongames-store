import { render, screen } from "../../utils/test-utils"

import { Profile } from "."

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
