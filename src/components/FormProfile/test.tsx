import { render, screen } from "../../utils/test-utils"

import FormProfile from "."

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

describe("<FormProfile />", () => {
  it("should render the profile form", () => {
    render(<FormProfile />)

    expect(
      screen.getByRole("heading", { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("E-mail")).toBeInTheDocument()
  })
})
