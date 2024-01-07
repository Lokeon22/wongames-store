import { Profile } from "../../../templates/Profile"

import CardsList from "../../../components/CardsList"
import cardsMock from "../../../components/PaymentOptions/mock"

async function getCards() {
  return { cards: cardsMock }
}

export default async function ProfileCards() {
  const { cards } = await getCards()

  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}
