"use client"
import * as S from "./styles"
import Base from "../Base"

import Heading from "../../components/Heading"
import Showcase from "../../components/Showcase"
import GameCard from "../../components/GameCard"
import Empty from "../../components/Empty"

import { Divider } from "../../components/Divider"
import { GameCardProps } from "../../components/GameCard"
import { HighlightProps } from "../../components/Highlight"

type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlights: HighlightProps
}

export function Wishlist({
  games,
  recommendedTitle,
  recommendedGames,
  recommendedHighlights
}: WishlistTemplateProps) {
  return (
    <Base>
      <S.Section>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games && games.length > 0 ? (
          <S.GameContainer>
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </S.GameContainer>
        ) : (
          <Empty
            title="Nothing to see here"
            description="Your wishlist is empty"
            hasLink
          />
        )}

        <S.LikeGames>
          <Divider />
          <Showcase
            headtitle={recommendedTitle}
            highlights={recommendedHighlights}
            gamecards={recommendedGames}
          />
        </S.LikeGames>
      </S.Section>
    </Base>
  )
}
