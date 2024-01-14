import styled, { css } from "styled-components"

import * as ButtonStyles from "../Button/styles"

export const Wrapper = styled.main``

export const Body = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`

export const Cardslist = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.lightGray};
    padding: 1.2rem;
    margin-bottom: 1.2rem;
  `}
`

export const CardInfo = styled.div`
  display: flex;
  gap: 1rem;
`

export const CardImg = styled.img`
  object-fit: cover;
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.small};

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmal};
      padding-right: ${theme.spacings.xxsmal};
      outline: none;
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: 1.4rem;
  `}
`
