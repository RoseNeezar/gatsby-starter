import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, Theme } from "./src/themes"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
