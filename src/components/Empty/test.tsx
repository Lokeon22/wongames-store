import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import Empty from "."

const props = {
  title: "Title Empty",
  description: "Description empty"
}

describe("<Empty />", () => {
  it("should render the Empty component", () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole("img", { name: /a gamer in a couch playing/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /title empty/i })
    ).toBeInTheDocument()
    expect(screen.getByText("Description empty")).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: "Go back to store" })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it("should not render the link when is not passed", () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole("button", { name: "Go back to store" })
    ).not.toBeInTheDocument()
  })
})
