import { StoryFn, Meta } from "@storybook/react"
import CartDropdown, { CartDropdownProps } from "."

import items from "../CartList/mock"

export default {
  title: "CartDropdown",
  component: CartDropdown,
  args: {
    items,
    total: "R$ 350.00"
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "end" }}>
    <CartDropdown {...args} />
  </div>
)

export const Empty: StoryFn<CartDropdownProps> = () => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "end" }}>
    <CartDropdown />
  </div>
)
