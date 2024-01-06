import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import FormProfile from "."

describe("<FormProfile />", () => {
  it("should render the profile form", () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole("heading", { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText("Type your password")
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText("New password")).toBeInTheDocument()
  })
})
