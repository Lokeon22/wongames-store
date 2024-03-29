"use client"
import { FormEvent, useState } from "react"
import { useCart } from "../../hooks/use-cart"
import { useRouter } from "next/navigation"
import * as S from "./styles"
import { ShoppingCart } from "@styled-icons/material-outlined"

import Heading from "../Heading"
import Radio from "../Radio"
import Button from "../Button"
import { PaymentProps } from "../GameItem"

export type PaymentCard = Omit<PaymentProps, "purchaseDate">

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards }: PaymentOptionsProps) => {
  const { items } = useCart()
  const { push } = useRouter()
  const [check, setCheck] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (items.length <= 0) {
      return
    }

    return push("/success")
  }

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
        </S.Cardslist>
      </S.Body>
      <S.Footer>
        <Button fullWidth minimal>
          Continue shopping
        </Button>

        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handleSubmit}
          disabled={!check}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
