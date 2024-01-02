import styled, { css } from "styled-components"
import media from "styled-media-query"

import * as RibbonStyles from "../Ribbon/styles"
import * as HeadingStyles from "../Heading/styles"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small};
    background-color: white;

    ${RibbonStyles.Wrapper} {
      right: -1.5rem;
      &:before {
        border-right-width: 1.5rem;
      }
    }

    ${media.lessThan("small")`
      ${HeadingStyles.Wrapper}{
        font-size: ${theme.font.sizes.xlarge};
      }
    `}

    ${media.greaterThan("medium")`
      ${RibbonStyles.Wrapper}{
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &:before{
          border: none;
        }
      }
    `}
  `}
`

export const GameDescription = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: normal;
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan("medium")`
      max-width: 77rem;
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.small};
    }

    ${media.greaterThan("medium")`
      flex-direction: row-reverse;
      
      > button{
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`
