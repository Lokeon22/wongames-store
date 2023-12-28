import { screen } from "@testing-library/react"

import { renderWithTheme } from "../../utils/tests/helpers"

import { Auth } from "."

describe("<Auth />", () => {
  it("should be render all components and children", () => {
    renderWithTheme(
      <Auth title="hello">
        <input type="text" />
      </Auth>
    )

    const logos = screen.getAllByRole("img", { name: /won games/i })
    expect(logos).toHaveLength(2)

    expect(
      screen.getByRole("heading", { name: /all your favorite games/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /won is the best/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/todos os direitos reservados/i)
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /hello/i })).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })
})
