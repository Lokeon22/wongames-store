import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import GameDetails from "."
import itemMock from "../GameDetails/mock"

describe("<GameDetails />", () => {
  it("should render the GameDetails", () => {
    const { container } = renderWithTheme(<GameDetails {...itemMock} />)

    expect(screen.getByText(/game details/i)).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /company/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /genre/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should be render the plataformsIcons", () => {
    renderWithTheme(<GameDetails {...itemMock} />)

    expect(screen.getByRole("img", { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /mac/i })).toBeInTheDocument()
  })

  it("should render the formated date", () => {
    renderWithTheme(<GameDetails {...itemMock} />)

    expect(screen.getByText(/nov 16, 2019/i)).toBeInTheDocument()
  })

  it("should render 18+ rating when BR18", () => {
    renderWithTheme(<GameDetails {...itemMock} />)

    expect(screen.getByText(/18+/i)).toBeInTheDocument()
  })

  it("should render a list of genres", () => {
    renderWithTheme(<GameDetails {...itemMock} />)

    expect(screen.getByText("Action / Adventure")).toBeInTheDocument()
  })
})
