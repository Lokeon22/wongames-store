import React from "react"
import { GlobalStyles } from "../src/styles/global"
import { CartContext, CartContextDefaultValues } from "../src/hooks/use-cart"
import { ThemeProvider } from "styled-components"
import theme from "../src/styles/theme"

export const parameters = {
  backgrounds: {
    default: "won-light",
    values: [
      {
        name: "won-light",
        value: theme.colors.white
      },
      {
        name: "won-dark",
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <>
      <ThemeProvider theme={theme}>
        <CartContext.Provider
          value={{
            ...CartContextDefaultValues,
            ...(context?.args?.cartContextValue || {}),
            ...context.args
          }}
        >
          <GlobalStyles />
          <Story />
        </CartContext.Provider>
      </ThemeProvider>
    </>
  )
]
