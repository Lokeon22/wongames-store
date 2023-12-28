import { StoryFn, Meta } from "@storybook/react"
import { Email as EmailIcon } from "@styled-icons/material-outlined"
import TextField, { TextFieldProps } from "."

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    label: "Email",
    labelFor: "Email",
    id: "Email",
    icon: <EmailIcon />,
    initialValue: "",
    placeholder: "gabriel@gmail.com"
  },
  argTypes: {
    icon: {
      control: {
        type: ""
      }
    }
  }
} as Meta

export const Default: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithError: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithError.args = {
  error: "Ocorreu um error"
}
