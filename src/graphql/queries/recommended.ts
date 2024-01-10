import { gql } from "@apollo/client"
import { GameFragment } from "../fragments/game"
import { HighlightFragment } from "../fragments/highlight"

export const QUERY_RECOMMENDED_GAMES = gql`
  query Recommended {
    recommended {
      data {
        attributes {
          section {
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
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
