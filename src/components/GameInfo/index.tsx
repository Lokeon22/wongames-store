"use client"
import { useSession } from "next-auth/react"
import { useWishlist } from "../../hooks/use-wishlist"
import {
  FavoriteBorder as FavIcon,
  Favorite
} from "@styled-icons/material-outlined"
import { formatPrice } from "../../utils/formatprice"

import * as S from "./styles"

import Heading from "../Heading"
import Ribbon from "../Ribbon"
import Button from "../Button"
import CartButton from "../CartButton"

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
  developer?: string
  slug?: string
  image?: string
}

const GameInfo = ({
  id,
  title,
  description,
  price,
  developer = "",
  image = "",
  slug = ""
}: GameInfoProps) => {
  const { data } = useSession()

  const { items, addToWishlist, removeFromWishlist } = useWishlist()
  const isWish = items.some((fav) => fav.id === id)

  const handleWish = () => {
    isWish
      ? removeFromWishlist(id)
      : addToWishlist({ id, title, price, developer, slug, image })
  }

  return (
    <S.Wrapper>
      <Heading lineBottom color="black">
        {title}
      </Heading>
      <Ribbon color="secondary">
        {price === 0 ? "FREE" : <>{formatPrice(price)}</>}
      </Ribbon>
      <S.GameDescription>{description}</S.GameDescription>
      <S.ButtonsWrapper>
        <CartButton id={id} size="large" hasText />
        {data && data.user && (
          <Button
            onClick={handleWish}
            icon={isWish ? <Favorite /> : <FavIcon />}
            minimal
          >
            Wishlist
          </Button>
        )}
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
