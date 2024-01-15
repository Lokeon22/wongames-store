import styled, { css } from "styled-components"

import * as TextFieldStyles from "../TextField/styles"

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmal};
    }
    a {
      text-decoration: none;
    }
  `}
`
