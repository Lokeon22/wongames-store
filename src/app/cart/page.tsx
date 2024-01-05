import { Cart as CartContent } from "../../templates/Cart"
import gamesMock from "../../components/GameCard/mock"
import highlightsMock from "../../components/Highlight/mock"
import items from "../../components/CartList/mock"
import cards from "../../components/PaymentOptions/mock"

const props = {
  games: gamesMock,
  highlights: highlightsMock,
  items,
  total: "R$ 350,00",
  cards
}

export default function Cart() {
  return <CartContent {...props} />
}
