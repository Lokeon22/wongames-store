import { render, screen } from "../../utils/test-utils"
import CardsList from "."
import cardsMock from "../PaymentOptions/mock"

describe("<CardsList />", () => {
  it("should render the heading", () => {
    render(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole("heading", { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("img", { name: /visa/i })).toHaveAttribute(
      "src",
      "../img/flag.svg"
    )

    expect(screen.getByText(/4325/i)).toBeInTheDocument()
    expect(screen.getByText(/1234/i)).toBeInTheDocument()
  })
})
