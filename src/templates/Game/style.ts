import styled, { css } from "styled-components"
import media from "styled-media-query"

import { Container } from "../../components/Container"
import * as HeadingStyles from "../../components/Heading/styles"
import * as HighlightStyles from "../../components/Highlight/styles"

type CoverProps = {
  src: string
}

export const Main = styled.main`
  margin-top: 20rem;
  ${media.greaterThan("medium")`
    margin-top: 43rem;
  `}
`

export const CoverBg = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan("medium")`
      height: 71rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

const Section = styled(Container).attrs({ as: "section" })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan("medium")`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)`
  display: none;

  ${media.greaterThan("medium")`
    display: block;
  `}
`

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const SectionGameDetails = styled(Section)`
  ${({ theme }) => css`
    > div {
      padding-bottom: ${theme.spacings.xlarge};
      border-bottom: 0.1rem solid rgba(181, 181, 181, 0.3);

      ${media.greaterThan("medium")`
        paddin-bottom: calc(${theme.spacings.xxlarge} * 2);
      `}
    }
  `}
`

export const SectionShowCase = styled(Section)`
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
