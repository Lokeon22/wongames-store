import styled, { css } from "styled-components"
import media from "styled-media-query"

import { GameCardSliderProps } from "."

type WrapperProps = Pick<GameCardSliderProps, "color">

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    ${media.lessThan("huge")`
        overflow-x: hidden;
    `}

    .slick-track, .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmal};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmal};
    }

    ${media.greaterThan("large")`
        .slick-slide > div {
            margin: 0 ${theme.spacings.xxsmal}
        }

        .slick-list { 
            margin: 0 -${theme.spacings.xxsmal}; 
        }
    `}

    .slick-next,
    .slick-prev {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      padding: 0;
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
