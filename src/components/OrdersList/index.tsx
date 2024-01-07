"use client"
import Empty from "../Empty"
import GameItem, { GameItemProps, PaymentProps } from "../GameItem"
import Heading from "../Heading"
import * as S from "./styles"

type OrderProps = {
  id: string
  paymentInfo: PaymentProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items?: OrderProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items.map((order) => {
        return order.games.map((game) => (
          <GameItem
            key={`${order.id}-${game.title}`}
            {...game}
            paymentInfo={order.paymentInfo}
          />
        ))
      })
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
