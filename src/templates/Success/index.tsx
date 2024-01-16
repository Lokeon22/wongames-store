"use client"
import { useEffect } from "react"
import { useCart } from "../../hooks/use-cart"
import { Done } from "@styled-icons/material-outlined/Done"
import Link from "next/link"
import Base from "../../templates/Base"
import { Container } from "../../components/Container"

import * as S from "./styles"

export function Success() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{" "}
            <Link href="/profile/orders">
              <span>Orders List</span>
            </Link>
            . Enjoy!
          </S.Text>
        </S.Wrapper>
      </Container>
    </Base>
  )
}
