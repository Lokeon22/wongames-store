import { StoryFn, Meta } from "@storybook/react"
import UserDropdown, { UserDropdownProps } from "."

export default {
  title: "UserDropdown",
  component: UserDropdown,
  args: {
    username: "Gabriel"
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "end" }}>
    <UserDropdown {...args} />
  </div>
)
