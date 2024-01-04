import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan("medium")`
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`

export const MenuNav = styled.div`
  > a {
    display: inline-block;
    text-decoration: none;
    margin: 0.3rem 2.4rem 0;
  }

  ${({ theme }) => css`
    ${media.greaterThan("medium")`
      margin-left: ${theme.spacings.small}
    `}
  `}
`

export const MenuLink = styled.span`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    z-index: ${theme.layers.menu};

    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;

        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }

          to {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  `}
`

type MenuProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};
    transition: opacity 0.3s ease-in-out;
    z-index: ${theme.layers.alwaysOnTop};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${RegisterBox} {
      transform: ${isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmal} 0;
      font-size: ${theme.font.sizes.xsmall};
    }

    a {
      text-decoration: none;
    }
  `}
`

export const CreateAccount = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    border-bottom: 0.3rem solid ${theme.colors.primary};
  `}
`
