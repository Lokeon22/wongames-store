import { AddShoppingCart as CartIcon } from "@styled-icons/material-outlined"
import { FavoriteBorder as FavIcon } from "@styled-icons/material-outlined"

import * as S from "./styles"

import Heading from "../Heading"
import Ribbon from "../Ribbon"
import Button from "../Button"

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>
    <Ribbon color="secondary">{`$${price}`}</Ribbon>
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
