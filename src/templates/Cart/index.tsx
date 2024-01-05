"use client"
import * as S from "./styles"
import Base from "../Base"

import { Container } from "../../components/Container"
import { Divider } from "../../components/Divider"

import Heading from "../../components/Heading"
import Showcase from "../../components/Showcase"
import Empty from "../../components/Empty"

import CartList, { CartListProps } from "../../components/CartList"
import PaymentOptions, {
  PaymentOptionsProps
} from "../../components/PaymentOptions"
import { GameCardProps } from "../../components/GameCard"
import { HighlightProps } from "../../components/Highlight"

export type CartProps = {
  games: GameCardProps[]
  highlights: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, "cards">

export function Cart({ games, highlights, items, total, cards }: CartProps) {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <Heading lineLeft lineColor="secondary">
            My cart
          </Heading>

          <S.Content>
            {items.length > 0 ? (
              <>
                <CartList items={items} total={total} />
                <PaymentOptions cards={cards} handlePayment={handlePayment} />
              </>
            ) : (
              <Empty
                title="Nothing to see here"
                description="Go back to the store and explore great games and offers"
                hasLink
              />
            )}
          </S.Content>

          <Divider />
          <S.SectionShowCase>
            <Showcase
              headtitle="You may like these games"
              highlights={highlights}
              gamecards={games}
            />
          </S.SectionShowCase>
        </S.Wrapper>
      </Container>
    </Base>
  )
}
