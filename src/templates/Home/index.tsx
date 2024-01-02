"use client"
import * as S from "./style"
import { Container } from "../../components/Container"

import Base from "../Base"
import BannerSlider from "../../components/BannerSlider"
import Showcase from "../../components/Showcase"

import { BannerProps } from "../../components/Banner"
import { GameCardProps } from "../../components/GameCard"
import { HighlightProps } from "../../components/Highlight"

type HomeProps = {
  banners: BannerProps[]
  highlightsDT: HighlightProps
  gamecardsDT: GameCardProps[]
}

export function Home({ banners, gamecardsDT, highlightsDT }: HomeProps) {
  return (
    <Base>
      <Container>
        <S.SpacingsBanner>
          <BannerSlider items={banners} />
        </S.SpacingsBanner>
      </Container>

      <S.NewsBg>
        <Container>
          <Showcase
            headtitle="News"
            gamecards={gamecardsDT}
            gamecards_color="black"
          />
        </Container>
      </S.NewsBg>

      <Container>
        <S.MostPopularBg>
          <Showcase
            headtitle="Most Popular"
            highlights={highlightsDT}
            gamecards={gamecardsDT}
          />
        </S.MostPopularBg>

        <S.UpcommingBg>
          <Showcase headtitle="Upcoming" gamecards={gamecardsDT} />
          <Showcase highlights={highlightsDT} gamecards={gamecardsDT} />
        </S.UpcommingBg>

        <S.FreeGamesBg>
          <Showcase
            headtitle="Free Games"
            highlights={highlightsDT}
            gamecards={gamecardsDT}
          />
        </S.FreeGamesBg>
      </Container>
    </Base>
  )
}
