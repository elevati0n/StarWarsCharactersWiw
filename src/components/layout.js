/**
 * Layout component
 */

import * as React from "react"
import "../pages/layout.css"
import { Container } from "@mui/material"
import { IntroCrawl } from "./CrawlComponent/IntroCrawl"

const Layout = ({ children }) => {
  return (
    <div className={'background'}>
      <IntroCrawl/>
      <Container className={"main-container"}>
        <main>{children}</main>
      </Container>
    </div>
  )
}

export default Layout
