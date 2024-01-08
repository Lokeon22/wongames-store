import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-bottom: 5rem;

    > section {
      margin-top: 4rem;
    }

    ${media.greaterThan("medium")`
        margin-top: 10rem;
        display: grid;
        grid-template-columns: 22rem 1fr;
        grid-gap: ${theme.grid.gutter};
    `}
  `}
`

export const GameContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: ${theme.spacings.small};

    ${media.lessThan("medium")`
        max-height: 100%;
    `}
  `}
`

export const Showmore = styled.div`
  ${({ theme }) => css`
    width: max-content;
    color: ${theme.colors.white};
    margin: 0 auto;
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${theme.font.sizes.large};
    cursor: pointer;
  `}
`
