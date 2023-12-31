import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import CartIcon from "."

describe("<CartIcon />", () => {
  it("should render without icon", () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it("should render with badge", () => {
    renderWithTheme(<CartIcon quantity={1} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/1/)).toBeInTheDocument()
  })
})
