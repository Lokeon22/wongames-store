import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import FormSignUp from "."

describe("<FormSignIn />", () => {
  it("should render the form/signin", () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Confirm password")).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: /sign up now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render the link to signin/page", () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByText(/already have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument()
  })
})
