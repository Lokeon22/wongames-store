import { StoryFn, Meta } from "@storybook/react"
import Highlight from "."

import { HighlightProps } from "."
import item from "./mock"

export default {
  title: "Highlight",
  component: Highlight,
  args: { ...item },
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
