import styled, { css } from "styled-components"

export const Wrapper = styled.main`
  :first-child {
    margin-bottom: 3rem;
  }
`

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmal};
    }
  `}
`

export const CardImg = styled.img``
