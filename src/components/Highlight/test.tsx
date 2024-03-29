import { render, screen } from "../../utils/test-utils"
import * as S from "./styles"

import Highlight from "."

const props = {
  title: "Heading 1",
  subtitle: "Heading 2",
  backgroundImage: "/img/red-dead-img.png",
  buttonLabel: "Buy now",
  buttonLink: "/rdr2"
}

describe("<Highlight />", () => {
  it("should render the heading", () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole("heading", { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/rdr2"
    )
  })

  it("should render background image", () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it("should render the float image", () => {
    render(<Highlight {...props} floatImage="/img/red-dead-float.png" />)

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      "/img/red-dead-float.png"
    )
  })

  it("should render align right by default", () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"floatimage content"'
    )

    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`
    })
  })

  it("should render align left if is passed", () => {
    const { container } = render(<Highlight {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"content floatimage"'
    )

    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`
    })
  })
})
