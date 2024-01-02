import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div``

export const GameContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(6, 1fr);

    color: ${theme.colors.white};
    margin-top: ${theme.spacings.large};

    ${media.lessThan("large")`
        grid-template-columns: repeat(3, 1fr);

        > div {
            margin-bottom: ${theme.spacings.large};
        }
    `}

    ${media.lessThan("medium")`
        grid-template-columns: repeat(2, 1fr);
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};

    ${media.lessThan("medium")`
        font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    ${media.lessThan("medium")`
        font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const Icon = styled.span``
