/**
 * Layout component
 */

import * as React from "react"
import "../pages/layout.css"
import { Container } from "@mui/material"
import { IntroCrawl } from "./SwApiApp/components/CrawlComponent/IntroCrawl"

const Layout = ({ children }) => {
  return (
    <main className={'main--layout'}>
      <IntroCrawl/>
      <Container className={"main-container"}>
        <main>{children}</main>
      </Container>
    </main>
  )
}

export default Layout
