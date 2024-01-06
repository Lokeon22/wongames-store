import * as S from "./styles"

import Heading from "../Heading"
import { PaymentCard } from "../PaymentOptions"

export type CardListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardListProps) => (
  <S.Wrapper>
    <Heading lineLeft color="black">
      My cards
    </Heading>

    {cards &&
      cards.map((card) => {
        return (
          <S.Card key={card.number}>
            <S.CardImg src={card.img} alt={card.flag} />
            <span>{card.number}</span>
          </S.Card>
        )
      })}
  </S.Wrapper>
)

export default CardsList
