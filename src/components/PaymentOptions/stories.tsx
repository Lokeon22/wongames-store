import { StoryFn, Meta } from "@storybook/react"
import PaymentOptions, { PaymentOptionsProps } from "."

import cardsMock from "./mock"

export default {
  title: "PaymentOptions",
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    },
    layout: "fullscreen"
  }
} as Meta

export const Default: StoryFn<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
)
