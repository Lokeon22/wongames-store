import styled, { css } from "styled-components"

export const Wrapper = styled.main``

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;

    > a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }

    > a {
      text-decoration: none;
    }
  `}
`

export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmal};
  `}
`
