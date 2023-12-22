import "../../../.jest/match-media-mock"
import { renderWithTheme } from "../../utils/tests/helpers"

import { GameCardProps } from "../GameCard"
import GameCardSlider from "."

const items: GameCardProps[] = [
  {
    image: "https://source.unsplash.com/user/willianjusten/300x142",
    title: "Red Dead Redemption",
    developer: "Rockstar Games",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00"
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/300x143",
    title: "Red Dead Redemption 2",
    developer: "Rockstar Games 2",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00"
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/300x144",
    title: "Red Dead Redemption 3",
    developer: "Rockstar Games 3",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00"
  },
  {
    image: "https://source.unsplash.com/user/willianjusten/300x145",
    title: "Red Dead Redemption 4",
    developer: "Rockstar Games 4",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00"
  }
]

describe("<GameCardSlider />", () => {
  it("should render the gameCard and slide", () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll(".slick-active")).toHaveLength(4)
  })
})
