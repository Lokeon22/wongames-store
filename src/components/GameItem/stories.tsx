import { StoryFn, Meta } from "@storybook/react"
import GameItem, { GameItemProps } from "."

export default {
  title: "GameItem",
  component: GameItem,
  args: {
    img: "img/red-dead.png",
    title: "Red Dead Redemption 2",
    price: "215,00"
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    },
    layout: "fullscreen"
  }
} as Meta

export const Default: StoryFn<GameItemProps> = (args) => (
  <div style={{ maxWidth: "100rem" }}>
    <GameItem {...args} />
  </div>
)

export const MyOrders: StoryFn<GameItemProps> = (args) => (
  <div style={{ maxWidth: "100rem" }}>
    <GameItem {...args} />
  </div>
)

MyOrders.args = {
  downloadLink: "https://link.com/download/123",
  paymentInfo: {
    flag: "mastercard",
    number: "**** **** **** 1234",
    purchaseDate: "Purchase made on 07/20/2020 at 20:32",
    img: "img/flag.svg"
  }
}
