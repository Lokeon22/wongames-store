import { StoryFn, Meta } from "@storybook/react"
import ExploreSidebar from "."

import items from "../ExploreSidebar/mock"
import { ExplorerSidebarProps } from "."

export default {
  title: "ExploreSidebar",
  component: ExploreSidebar,
  args: { items, onFilter: () => console.log("filter") },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: StoryFn<ExplorerSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValues: StoryFn<ExplorerSidebarProps> = (args) => (
  <ExploreSidebar
    {...args}
    initialValues={{ windows: true, sort_by: "low-to-high" }}
  />
)
