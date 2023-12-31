import styled, { css } from "styled-components"

import { CheckboxProps } from "."

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 1.9rem;
    height: 1.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    border-radius: 0.2rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    position: relative;
    outline: none;
    transition: background border ${theme.transition.fast};

    &::before {
      content: "";
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, "labelColor">>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    color: ${theme.colors[labelColor!]};
    line-height: 1;
  `}
`
