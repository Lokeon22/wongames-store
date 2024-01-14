"use client"
import * as S from "./styles"
import Base from "../Base"

import { Container } from "../../components/Container"
import { Divider } from "../../components/Divider"

import Heading from "../../components/Heading"
import Showcase from "../../components/Showcase"

import CartList, { CartListProps } from "../../components/CartList"
import PaymentOptions, {
  PaymentOptionsProps
} from "../../components/PaymentOptions"
import { GameCardProps } from "../../components/GameCard"
import { HighlightProps } from "../../components/Highlight"

export type CartProps = {
  recommendedTitle: string
  games: GameCardProps[]
  highlights: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, "cards">

export function Cart({
  games,
  recommendedTitle,
  highlights,
  cards
}: CartProps) {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <Heading lineLeft lineColor="secondary">
            My cart
          </Heading>

          <S.Content>
            <CartList />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>

          <Divider />
          <S.SectionShowCase>
            <Showcase
              headtitle={recommendedTitle}
              highlights={highlights}
              gamecards={games}
            />
          </S.SectionShowCase>
        </S.Wrapper>
      </Container>
    </Base>
  )
}
