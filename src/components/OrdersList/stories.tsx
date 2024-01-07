import { StoryFn, Meta } from "@storybook/react"
import OrdersList from "."

export default {
  title: "OrdersList",
  component: OrdersList
} as Meta

export const Default: StoryFn = () => <OrdersList />
