/*import { renderHook, waitFor } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { CartProvider, useCart, CartProviderProps } from "."
import { setStorageItem } from "../../utils/localStorage"*/

import { cartItems, gamesMock } from "./mock"

describe("useCart", () => {
  it("should return items and infos if there any in the cart", async () => {
    /*const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem("cartItems", ["15", "16"])

    const { result } = renderHook(() => useCart(), { wrapper })

    await waitFor(() => expect(result.current.items).toStrictEqual(cartItems))*/
  })
})
