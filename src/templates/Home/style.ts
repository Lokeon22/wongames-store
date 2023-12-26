import styled, { css } from "styled-components"
import media from "styled-media-query"

import * as HeadingStyles from "../../components/Heading/styles"
import * as HighlightStyles from "../../components/Highlight/styles"
import * as GameCardsStyles from "../../components/GameCardSlider/styles"

const Section = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper}, ${HighlightStyles.Wrapper}, ${GameCardsStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan("medium")`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardsStyles.Wrapper} {
      ${media.lessThan("huge")`
      margin-right: calc(-${theme.grid.gutter} / 2)
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SpacingsBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan("medium")`
        position: relative;
        margin: ${theme.spacings.large} 0;
        z-index: ${theme.layers.base}
    `}
  `}
`

export const NewsBg = styled(Section)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan("large")`
        margin-top: -13rem
    `}

    ${media.greaterThan("medium")` 
      padding-top: 14rem;
      padding-bottom: 10rem;

      background-color: #f1f1f1;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
    }
    `}
  `}
`

export const MostPopularBg = styled(Section)`
  ${({ theme }) => css`
    > h2 {
      margin-top: 9rem;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const UpcommingBg = styled(Section)`
  ${({ theme }) => css`
    > h2 {
      margin-top: ${theme.spacings.xlarge};
    }

    section:nth-child(3) {
      margin-top: 7.2rem;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const FreeGamesBg = styled(Section)``

export const FooterBg = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding-top: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.large};

    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
  `}
  `}
`
