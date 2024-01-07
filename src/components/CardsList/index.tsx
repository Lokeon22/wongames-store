"use client"
import * as S from "./styles"
import Image from "next/image"

import Heading from "../Heading"
import { PaymentCard } from "../PaymentOptions"

export type CardListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardListProps) => (
  <S.Wrapper>
    <Heading lineLeft color="black" size="small">
      My cards
    </Heading>

    {cards &&
      cards.map((card) => {
        return (
          <S.Card key={card.number}>
            <Image src={card.img} alt={card.flag} width={40} height={30} />
            <span>{card.number}</span>
          </S.Card>
        )
      })}
  </S.Wrapper>
)

export default CardsList
