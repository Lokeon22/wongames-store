import { render, screen } from "../../utils/test-utils"

import CartList from "."
import cartMock from "./mock"

describe("<CartList />", () => {
  it("should render the cartList", () => {
    const { container } = render(
      <CartList items={cartMock} total="R$ 330,00" />
    )

    expect(screen.getAllByRole("heading")).toHaveLength(2)
    expect(screen.getByText("R$ 330,00")).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render the button", () => {
    render(<CartList items={cartMock} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it("should render empty if there are no games", () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})
