import styled, { css } from "styled-components"

import * as TextFieldStyles from "../TextField/styles"
import * as ButtonStyles from "../Button/styles"

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmal};
    }

    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};

    > a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      border-bottom: 1px solid ${theme.colors.secondary};

      &:hover {
        filter: brightness(0.8);
        transition: ${theme.transition.fast};
      }
    }
  `}
`
