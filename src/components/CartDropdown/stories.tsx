import { StoryFn, Meta } from "@storybook/react"
import CartDropdown from "."

import items from "../CartList/mock"

export default {
  title: "CartDropdown",
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn = (args) => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "end" }}>
    <CartDropdown {...args} />
  </div>
)

Default.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: "R$ 330,00"
  }
}

export const Empty: StoryFn = () => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "end" }}>
    <CartDropdown />
  </div>
)
