import { AddShoppingCart as CartIcon } from "@styled-icons/material-outlined"
import { FavoriteBorder as FavIcon } from "@styled-icons/material-outlined"
import { formatPrice } from "../../utils/formatprice"

import * as S from "./styles"

import Heading from "../Heading"
import Ribbon from "../Ribbon"
import Button from "../Button"

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>
    <Ribbon color="secondary">
      {price === 0 ? "FREE" : <>{formatPrice(price)}</>}
    </Ribbon>
    <S.GameDescription>{description}</S.GameDescription>
    <S.ButtonsWrapper>
      <Button fullWidth icon={<CartIcon />}>
        Add to cart
      </Button>
      <Button icon={<FavIcon />} minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
