import { HighlightProps } from "../gqltypes/queryHighlightType"
import { GameAttributes } from "./queryGameType"

export type RecommendedAttributes = {
  attributes: {
    section: {
      title: string
      highlight: HighlightProps
      games: {
        data: GameAttributes[]
      }
    }
  }
}

export type RecommendedResponse = {
  data: RecommendedAttributes
}

export type RecommendedGamesProps = {
  recommended: RecommendedResponse
}
