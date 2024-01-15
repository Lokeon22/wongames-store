import styled, { DefaultTheme, css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.main``

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    background-color: white;
    max-height: 24rem;

    a {
      flex: 1;
      display: inline-block;
      text-decoration: none;
    }

    ${media.greaterThan("medium")`
      flex-direction: column;
      font-size: ${theme.font.sizes.large};
  `}
  `}
`

const LinkModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,

  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.p<LinkProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    cursor: pointer;

    transition: background, color, ${theme.transition.default};

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    ${media.lessThan("medium")`
      justify-content: center;

      > span{
        display: none;
      }
    `}
    ${!isActive && LinkModifiers.default(theme)}
    ${isActive && LinkModifiers.active(theme)}
  `}
`
