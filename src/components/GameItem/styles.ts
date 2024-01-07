import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    background-color: ${theme.colors.white};

    ${media.lessThan("large")`
        padding: ${theme.spacings.xxsmal};
    `}
  `}

  ${media.greaterThan("medium")`
    display: flex;
    gap: 1rem;
  `}
`

export const GameContent = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 9.6rem;
    height: 5.6rem;

    ${media.greaterThan("medium")`
    width: 15rem;
    height: 7rem;
    margin-right: ${theme.spacings.xsmall}
  `}
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmal};

    ${media.greaterThan("medium")`
        font-size: ${theme.font.sizes.xlarge};
        line-height: ${theme.font.sizes.xlarge}
    `}
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    width: fit-content;
    color: ${theme.colors.white};
    padding: 0.2rem ${theme.spacings.xxsmal};
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.secondary};
    border-radius: 0.2rem;
  `}
`

export const Download = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmal};
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan("medium")`
    margin-top: 0;
    flex: 1;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-end;
  `}
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    ${FlagIcon} {
      margin-left: ${theme.spacings.xxsmal};
    }

    ${media.lessThan("medium")`
      margin-top: ${theme.spacings.xsmall}
    `}
  `}
`

export const FlagIcon = styled.img``
