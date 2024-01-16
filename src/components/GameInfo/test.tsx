import { render, screen } from "../../utils/test-utils"

import GameInfo from "."
import items from "./mock"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

describe("<GameInfo />", () => {
  it("should render the heading", () => {
    const { container } = render(<GameInfo {...items} />)

    expect(
      screen.getByRole("heading", { name: `${items.title}` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: `${items.description}` })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$215.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render the button", () => {
    render(<GameInfo {...items} />)

    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
