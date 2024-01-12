import { render, screen } from "../../utils/test-utils"

import Empty from "."

const props = {
  title: "Title Empty",
  description: "Description empty"
}

describe("<Empty />", () => {
  it("should render the Empty component", () => {
    const { container } = render(<Empty {...props} hasLink />)

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
    render(<Empty {...props} />)

    expect(
      screen.queryByRole("button", { name: "Go back to store" })
    ).not.toBeInTheDocument()
  })
})
