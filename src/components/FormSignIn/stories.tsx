import { StoryFn, Meta } from "@storybook/react"
import FormSignIn from "."

export default {
  title: "Form/FormSignIn",
  component: FormSignIn
} as Meta

export const Default: StoryFn = (args) => (
  <div style={{ width: "30rem", margin: "0 auto" }}>
    <FormSignIn {...args} />
  </div>
)
