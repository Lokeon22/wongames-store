import { StoryFn, Meta } from "@storybook/react"
import { AddShoppingCart } from "@styled-icons/material-outlined"

import Button, { ButtonProps } from "."

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    icon: {
      control: {
        type: ""
      }
    }
  }
} as Meta

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: "Buy Now"
}

export const withIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: "small",
  children: "Buy Now",
  icon: <AddShoppingCart />
}
