import { render, screen } from "../../utils/test-utils"
import items from "../CartList/mock"

import CartDropdown from "."

describe("<CartDropdown />", () => {
  it("should render the CartIcon", () => {
    render(<CartDropdown items={items} total={"R$ 350,00"} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it("should render Dropdown content with cart items and total", () => {
    render(<CartDropdown items={items} total={"R$ 350,00"} />)

    expect(screen.getByText("R$ 350,00")).toBeInTheDocument()
    expect(screen.getByText(/borderlands 3/i)).toBeInTheDocument()
  })
})
