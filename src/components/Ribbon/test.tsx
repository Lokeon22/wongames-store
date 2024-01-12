import { render, screen } from "../../utils/test-utils"

import Ribbon from "."

describe("<Ribbon />", () => {
  it("should render the text correctly", () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it("should render with the primary color", () => {
    render(<Ribbon color="primary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: "#F231A5"
    })
  })

  it("should render with the secondary color", () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: "#3CD3C1"
    })
  })

  it("should render the default size", () => {
    render(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      "font-size": "1.4rem",
      height: "3.6rem"
    })
  })

  it("should render the small size", () => {
    render(<Ribbon size="small">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      "font-size": "1.2rem",
      height: "2.6rem"
    })
  })
})
