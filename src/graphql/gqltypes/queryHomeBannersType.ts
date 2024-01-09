import { HomeNewGamesProps } from "./queryGameType"

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

type BannersAttributes = {
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

export type HomeBannersProps = {
  banners: BannersData
  newGames: HomeNewGamesProps
}
