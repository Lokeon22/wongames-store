import { StoryFn, Meta } from "@storybook/react"
import Gallery, { GaleryProps } from "."

import items from "./mock"

export default {
  title: "Gallery",
  component: Gallery,
  args: { items }
} as Meta

export const Default: StoryFn<GaleryProps> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <Gallery {...args} />
  </div>
)
