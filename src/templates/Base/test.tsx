import { render, screen } from "../../utils/test-utils"

import Base from "."

jest.mock("components/Menu", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock("components/Footer", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe("<Base />", () => {
  it("should render the base template", () => {
    render(
      <Base>
        <h2>Hellow</h2>
      </Base>
    )

    expect(screen.getByTestId("Mock Menu")).toBeInTheDocument()
    expect(screen.getByTestId("Mock Footer")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Hellow" })).toBeInTheDocument()
  })
})
