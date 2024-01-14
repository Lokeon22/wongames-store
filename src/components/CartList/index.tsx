import { useCart } from "../../hooks/use-cart"
import Link from "next/link"
import Button from "../Button"
import GameItem from "../GameItem"
import Empty from "../Empty"
import Loader from "../Loader"

import * as S from "./styles"

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading)
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )

  return (
    <S.Wrapper isEmpty={!items}>
      {items?.length ? (
        <>
          <S.GameList>
            {items &&
              items.map((item) => <GameItem key={item.title} {...item} />)}
          </S.GameList>
          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart">
                <Button>Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games"
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
