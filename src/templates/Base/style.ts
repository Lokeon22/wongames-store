import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  flex: 1 0 auto;
`

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
