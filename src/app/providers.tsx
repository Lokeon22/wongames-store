"use client"
import { ApolloProvider } from "@apollo/client"
import { PropsWithChildren } from "react"

import { GlobalStyles } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import { CartProvider } from "../hooks/use-cart"

import theme from "@/styles/theme"
import { useApollo } from "../utils/apolo"

export function Providers({ children }: PropsWithChildren) {
  const client = useApollo()

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <GlobalStyles />
            {children}
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}
