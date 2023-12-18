import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    justify-content: space-between;
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
    gap: ${theme.spacings.small};
  `}
`

type MenuProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuProps>`
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
  `}
`
