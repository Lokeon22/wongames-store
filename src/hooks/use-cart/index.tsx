"use client"
import { useQuery } from "@apollo/client"
import { QUERY_GAMES_BY_ID } from "../../graphql/queries/games"
import { getStorageItem, setStorageItem } from "../../utils/localStorage"
import { ApiResponse } from "../../graphql/gqltypes/queryGameType"
import { createContext, useContext, useEffect, useState } from "react"

import { cartMapper } from "../../utils/mappers"
import { formatPrice } from "../../utils/formatprice"

const CART_KEY = "cartItems"

export type CartItem = {
  id: string
  slug: string
  title: string
  price: string
  img: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: "$0.00",
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data, loading } = useQuery<ApiResponse>(QUERY_GAMES_BY_ID, {
    skip: !cartItems.length,
    variables: { ids: cartItems }
  })

  const dataModifier = cartMapper(data?.games.data)

  const total = data?.games.data.reduce((acc, { attributes }) => {
    return acc + attributes.price
  }, 0)

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    const newItems = [...cartItems, id]
    saveCart(newItems)
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((itemId: string) => itemId !== id)
    saveCart(newCartItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: dataModifier,
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
