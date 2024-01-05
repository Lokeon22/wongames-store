import userEvent from "@testing-library/user-event"
import { screen, waitFor } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import PaymentOptions from "."
import cards from "./mock"

const props = {
  cards,
  handlePayment: () => {}
}

describe("<PaymentOptions />", () => {
  it("should render the heading", () => {
    renderWithTheme(<PaymentOptions {...props} />)

    expect(screen.getByRole("img", { name: cards[0].flag })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /payment/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole("button")).toHaveLength(3)
    expect(screen.getAllByRole("img")).toHaveLength(2)
  })

  it("should handle select card when clicking on the label", async () => {
    renderWithTheme(<PaymentOptions {...props} />)

    userEvent.click(screen.getByLabelText(/1234/))
    await waitFor(() => {
      expect(screen.getByRole("radio", { name: /1234/ })).toBeChecked()
    })
  })

  it("should not call handlepayment when button is disabled", () => {
    const handlePayment = jest.fn()
    renderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole("button", { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it("should not call handlepayment when credit card is selected", async () => {
    const handlePayment = jest.fn()
    renderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)

    userEvent.click(screen.getByLabelText(/1234/))
    userEvent.click(screen.getByRole("button", { name: /buy now/i }))
    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
