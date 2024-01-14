import { FavoriteBorder as FavIcon } from "@styled-icons/material-outlined"
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
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
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
      <Button icon={<FavIcon />} minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
