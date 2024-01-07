import { Profile } from "../../../templates/Profile"
import OrdersList from "../../../components/OrdersList"

import orders from "../../../components/OrdersList/mock"

export default async function ProfileOrders() {
  return (
    <Profile>
      <OrdersList items={orders} />
    </Profile>
  )
}
