"use client"
import { ApolloProvider } from "@apollo/client"
import { PropsWithChildren } from "react"

import { GlobalStyles } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import { CartProvider } from "../hooks/use-cart"
import { Next13ProgressBar } from "next13-progressbar"
import { SessionProvider } from "next-auth/react"

import theme from "@/styles/theme"
import { useApollo } from "../utils/apolo"

export function Providers({ children }: PropsWithChildren) {
  const client = useApollo()

  return (
    <>
      <SessionProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CartProvider>
              <GlobalStyles />
              {children}
              <Next13ProgressBar
                height="0.4rem"
                color="#F231A5"
                options={{ showSpinner: true }}
                showOnShallow
              />
            </CartProvider>
          </ThemeProvider>
        </ApolloProvider>
      </SessionProvider>
    </>
  )
}
