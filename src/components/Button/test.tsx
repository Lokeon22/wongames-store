import { render, screen } from "../../utils/test-utils"
import { AddShoppingCart } from "@styled-icons/material-outlined"

import Button from "."

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    const { container } = render(<Button size="medium">Buy now</Button>)

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem"
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render the small size", () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3rem",
      padding: "0.8rem",
      "font-size": "1.2rem"
    })
  })

  it("should render the large size", () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "5rem",
      padding: "0.8rem 4.8rem",
      "font-size": "1.6rem"
    })
  })

  it("should render a fullWidth version", () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%"
    })
  })

  it("should render a icon version", () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("should render a minimal version", () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      background: "none"
    })
  })

  it("should render button as a link", () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/link"
    )
  })
})
