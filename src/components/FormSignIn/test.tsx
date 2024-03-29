import { render, screen } from "../../utils/test-utils"

import FormSignIn from "."

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    query: "",
    asPath: "",
    route: "/"
  }))
}))

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe("<FormSignIn />", () => {
  it("should render the form/signin", () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render the forgot password link", () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole("link", { name: /forgot your password?/i })
    ).toBeInTheDocument()
  })

  it("should render the text to sign up", () => {
    render(<FormSignIn />)

    expect(screen.getByText(/dont have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument()
  })
})
