import styled, { css } from "styled-components"

import * as TextFieldStyles from "../TextField/styles"

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmal};
    }
  `}
`

export const ForgetPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-align: right;

    margin-bottom: ${theme.spacings.small};
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    text-align: center;

    > a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.secondary};

      &:hover {
        filter: brightness(0.8);
        transition: ${theme.transition.fast};
      }
    }
  `}
`

export const FormLoading = styled.img.attrs(() => ({
  src: "/dots.svg",
  alt: "Waiting..."
}))`
  width: 4rem;
`
