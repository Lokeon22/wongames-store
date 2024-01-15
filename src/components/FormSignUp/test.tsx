import { render, screen } from "../../utils/test-utils"
import { MockedProvider } from "@apollo/client/testing"

import FormSignUp from "."

describe("<FormSignUp />", () => {
  it("should render the form/signup", () => {
    const { container } = render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

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
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByText(/already have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument()
  })
})
