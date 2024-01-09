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
  newGames: GameCardProps[]
  popularGames: GameCardProps[]
  popularHighlights: HighlightProps
  upcomingGames: GameCardProps[]
  upcomingHighlights: HighlightProps
  lowpriceGames: GameCardProps[]
  lowpriceHighlights: HighlightProps
}

export function Home({
  banners,
  newGames,
  popularGames,
  popularHighlights,
  upcomingGames,
  upcomingHighlights,
  lowpriceGames,
  lowpriceHighlights
}: HomeProps) {
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
            gamecards={newGames}
            gamecards_color="black"
          />
        </Container>
      </S.NewsBg>

      <Container>
        <S.MostPopularBg>
          <Showcase
            headtitle="Most Popular"
            highlights={popularHighlights}
            gamecards={popularGames}
          />
        </S.MostPopularBg>

        <S.UpcommingBg>
          <Showcase headtitle="Upcoming" gamecards={upcomingGames} />
          <Showcase highlights={upcomingHighlights} gamecards={upcomingGames} />
        </S.UpcommingBg>

        <S.FreeGamesBg>
          <Showcase
            headtitle="Free Games"
            highlights={lowpriceHighlights}
            gamecards={lowpriceGames}
          />
        </S.FreeGamesBg>
      </Container>
    </Base>
  )
}
