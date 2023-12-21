import { fireEvent, screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import GameCard from "."

const props = {
  image: "/img/red-dead.png",
  title: "Red dead",
  developer: "Rockstar Games",
  price: "235,00"
}

describe("<GameCard />", () => {
  it("should render the heading", () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole("img")).toHaveAttribute("src", props.image)
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it("should render price in label default", () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(`${props.price}`)).not.toHaveStyle({
      textDecoration: "line-through"
    })

    expect(screen.getByText(`${props.price}`)).not.toHaveStyle({
      color: "#8F8F8F"
    })

    expect(screen.getByText(`${props.price}`)).toHaveStyle({
      backgroundColor: "#3CD3C1"
    })
  })

  it("should render a line-through in price when promotional", () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="215,00" />)

    expect(screen.getByText(`${props.price}`)).toBeInTheDocument()
    expect(screen.getByText("215,00")).toBeInTheDocument()

    expect(screen.getByText(`${props.price}`)).toHaveStyle({
      textDecoration: "line-through"
    })

    expect(screen.getByText("215,00")).not.toHaveStyle({
      textDecoration: "line-through"
    })
  })

  it("should render a filled favorite icon when favorite is true", () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it("should call onFav when method favorite is clicked", () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole("button")[0])

    expect(onFav).toBeCalled()
  })

  it("should be render ribbon", () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My ribbon"
        ribbonColors="secondary"
        ribbonSizes="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" })
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" })
    expect(ribbon).toBeInTheDocument()
  })
})
