import { StoryFn, Meta } from "@storybook/react"
import GameCard, { GameCardProps } from "."

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    image: "/img/red-dead.png",
    title: "Red Dead Redemption",
    developer: "Rockstar Games",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00"
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
