import { QUERY_GAMES_BY_ID } from "../../graphql/queries/games"

export const gamesMock = {
  request: {
    query: QUERY_GAMES_BY_ID,
    variables: { ids: ["15", "16"] }
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: "15",
            attributes: {
              name: "teste",
              slug: "teste",
              cover: {
                data: {
                  attributes: {
                    url: "http://localhost:1337/sample-game.jpg"
                  }
                }
              },
              price: 20.0
            }
          },
          {
            id: "16",
            attributes: {
              name: "teste2",
              slug: "teste2",
              cover: {
                data: {
                  attributes: {
                    url: "http://localhost:1337/sample-game2.jpg"
                  }
                }
              },
              price: 22.0
            }
          }
        ]
      }
    }
  }
}

export const cartItems = [
  {
    id: "15",
    title: "teste",
    slug: "teste",
    price: "$20",
    img: "http://localhost:1337/sample-game.jpg"
  },
  {
    id: "16",
    title: "teste2",
    slug: "teste2",
    price: "$22",
    img: "http://localhost:1337/sample-game2.jpg"
  }
]
