import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart
} from "@styled-icons/material-outlined"

import * as S from "./styles"
import Button from "../Button"
import Ribbon from "../Ribbon"

import { RibbonSizes, RibbonColors } from "../Ribbon"

export type GameCardProps = {
  image: string
  title: string
  developer: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonSizes?: RibbonSizes
  ribbonColors?: RibbonColors
}

const GameCard = ({
  image,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonSizes = "small",
  ribbonColors = "primary"
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSizes} color={ribbonColors}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <S.Image src={image} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
