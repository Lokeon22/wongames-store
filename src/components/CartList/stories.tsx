import { StoryFn, Meta } from "@storybook/react"
import CartList from "."

import items from "./mock"

export default {
  title: "CartList",
  component: CartList,
  argTypes: {
    carContextValue: {
      type: "string"
    }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn = (args) => (
  <div style={{ maxWidth: "80rem" }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: "R$ 330,00",
  cartContextValue: { items }
}

export const WithButton: StoryFn = (args) => (
  <div style={{ maxWidth: "80rem" }}>
    <CartList {...args} hasButton />
  </div>
)

WithButton.args = {
  total: "R$ 330,00",
  cartContextValue: { items }
}

export const Empty: StoryFn = () => (
  <div style={{ maxWidth: "80rem" }}>
    <CartList />
  </div>
)
