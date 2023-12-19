import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import { fireEvent } from "@testing-library/react"

import Menu from "."

describe("<Menu />", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /won games/i })).toBeInTheDocument()
  })

  it("should handle the open/close mobile menu", () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole("navigation", { hidden: true })

    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true")
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false"))
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true"))
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it("should show register box when logged out", () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it("should show register box when logged in", () => {
    renderWithTheme(<Menu username="Gabriel" />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
