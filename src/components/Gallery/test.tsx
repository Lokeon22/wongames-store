import "../../../.jest/match-media-mock"
import { screen, fireEvent } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import Gallery from "."
import mockItems from "./mock"

describe("<Gallery />", () => {
  it("should render the heading", () => {
    renderWithTheme(<Gallery items={mockItems} />)

    expect(screen.getAllByRole("button")).toHaveLength(4)
    expect(
      screen.getByRole("button", { name: /gallery image 1/i })
    ).toHaveAttribute("src", mockItems[0].src)
  })

  it("should render open/close modal", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText("modal")

    expect(modal.getAttribute("aria-hidden")).toBe("true")
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByRole("button", { name: /gallery image 1/i }))
    expect(expect(modal.getAttribute("aria-hidden")).toBe("false"))
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it("should open modal with selected image", async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    fireEvent.click(screen.getByRole("button", { name: /gallery image 1/i }))

    const img = await screen.findByRole("img", { name: /gallery image 1/i })
    expect(img.parentElement?.parentElement).toHaveClass("slick-active")
  })

  it("should handle close modal when overlay or button clicked", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText("modal")

    fireEvent.click(screen.getByRole("button", { name: /gallery image 1/i }))

    fireEvent.click(screen.getByRole("button", { name: /close modal/i }))

    expect(modal.getAttribute("aria-hidden")).toBe("true")
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it("should handle close modal when ESC button is pressed", () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    const modal = screen.getByLabelText("modal")

    fireEvent.click(screen.getByRole("button", { name: /gallery image 1/i }))

    fireEvent.keyUp(container, { key: "Escape" })
    expect(modal.getAttribute("aria-hidden")).toBe("true")
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
