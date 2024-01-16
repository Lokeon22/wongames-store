import "../../../.jest/match-media-mock"
import { render } from "../../utils/test-utils"

import { GameCardProps } from "../GameCard"
import GameCardSlider from "."

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

const items: GameCardProps[] = [
  {
    id: "1",
    slug: "red dead",
    image: "https://source.unsplash.com/user/willianjusten/300x142",
    title: "Red Dead Redemption",
    developer: "Rockstar Games",
    price: 235,
    promotionalPrice: 215
  },
  {
    id: "2",
    slug: "red dead 2",
    image: "https://source.unsplash.com/user/willianjusten/300x143",
    title: "Red Dead Redemption 2",
    developer: "Rockstar Games 2",
    price: 235,
    promotionalPrice: 215
  },
  {
    id: "3",
    slug: "red dead 3",
    image: "https://source.unsplash.com/user/willianjusten/300x144",
    title: "Red Dead Redemption 3",
    developer: "Rockstar Games 3",
    price: 235,
    promotionalPrice: 215
  },
  {
    id: "4",
    slug: "red dead 4",
    image: "https://source.unsplash.com/user/willianjusten/300x145",
    title: "Red Dead Redemption 4",
    developer: "Rockstar Games 4",
    price: 235,
    promotionalPrice: 215
  }
]

describe("<GameCardSlider />", () => {
  it("should render the gameCard and slide", () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.querySelectorAll(".slick-active")).toHaveLength(4)
  })
})
