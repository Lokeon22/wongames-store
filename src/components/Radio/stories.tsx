import { StoryFn, Meta } from "@storybook/react"
import Radio, { RadioProps } from "."

export default {
  title: "Form/Radio",
  component: Radio
} as Meta

export const Default: StoryFn<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="High to low"
        labelFor="hightolow"
        value="high"
        name="name"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Low to high"
        labelFor="lowtohigh"
        value="low"
        name="name"
        {...args}
      />
    </div>
  </>
)
