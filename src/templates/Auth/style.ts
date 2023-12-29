import styled, { css } from "styled-components"
import media from "styled-media-query"

import * as LogoStyles from "../../components/Logo/styles"
import * as HeadingStyles from "../../components/Heading/styles"

export const Wrapper = styled.section`
  height: 100vh;
  display: grid;

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.small} ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("img/image07.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }

    .content,
    ${Footer}, ${LogoStyles.Wrapper} {
      z-index: ${theme.layers.base};
    }

    .content {
      margin: auto 0;
    }

    ${media.lessThan("medium")`display: none`}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};

    > strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    margin-top: auto;
  `}
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-top: 6.7rem;
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const FormWrapper = styled.div`
  width: 30rem;

  ${media.greaterThan("medium")`
    width: 36rem;
  `}
`
