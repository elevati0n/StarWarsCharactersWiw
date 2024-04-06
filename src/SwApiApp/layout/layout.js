/**
 * Layout component
 */

import * as React from "react"
import { SwApiApp } from "../SwApiApp"

// import "./layout.css"
const Layout = ({ children }) => {
  return (
      <main className={'main-container'}>
        <SwApiApp>
          {children}
        </SwApiApp>
      </main>
  )
}

export default Layout
