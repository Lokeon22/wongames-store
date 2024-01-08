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

type GameAttributes = {
  attributes: {
    name: string
    slug: string
    developers: {
      data: Developer[]
    }
    cover: Cover
    price: number
  }
}

type GamesData = {
  data: GameAttributes[]
}

export type ApiResponse = {
  games: GamesData
}
