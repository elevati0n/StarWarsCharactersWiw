// @ts-ignore
import React, { createContext, useContext } from "react"
import SWCatalog from "./dataStructures/SWCatalog"
//todo: make this read local storage to reduce network calls.
export const SwApiContext = createContext(new SWCatalog().asSwRepo())

// @ts-ignore
export const SwApiApp = ({children}) => {
  // we need to store the data locally because it requires multiple calls.
  const swRepo = useContext(SwApiContext)

  return (
    <SwApiContext.Provider value={swRepo}>
      {children}
    </SwApiContext.Provider>
  )
}

