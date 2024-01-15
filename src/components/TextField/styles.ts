import styled, { css, DefaultTheme } from "styled-components"

import { TextFieldProps } from "."

type WrapperProps = Pick<TextFieldProps, "disabled" | "error">

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
    }
  `,

  error: (theme: DefaultTheme) => css`
    span,
    ${Label} {
      color: ${theme.colors.red};
    }

    ${InputWrapper} {
      border-color: ${theme.colors.red};

      svg {
        color: ${theme.colors.red};
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${!!error && wrapperModifiers.error(theme)}
  `}
`

export const InputWrapper = styled.div<Pick<TextFieldProps, "iconPosition">>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    position: relative;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    > svg {
      position: relative;
      display: flex;
      order: ${iconPosition === "right" ? 1 : 0};
      right: ${iconPosition === "right" ? "-0.6rem" : "0.6rem"};
      width: 2.2rem;
      color: ${theme.colors.gray};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmal} 0;
    background: transparent;
    border: 0;
    outline: none;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
    }
  `}
`

export const Label = styled.label<Pick<TextFieldProps, "labelColors">>`
  ${({ theme, labelColors }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors[labelColors!]};
  `}
`
