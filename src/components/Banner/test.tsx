import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import Banner from "."

const props = {
  img: "https://source.unsplash.com/user/willianjusten/1042x580",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season</p>",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death"
}

describe("<Banner />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole("heading", { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://source.unsplash.com/user/willianjusten/1042x580"
    )
    expect(
      screen.getByRole("heading", { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/games/defy-death"
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render a Ribbon", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="my ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: "#3CD3C1"
    })
    expect(ribbon).toHaveStyle({
      height: "2.6rem",
      fontSize: "1.2rem"
    })
  })
})
