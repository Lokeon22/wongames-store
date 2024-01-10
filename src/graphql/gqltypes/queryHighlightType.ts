import { GameAttributes } from "./queryGameType"

type Background = {
  data: {
    attributes: {
      url: string
    }
  }
}

export type HighlightProps = {
  title: string
  subtitle: string
  background: Background
  floatImage: Background
  buttonLabel: string
  buttonLink: string
  alignment: "right" | "left"
}

type SectionsData = {
  attributes: {
    newGames: {
      title: string
      highlight: null
    }
    popularGames: {
      title: string
      highlight: HighlightProps
      games: {
        data: GameAttributes[]
      }
    }

    upcomingGames: {
      title: string
      highlight: HighlightProps
    }
    lowpriceGames: {
      title: string
      highlight: HighlightProps
    }
  }
}

type GamesData = {
  data: SectionsData[]
}

export type ApiResponse = {
  sections: GamesData
}

export type SectionsHighlightProps = {
  data: SectionsData
}
