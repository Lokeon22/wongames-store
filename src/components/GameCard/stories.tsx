import { StoryFn, Meta } from "@storybook/react"
import GameCard, { GameCardProps } from "."
import { CartContextData } from "../../hooks/use-cart"

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    id: "1",
    slug: "read-dead-redemption",
    image: "/img/red-dead.png",
    title: "Red Dead Redemption",
    developer: "Rockstar Games",
    price: 230,
    promotionalPrice: 215
  },
  argTypes: {
    ribbon: { type: "string" }
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta

export const Default: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart: StoryFn<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}

export const WithRibbon: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSizes: "small",
  ribbonColors: "primary"
}
