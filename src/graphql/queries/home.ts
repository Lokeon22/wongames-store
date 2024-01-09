import { gql } from "@apollo/client"
import { BannerFragment } from "../fragments/banner"
import { GameFragment } from "../fragments/game"

export const QUERY_HOME_BANNERS = gql`
  query Home {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { gt: "2021-01-01" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${BannerFragment}
  ${GameFragment}
`
