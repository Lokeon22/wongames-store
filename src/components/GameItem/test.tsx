import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import GameItem from "."

const props = {
  img: "red-dead-img.png",
  title: "Red dead",
  price: "215,00"
}

describe("<GameItem />", () => {
  it("should render the heading", () => {
    renderWithTheme(<GameItem {...props} />)

    expect(screen.getByRole("img", { name: /red dead/i })).toHaveAttribute(
      "src",
      `${props.img}`
    )
    expect(
      screen.getByRole("heading", { name: /red dead/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/215,00/i)).toBeInTheDocument()
  })

  it("should render the item with download link", () => {
    const downloadLink = "https://link"

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole("link", { name: `Get ${props.title}` })
    ).toHaveAttribute("href", downloadLink)
  })

  it("should render the paymentInfo", () => {
    const paymentInfo = {
      flag: "mastercard",
      number: "**** **** **** 1234",
      purchaseDate: "Purchase made on 07/20/2020 at 20:32",
      img: "img/flag.svg"
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole("img", { name: paymentInfo.flag })).toHaveAttribute(
      "src",
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
