import { StoryFn, Meta } from "@storybook/react"
import { BannerSliderProps } from "."
import BannerSlider from "."

import items from "./mock"

export default {
  title: "BannerSlider",
  component: BannerSlider,
  args: {
    items
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: "110rem", margin: "0 auto" }}>
    <BannerSlider {...args} />
  </div>
)
