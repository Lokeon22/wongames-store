import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  max-width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`
