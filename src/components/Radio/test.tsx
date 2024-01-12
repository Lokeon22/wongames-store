import { render, screen, waitFor } from "../../utils/test-utils"

import Radio from "."
import userEvent from "@testing-library/user-event"

describe("<Radio />", () => {
  it("should render with black label", () => {
    const { container } = render(
      <Radio label="radio" labelFor="radio" labelColors="black" />
    )

    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: "#030517"
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render with label white", () => {
    render(<Radio label="radio" labelColors="white" />)

    expect(screen.getByText("radio")).toHaveStyle({
      color: "#FAFAFA"
    })
  })

  it("should be render without label", () => {
    render(<Radio />)

    expect(screen.queryByLabelText(/radio/i)).not.toBeInTheDocument()
  })

  it("should dispatch onCheck when label status changes", async () => {
    const onCheck = jest.fn()
    render(
      <Radio
        label="radio"
        labelFor="radio"
        onCheck={onCheck}
        value="anyvalue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByLabelText("radio"))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith("anyvalue")
  })
})
