import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import gamesMock from "../../components/GameCard/mock"
import highlightsMock from "../../components/Highlight/mock"
import items from "../../components/CartList/mock"
import cards from "../../components/PaymentOptions/mock"

import { Cart } from "."

const props = {
  games: gamesMock,
  highlights: highlightsMock,
  items,
  total: "R$ 350,00",
  cards
}

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

jest.mock("components/CartList", () => ({
  __esModule: true,
  default: function mock() {
    return <div data-testid="Mock CartList"></div>
  }
}))

jest.mock("components/PaymentOptions", () => ({
  __esModule: true,
  default: function mock() {
    return <div data-testid="Mock PaymentOptions"></div>
  }
}))

jest.mock("components/Empty", () => ({
  __esModule: true,
  default: function mock() {
    return <div data-testid="Mock Empty"></div>
  }
}))

describe("<Cart />", () => {
  it("should render the heading", () => {
    renderWithTheme(<Cart {...props} />)

    expect(screen.getByTestId("Mock Base")).toBeInTheDocument()
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument()
    expect(screen.getByTestId("Mock CartList")).toBeInTheDocument()
    expect(screen.getByTestId("Mock PaymentOptions")).toBeInTheDocument()
  })

  it("should render empty section", () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId("Mock Empty")).toBeInTheDocument()
  })
})
