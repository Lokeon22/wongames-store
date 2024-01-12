import { render, screen, waitFor } from "../../utils/test-utils"

import userEvent from "@testing-library/user-event"
import Checkbox from "."

describe("<Checkbox />", () => {
  it("should render with label", () => {
    const { container } = render(
      <Checkbox label="checkbox label" labelFor="check" />
    )

    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check")

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render without label", () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText("checkbox")).not.toBeInTheDocument()
  })

  it("should render with black label", () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: "#030517"
    })
  })

  it("should dispatch onCheck when label change", async () => {
    const onCheck = jest.fn()

    render(<Checkbox label="check box" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole("checkbox"))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))

    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
