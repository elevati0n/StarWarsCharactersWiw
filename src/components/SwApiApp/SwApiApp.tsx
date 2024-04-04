// @ts-ignore
import React, { createContext, useContext, useEffect, useState } from "react"
//todo: make this read local storage to reduce network calls.
export const SwApiContext = createContext(new SWCatalog().asSwRepo())

import SWCatalog from "./dataStructures/SWCatalog"

// @ts-ignore
export const SwApiApp = ({children}) => {
  // we need to store the data locally because it requires multiple calls.
  const swCatalog = useContext(SwApiContext)
  // const [localCatalog, setLocalCatalog] = useState(new SWCatalog())

  return (
    <SwApiContext.Provider value={swCatalog} >
      {children}
    </SwApiContext.Provider>
  )
}

