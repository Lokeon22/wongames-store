import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"
import "jest-styled-components"

import ProfileMenu from "."

describe("<ProfileMenu />", () => {
  it("should render the nav menu", () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole("link", { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /sign out/i })).toBeInTheDocument()

    expect(screen.getByRole("link", { name: /my profile/i })).toHaveAttribute(
      "href",
      "/profile/me"
    )

    expect(screen.getByRole("link", { name: /my cards/i })).toHaveAttribute(
      "href",
      "/profile/cards"
    )

    expect(screen.getByRole("link", { name: /my orders/i })).toHaveAttribute(
      "href",
      "/profile/orders"
    )

    expect(screen.getByRole("link", { name: /sign out/i })).toHaveAttribute(
      "href",
      "/logout"
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
