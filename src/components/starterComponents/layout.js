/**
 * Layout component
 */

import * as React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
      <div className={"main-container"}>
        <main>{children}</main>
      </div>
  )
}

export default Layout
