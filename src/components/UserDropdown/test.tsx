import { render, screen } from "../../utils/test-utils"

import UserDropdown from "."

describe("<UserDropdown />", () => {
  it("should render the UserDropdown title and links", () => {
    render(<UserDropdown username="Gabriel" />)

    expect(screen.getByText(/gabriel/i)).toBeInTheDocument()

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })
})
