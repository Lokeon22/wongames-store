import styled, { css } from "styled-components"
import media from "styled-media-query"

import * as HeadingStyles from "../../components/Heading/styles"
import * as HighlightStyles from "../../components/Highlight/styles"

export const Wrapper = styled.div`
  > ${HeadingStyles.Wrapper} {
    margin-top: 7rem;
    margin-bottom: 3.2rem;
  }
`

export const SectionShowCase = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    > section {
      margin-bottom: ${theme.spacings.xlarge};
    }

    ${media.lessThan("medium")`
      > section {
        margin-bottom: ${theme.spacings.medium};
      }
     
      ${HighlightStyles.Wrapper}{
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      }
      `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: ${theme.spacings.medium};

    ${media.lessThan("medium")`
      grid-template-columns: 1fr;
      margin: ${theme.spacings.large} 0;
    `}
  `}
`
