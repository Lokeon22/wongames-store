import Link from "next/link"
import Button from "../Button"
import GameItem, { GameItemProps } from "../GameItem"
import Empty from "../Empty"

import * as S from "./styles"

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items}>
    {items?.length ? (
      <>
        {items && items.map((item) => <GameItem key={item.title} {...item} />)}
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

export default CartList
