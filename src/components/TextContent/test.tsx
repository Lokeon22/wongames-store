import { render, screen } from "../../utils/test-utils"

import TextContent from "."
import textMock from "./mock"

describe("<TextContent />", () => {
  it("should render the TextContent", () => {
    render(<TextContent {...textMock} />)

    expect(
      screen.getByRole("heading", { name: /description/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole("img")).toHaveLength(2)
    expect(screen.getAllByText(/heading/i)).toHaveLength(6)
    expect(screen.getAllByText(/lorem ipsum/i)).toHaveLength(12)
    expect(
      screen.getByRole("link", { name: /link inside the text/i })
    ).toBeInTheDocument()
  })

  it("should render the content color", () => {
    render(<TextContent {...textMock} />)

    const wrapper = screen.getByRole("heading", {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: "#FAFAFA"
    })
  })
})
