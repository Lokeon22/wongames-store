import { render, screen } from "../../utils/test-utils"
import { Session } from "next-auth"

import GameCard from "."

const data: Session = {
  user: {
    id: "1",
    username: "teste",
    email: "teste@gmail.com",
    jwt: "dahyunlokeon22",
    blocked: false,
    confirmed: true
  },
  expires: ""
}

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => {
    return [{ section: data }]
  })
}))

const props = {
  id: "1",
  slug: "read-dead-2",
  image: "/img/red-dead.png",
  title: "Read dead",
  developer: "Rockstar Games",
  price: 235
}

describe("<GameCard />", () => {
  it("should render the heading", () => {
    render(<GameCard {...props} />)

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/game/${props.slug}`
    )

    expect(
      screen.getByRole("heading", { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole("img")).toHaveAttribute("src", props.image)
    expect(screen.getByText("$235.00")).toBeInTheDocument()
  })

  it("should render price in label default", () => {
    render(<GameCard {...props} />)

    expect(screen.getByText("$235.00")).not.toHaveStyle({
      textDecoration: "line-through"
    })

    expect(screen.getByText("$235.00")).not.toHaveStyle({
      color: "#8F8F8F"
    })

    expect(screen.getByText("$235.00")).toHaveStyle({
      backgroundColor: "#3CD3C1"
    })
  })

  it("should render a line-through in price when promotional", () => {
    render(<GameCard {...props} promotionalPrice={215} />)

    expect(screen.getByText("$235.00")).toBeInTheDocument()
    expect(screen.getByText("$215.00")).toBeInTheDocument()

    expect(screen.getByText("$235.00")).toHaveStyle({
      textDecoration: "line-through"
    })

    expect(screen.getByText("$215.00")).not.toHaveStyle({
      textDecoration: "line-through"
    })
  })

  it("should be render ribbon", () => {
    render(
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
