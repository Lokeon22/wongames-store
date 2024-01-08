import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import UserDropdown from "."

describe("<UserDropdown />", () => {
  it("should render the UserDropdown title and links", () => {
    renderWithTheme(<UserDropdown username="Gabriel" />)

    expect(screen.getByText(/gabriel/i)).toBeInTheDocument()

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })
})
