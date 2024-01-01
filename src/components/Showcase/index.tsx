import Heading from "../Heading"
import Highlight from "../Highlight"
import GameCardSlider from "../GameCardSlider"

import { HighlightProps } from "../Highlight"
import { GameCardProps } from "../GameCard"

type ShowcaseProps = {
  headtitle?: string
  highlights?: HighlightProps
  gamecards?: GameCardProps[]
  gamecards_color?: "white" | "black"
}

const Showcase = ({
  headtitle,
  highlights,
  gamecards,
  gamecards_color = "white"
}: ShowcaseProps) => (
  <>
    {!!headtitle && (
      <Heading lineLeft lineColor="secondary">
        {headtitle}
      </Heading>
    )}
    {!!highlights && <Highlight {...highlights} />}
    {!!gamecards && (
      <GameCardSlider color={gamecards_color} items={gamecards} />
    )}
  </>
)

export default Showcase
