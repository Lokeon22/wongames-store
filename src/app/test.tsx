import { screen } from "@testing-library/react"
import { renderWithTheme } from "../utils/tests/helpers"
import Home from "./page"

type ComponentType = (props: object) => Promise<React.ReactElement>

async function resolvedComponent(Component: ComponentType, props: object) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}

describe("<Home />", () => {
  it("should render menu and footer", async () => {
    const HomeResolved = await resolvedComponent(Home, {})
    renderWithTheme(<HomeResolved />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it("should render the sections", async () => {
    const HomeResolved = await resolvedComponent(Home, {})
    renderWithTheme(<HomeResolved />)

    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /free games/i })
    ).toBeInTheDocument()
  })
})
