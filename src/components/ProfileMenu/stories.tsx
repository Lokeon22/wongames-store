import { StoryFn, Meta } from "@storybook/react"
import ProfileMenu, { ProfileMenuProps } from "."

export default {
  title: "ProfileMenu",
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: "won-dark"
    },
    layout: "fullscreen"
  }
} as Meta

export const Default: StoryFn<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
