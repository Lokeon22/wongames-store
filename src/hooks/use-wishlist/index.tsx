"use client"
import { createContext, useContext } from "react"
import { GameCardProps } from "../../components/GameCard"
import { useState, useEffect } from "react"

export type WishlistContextData = {
  items: GameCardProps[]
  addToWishlist: (data: GameCardProps) => void
  removeFromWishlist: (id: string) => void
}

export const WishlistContextDefaultValues = {
  items: [],
  addToWishlist: () => null,
  removeFromWishlist: () => null
}

export const WishListContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wish, setWish] = useState<GameCardProps[]>(
    typeof window !== "undefined"
      ? JSON.parse(`${localStorage.getItem("@wongames:wish")}`)
      : []
  )

  const addToWishlist = (data: GameCardProps) => {
    setWish([...wish, data])
  }

  const removeFromWishlist = (id: string) => {
    const filtered = wish.filter((fav) => fav.id !== id)
    setWish(filtered)
  }

  useEffect(() => {
    localStorage.setItem("@wongames:wish", JSON.stringify(wish))
  }, [wish])

  return (
    <WishListContext.Provider
      value={{ items: wish, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishListContext.Provider>
  )
}

const useWishlist = () => useContext(WishListContext)

export { WishlistProvider, useWishlist }
