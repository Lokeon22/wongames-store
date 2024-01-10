import { GameAttributes } from "./queryGameType"
import { HighlightProps } from "../gqltypes/queryHighlightType"

type UpcomingShowcase = {
  data: {
    attributes: {
      upcomingGames: {
        title: string
        highlight: HighlightProps
      }
    }
  }
}

type UpcomingGames = {
  data: GameAttributes[]
}

export type UpcomingGamesProps = {
  upcomingGames: UpcomingGames
  showcase: UpcomingShowcase
}
