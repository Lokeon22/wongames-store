import { StoryFn, Meta } from "@storybook/react"
import Empty, { EmptyProps } from "."

export default {
  title: "Empty",
  component: Empty,
  args: {
    title: "Nothing to see here",
    description: "Your wishlist is empty",
    hasLink: true
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn<EmptyProps> = (args) => (
  <div style={{ maxWidth: "30rem", margin: "0 auto" }}>
    <Empty {...args} />
  </div>
)
