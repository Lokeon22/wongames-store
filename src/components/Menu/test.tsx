import { render, screen, fireEvent } from "../../utils/test-utils"

import Menu from "."

describe("<Menu />", () => {
  it("should render the menu", () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /won games/i })).toBeInTheDocument()
  })

  it("should handle the open/close mobile menu", () => {
    render(<Menu />)

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
    render(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()

    const signins = screen.getAllByText(/sign in/i)
    expect(signins[0]).toBeInTheDocument()
    expect(signins[1]).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it("should show register box when logged in", () => {
    render(<Menu username="Gabriel" />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
