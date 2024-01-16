"use client"
import { useSession } from "next-auth/react"
import { useWishlist } from "../../hooks/use-wishlist"
import Link from "next/link"

import { Favorite, FavoriteBorder } from "@styled-icons/material-outlined"

import * as S from "./styles"
import CartButton from "../CartButton"
import Ribbon from "../Ribbon"

import { RibbonSizes, RibbonColors } from "../Ribbon"
import { formatPrice } from "../../utils/formatprice"

export type GameCardProps = {
  id: string
  slug: string
  image: string
  title: string
  developer: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonSizes?: RibbonSizes
  ribbonColors?: RibbonColors
}

const GameCard = ({
  id,
  slug,
  image,
  title,
  developer,
  price,
  promotionalPrice,
  ribbon,
  ribbonSizes = "small",
  ribbonColors = "primary"
}: GameCardProps) => {
  const { data } = useSession()
  const { items, addToWishlist, removeFromWishlist } = useWishlist()
  const isWish = items.some((fav) => fav.id === id)

  const handleWishItems = () => {
    isWish
      ? removeFromWishlist(id)
      : addToWishlist({ id, slug, image, price, developer, title })
  }

  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSizes} color={ribbonColors}>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`/game/${slug}`}>
        <S.ImageBox>
          <S.Image src={image} alt={title} />
        </S.ImageBox>
      </Link>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        {data && data.user && (
          <S.FavButton role="button" onClick={handleWishItems}>
            {isWish ? (
              <Favorite aria-label="Remove from Wishlist" />
            ) : (
              <FavoriteBorder aria-label="Add to Wishlist" />
            )}
          </S.FavButton>
        )}

        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>
            {price === 0 ? (
              "FREE"
            ) : (
              <>{formatPrice(promotionalPrice || price)} </>
            )}
          </S.Price>
          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
