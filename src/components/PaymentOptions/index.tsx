"use client"
import { useState } from "react"
import * as S from "./styles"
import { Add, ShoppingCart } from "@styled-icons/material-outlined"

import Heading from "../Heading"
import Radio from "../Radio"
import Button from "../Button"
import { PaymentProps } from "../GameItem"

export type PaymentCard = Omit<PaymentProps, "purchaseDate">

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [check, setCheck] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom lineColor="primary" color="black" size="small">
          Payment
        </Heading>

        <S.Cardslist>
          {cards &&
            cards.map((card) => {
              return (
                <S.CardItem key={card.number}>
                  <S.CardInfo>
                    <S.CardImg src={card.img} alt={card.flag} />
                    {card.number}
                  </S.CardInfo>
                  <Radio
                    name="credit-card"
                    aria-label={card.number}
                    id={card.number}
                    value={card.number}
                    onCheck={() => setCheck(true)}
                  />
                </S.CardItem>
              )
            })}

          <S.AddCard role="button">
            <Add style={{ marginRight: "1rem" }} size={24} />
            Add a new credit card
          </S.AddCard>
        </S.Cardslist>
      </S.Body>
      <S.Footer>
        <Button fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!check}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
