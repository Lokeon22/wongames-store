import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  > h2 {
    margin-top: 7rem;
    margin-bottom: 3.2rem;
  }
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan("medium")`
     grid-template-columns: 25rem 1fr;
     grid-gap: 3.5rem;
  `}

  ${media.greaterThan("large")`
     grid-template-columns: 32rem 1fr;
     grid-gap: 7rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`
