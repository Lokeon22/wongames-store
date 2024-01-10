"use client"
import * as S from "./style"
import Base from "../Base"

import GameInfo, { GameInfoProps } from "../../components/GameInfo"
import Gallery, { GalleryImageProps } from "../../components/Gallery"
import GameDetails, { GameDetailsProps } from "../../components/GameDetails"

import { GameCardProps } from "../../components/GameCard"
import { HighlightProps } from "../../components/Highlight"

import TextContent from "../../components/TextContent"
import Showcase from "../../components/Showcase"

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

export function Game({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) {
  return (
    <Base>
      <S.CoverBg src={cover} role="img" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          {!!description && (
            <TextContent title="Description" content={description} />
          )}
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
        </S.SectionGameDetails>

        <S.SectionShowCase>
          <Showcase
            headtitle={upcomingTitle}
            highlights={upcomingHighlight}
            gamecards={upcomingGames}
          />

          <Showcase headtitle={recommendedTitle} gamecards={recommendedGames} />
        </S.SectionShowCase>
      </S.Main>
    </Base>
  )
}
