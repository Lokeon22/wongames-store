"use client"
import { Container } from "../../components/Container"
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Heading from "../../components/Heading"
import Highlight, { HighlightProps } from "../../components/Highlight"

import BannerSlider from "../../components/BannerSlider"
import GameCardSlider from "../../components/GameCardSlider"

import { BannerProps } from "../../components/Banner"
import { GameCardProps } from "../../components/GameCard"

import * as S from "./style"

export type HomeProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
  freeGames: GameCardProps[]
}

export function Home(data: HomeProps) {
  return (
    <section>
      <Container>
        <Menu />
        <S.SpacingsBanner>
          <BannerSlider items={data.banners} />
        </S.SpacingsBanner>
      </Container>

      <S.NewsBg>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>
          <GameCardSlider items={data.newGames} color="black" />
        </Container>
      </S.NewsBg>

      <Container>
        <S.MostPopularBg>
          <Heading lineLeft lineColor="secondary">
            Most popular
          </Heading>
          <Highlight {...data.mostPopularHighlight} />
          <GameCardSlider items={data.mostPopularGames} color="white" />
        </S.MostPopularBg>
      </Container>

      <Container>
        <S.UpcommingBg>
          <Heading lineLeft lineColor="secondary">
            Upcoming
          </Heading>
          <GameCardSlider items={data.upcommingGames} color="white" />
          <Highlight {...data.upcommingHighlight} />
          <GameCardSlider items={data.upcommingMoreGames} color="white" />
        </S.UpcommingBg>
      </Container>

      <Container>
        <S.FreeGamesBg>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>
          <Highlight {...data.freeGamesHighlight} />
          <GameCardSlider items={data.freeGames} color="white" />
        </S.FreeGamesBg>
      </Container>

      <S.FooterBg>
        <Container>
          <Footer />
        </Container>
      </S.FooterBg>
    </section>
  )
}
