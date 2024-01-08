import { StoryFn, Meta } from "@storybook/react"
import CartList, { CartListProps } from "."

import items from "./mock"

export default {
  title: "CartList",
  component: CartList,
  args: {
    items,
    total: "R$ 330,00"
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn<CartListProps> = (args) => (
  <div style={{ maxWidth: "80rem" }}>
    <CartList {...args} />
  </div>
)

export const WithButton: StoryFn<CartListProps> = (args) => (
  <div style={{ maxWidth: "80rem" }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: StoryFn<CartListProps> = () => (
  <div style={{ maxWidth: "80rem" }}>
    <CartList />
  </div>
)
