import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import CartList from "."
import cartMock from "./mock"

describe("<CartList />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(
      <CartList items={cartMock} total="R$ 330,00" />
    )

    expect(screen.getAllByRole("heading")).toHaveLength(2)
    expect(screen.getByText("R$ 330,00")).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
