import { render, screen, waitFor } from "../../utils/test-utils"
import { Email } from "@styled-icons/material-outlined"

import TextField from "."
import userEvent from "@testing-library/user-event"

describe("<TextField />", () => {
  it("should render the label", () => {
    render(<TextField label="email" labelFor="email" id="email" />)

    expect(screen.getByLabelText("email")).toBeInTheDocument()
  })

  it("should render without label", () => {
    render(<TextField />)

    expect(screen.queryByLabelText("email")).not.toBeInTheDocument()
  })

  it("should render the input", () => {
    render(<TextField label="email" labelFor="email" id="email" />)

    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "text")
  })

  it("should render the placeholder", () => {
    render(<TextField placeholder="hello world" />)

    expect(screen.getByPlaceholderText(/hello world/i)).toBeInTheDocument()
  })

  it("should render the white label by default", () => {
    render(<TextField label="email" labelFor="email" id="email" />)

    expect(screen.getByText(/email/i)).toHaveStyle({
      color: "#FAFAFA"
    })
  })

  it("should render the black label when passed", () => {
    render(
      <TextField
        label="email"
        labelFor="email"
        id="email"
        labelColors="black"
      />
    )

    expect(screen.getByText(/email/i)).toHaveStyle({
      color: "#030517"
    })
  })

  it("should dispatch onChange when input change", async () => {
    const onChange = jest.fn()

    render(
      <TextField
        id="email"
        label="email"
        labelFor="email"
        placeholder="textfield"
        onChange={onChange}
      />
    )

    const element = screen.getByText("email")
    const text = "gabriel@gmail.com"

    userEvent.type(element, text)
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(text.length)
    })
  })

  it("should render with icon", () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it("should render on the right size", () => {
    render(
      <TextField iconPosition="right" icon={<Email data-testid="icon" />} />
    )

    expect(screen.getByTestId(/icon/i)).toHaveStyle({ right: "-0.6rem" })
  })

  it("should render on the left size by default", () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toHaveStyle({ right: "0.6rem" })
  })

  it("should render the disabled input", () => {
    render(<TextField disabled label="hello" />)

    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it("should return error on input", () => {
    const { container } = render(
      <TextField
        icon={<Email data-test="icon" />}
        error="error"
        label="email"
        labelFor="email"
        id="email"
      />
    )

    expect(screen.getByText(/error/i)).toBeInTheDocument()
    expect(screen.getByText(/error/i)).toHaveStyle({
      color: "#FF6347"
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
