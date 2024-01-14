import { render, screen } from "../../utils/test-utils"
import { CartContextDefaultValues } from "../../hooks/use-cart"
import items from "../CartList/mock"

import CartDropdown from "."

describe("<CartDropdown />", () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: "R$ 350,00"
    }

    render(<CartDropdown />, { cartProviderProps })
  })

  it("should render the CartIcon", () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it("should render Dropdown content with cart items and total", () => {
    expect(screen.getByText("R$ 350,00")).toBeInTheDocument()
    expect(screen.getByText(/borderlands 3/i)).toBeInTheDocument()
  })
})
