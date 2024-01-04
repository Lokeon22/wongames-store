import { Wishlist as WishlistContent } from "../../templates/Wishlist"
import gamesMock from "../../components/GameCard/mock"
import highlightsMock from "../../components/Highlight/mock"

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlights: highlightsMock
}

export default function Wishlist() {
  return <WishlistContent {...props} />
}
