import { StoryFn, Meta } from "@storybook/react"
import Games from "."

import filterItems from "../../components/ExploreSidebar/mock"

export default {
  title: "Games",
  component: Games
} as Meta

export const Default: StoryFn = () => <Games filterItems={filterItems} />
