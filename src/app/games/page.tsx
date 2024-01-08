import GamesTemplate from "../../templates/Games"

import gamesMock from "../../components/GameCard/mock"
import filterMock from "../../components/ExploreSidebar/mock"

export default function Games() {
  return <GamesTemplate games={gamesMock} filterItems={filterMock} />
}
