import styled, { css } from "styled-components"

import { RadioProps } from "."

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Radio = styled.input`
  ${({ theme }) => css`
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 1.5rem;
    border: 0.2rem solid ${theme.colors.primary};
    appearance: none;
    position: relative;
    outline: none;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background-color: transparent;

      &::before {
        content: "";
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
        width: 0.9rem;
        height: 0.9rem;
        background-color: ${theme.colors.primary};
        border-radius: 50%;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, "labelColors">>`
  ${({ theme, labelColors }) => css`
    color: ${theme.colors[labelColors!]};
    line-height: 1;
  `}
`
