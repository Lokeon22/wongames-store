import { StoryFn, Meta } from "@storybook/react"

import GameInfo, { GameInfoProps } from "."
import { CartContextData } from "../../hooks/use-cart"
import items from "./mock"

export default {
  title: "GameInfo",
  component: GameInfo,
  args: items,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn<GameInfoProps> = (args) => (
  <div style={{ maxWidth: "144rem", padding: "1.2rem" }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: StoryFn<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: "144rem", padding: "1.2rem" }}>
    <GameInfo {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}
