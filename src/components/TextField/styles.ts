import styled, { css } from "styled-components"

import { TextFieldProps } from "."

export const Wrapper = styled.main``

export const InputWrapper = styled.div`
  ${({ theme }) => css`
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
      width: 2.2rem;
      right: 0.6rem;
      color: ${theme.colors.gray};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmal} 0;
    background: transparent;
    border: 0;
    outline: none;
  `}
`

export const Label = styled.label<Pick<TextFieldProps, "labelColors">>`
  ${({ theme, labelColors }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors[labelColors!]};
    cursor: pointer;
  `}
`
