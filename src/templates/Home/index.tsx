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
  newGamesTitle: string
  newGames: GameCardProps[]
  popularGamesTitle: string
  popularGames: GameCardProps[]
  popularHighlights: HighlightProps
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlights: HighlightProps
  lowpriceGamesTitle: string
  lowpriceGames: GameCardProps[]
  lowpriceHighlights: HighlightProps
}

export function Home({
  banners,
  newGamesTitle,
  newGames,
  popularGamesTitle,
  popularGames,
  popularHighlights,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighlights,
  lowpriceGamesTitle,
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
            headtitle={newGamesTitle}
            gamecards={newGames}
            gamecards_color="black"
          />
        </Container>
      </S.NewsBg>

      <Container>
        <S.MostPopularBg>
          <Showcase
            headtitle={popularGamesTitle}
            highlights={popularHighlights}
            gamecards={popularGames}
          />
        </S.MostPopularBg>

        <S.UpcommingBg>
          <Showcase
            headtitle={upcomingGamesTitle}
            gamecards={upcomingGames}
            highlights={upcomingHighlights}
          />
        </S.UpcommingBg>

        <S.FreeGamesBg>
          <Showcase
            headtitle={lowpriceGamesTitle}
            highlights={lowpriceHighlights}
            gamecards={lowpriceGames}
          />
        </S.FreeGamesBg>
      </Container>
    </Base>
  )
}
