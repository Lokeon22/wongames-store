import { StoryFn, Meta } from "@storybook/react"
import Highlight from "."

import { HighlightProps } from "."

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: "/img/red-dead-img.png",
    buttonLabel: "Buy now",
    buttonLink: "/rdr2"
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta

export const Default: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: "/img/red-dead-float.png"
}
