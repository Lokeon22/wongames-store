import { HomeGamesProps } from "./queryGameType"
import { SectionsHighlightProps } from "./queryHighlightType"

type Image = {
  data: {
    attributes: {
      url: string
    }
  }
}

type Button = {
  label: string
  link: string
}

type Ribbon = {
  text: string
  color: "primary" | "secondary"
  size: "normal" | "small"
}

export type BannersAttributes = {
  attributes: {
    image: Image
    title: string
    subtitle: string
    button: Button
    ribbon?: Ribbon
  }
}

type BannersData = {
  data: BannersAttributes[]
}

export type HomeDataProps = {
  banners: BannersData
  newGames: HomeGamesProps
  upcomingGames: HomeGamesProps
  lowpriceGames: HomeGamesProps
  sections: SectionsHighlightProps
}
