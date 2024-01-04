import styled, { css } from "styled-components"
import media from "styled-media-query"

import { Container } from "../../components/Container"
import * as HeadingStyles from "../../components/Heading/styles"
import * as HighlightStyles from "../../components/Highlight/styles"

export const Section = styled(Container).attrs({ as: "section" })`
  ${({ theme }) => css`
    margin-top: 7rem;

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const GameContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
  `}
`

export const LikeGames = styled.div`
  ${({ theme }) => css`
    > section {
      margin-bottom: 4.5rem;
    }

    ${media.lessThan("medium")`
    ${HighlightStyles.Wrapper}{
      margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
    }
  `}
  `}
`

export const EmptyTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
