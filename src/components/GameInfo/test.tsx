import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import GameInfo from "."
import items from "./mock"

describe("<GameInfo />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<GameInfo {...items} />)

    expect(
      screen.getByRole("heading", { name: `${items.title}` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: `${items.description}` })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$215.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render the buttons", () => {
    renderWithTheme(<GameInfo {...items} />)

    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
