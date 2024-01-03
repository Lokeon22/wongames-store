import { StoryFn, Meta } from "@storybook/react"
import GameDetails, { GameDetailsProps } from "."

import itemInfo from "./mock"

export default {
  title: "GameDetails",
  component: GameDetails,
  args: itemInfo,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  argTypes: {
    releaseDate: {
      control: "date"
    }
  }
} as Meta

export const Default: StoryFn<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <GameDetails {...args} />
  </div>
)
