import { screen, waitFor } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import TextField from "."
import userEvent from "@testing-library/user-event"

describe("<TextField />", () => {
  it("should render the label", () => {
    renderWithTheme(<TextField label="email" labelFor="email" id="email" />)

    expect(screen.getByLabelText("email")).toBeInTheDocument()
  })

  it("should render without label", () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText("email")).not.toBeInTheDocument()
  })

  it("should render the input", () => {
    renderWithTheme(<TextField label="email" labelFor="email" id="email" />)

    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "text")
  })

  it("should render the placeholder", () => {
    renderWithTheme(<TextField placeholder="hello world" />)

    expect(screen.getByPlaceholderText(/hello world/i)).toBeInTheDocument()
  })

  it("should render the white label by default", () => {
    renderWithTheme(<TextField label="email" labelFor="email" id="email" />)

    expect(screen.getByText(/email/i)).toHaveStyle({
      color: "#FAFAFA"
    })
  })

  it("should render the black label when passed", () => {
    renderWithTheme(
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

    renderWithTheme(
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
})
