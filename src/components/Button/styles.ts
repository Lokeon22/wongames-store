import styled, { css, DefaultTheme } from "styled-components"
import { ButtonProps } from "."
import { darken } from "polished"

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  "size" | "fullWidth" | "minimal"
>

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmal} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmal} ${theme.spacings.xlarge};
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      background: none;
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        padding: ${theme.spacings.xxsmal};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(189deg, #ff5f5f 0%, #f062c0 50%);
    border-radius: ${theme.border.radius};
    border: 0;
    cursor: pointer;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmal};
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && buttonModifiers[size](theme)}
    ${!!fullWidth && buttonModifiers.fullWidth}
    ${!!hasIcon && buttonModifiers.withIcon(theme)}
    ${!!minimal && buttonModifiers.minimal(theme)}
  `}
`
