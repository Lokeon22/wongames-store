import { StoryFn, Meta } from "@storybook/react"
import FormProfile from "."

export default {
  title: "FormProfile",
  component: FormProfile
} as Meta

export const Default: StoryFn = () => <FormProfile />
