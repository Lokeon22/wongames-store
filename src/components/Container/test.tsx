import { renderWithTheme } from "../../utils/tests/helpers"
import theme from "../../styles/theme"
import { Container } from "."

describe("<Container />", () => {
  it("should render the Container", () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyle({
      maxWidth: `${theme.grid.container}`
    })

    expect(container.firstChild).toHaveStyle({
      marginRight: /auto/
    })

    expect(container.firstChild).toHaveStyle({
      marginLeft: /auto/
    })

    expect(container.firstChild).toHaveStyle({
      paddingLeft: /1.6rem/
    })

    expect(container.firstChild).toHaveStyle({
      paddingRight: /1.6rem/
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
