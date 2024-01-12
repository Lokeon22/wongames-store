import { Rating } from "../../components/GameDetails"

type Developer = {
  attributes: {
    name: string
  }
}

type Cover = {
  data: {
    attributes: {
      url: string
    }
  }
}

type Publisher = {
  data: {
    attributes: {
      name: string
    }
  }
}

type Platforms = {
  data: [
    {
      attributes: { name: string }
    }
  ]
}

type Gallery = {
  data: [
    {
      attributes: {
        url: string
        label: string
      }
    }
  ]
}

type GameAttributes = {
  id: string
  attributes: {
    slug: string
    name: string
    short_description: string
    description: string
    developers: {
      data: Developer[]
    }
    publisher: Publisher
    categories: Platforms
    platforms: Platforms
    gallery: Gallery
    cover: Cover
    price: number
    rating: Rating
    release_date: string
  }
}

type GamesData = {
  data: GameAttributes[]
}

export type ApiResponse = {
  games: GamesData
}
