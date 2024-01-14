import { SuspenseQueryHookOptions, gql } from "@apollo/client"
import { GameFragment } from "../fragments/game"

import { useSuspenseQuery } from "@apollo/client"
import { ApiResponse } from "../gqltypes/queryGameType"

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!, $start: Int) {
    games(pagination: { limit: $limit, start: $start }) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query GameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const QUERY_GAMES_FILTERED = gql`
  query QueryGames(
    $limit: Int!
    $start: Int
    $where_name: String!
    $where_price: Float!
    $where_category: [String!]
    $sort: [String!]
  ) {
    games(
      pagination: { limit: $limit, start: $start }
      filters: {
        name: { containsi: $where_name }
        price: { lte: $where_price }
        categories: { name: { in: $where_category } }
      }
      sort: $sort
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`

/*export const QUERY_ALL_GAMES_BY_SLUG = gql`
  query getGamesBySlug($slugs: [String!]!) {
    games(filters: { and: [{ slug: { in: $slugs } }] }) {
      data {
        id
        attributes {
          name
          price
          cover {
            data {
              attributes {
                ...GameFragment
              }
            }
          }
        }
      }
    }
  }
  ${GameFragment}
`*/

export const QUERY_GAMES_BY_ID = gql`
  query getGames($ids: [ID!]!) {
    games(filters: { and: [{ id: { in: $ids } }] }) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`

export function useQueryGames(options?: SuspenseQueryHookOptions<ApiResponse>) {
  return useSuspenseQuery<ApiResponse>(QUERY_GAMES_FILTERED, options)
}
