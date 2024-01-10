import { gql } from "@apollo/client"
import { BannerFragment } from "../fragments/banner"
import { GameFragment } from "../fragments/game"
import { HighlightFragment } from "../fragments/highlight"

export const QUERY_HOME_BANNERS = gql`
  query Home($date: Date!) {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    upcomingGames: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    lowpriceGames: games(
      filters: { price: { lt: 1.99 } }
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                attributes {
                  ...GameFragment
                }
              }
            }
          }

          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          lowpriceGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
