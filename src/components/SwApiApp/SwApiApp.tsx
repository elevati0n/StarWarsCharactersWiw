// @ts-ignore
import React, { useContext } from "react"
import { SwApiContext } from "./hooks/useSwApiContext"

// @ts-ignore
export const SwApiApp = ({children}) => {
  // we need to store the data locally because it requires multiple calls.
  const {data} = useContext(SwApiContext)

  return (
    <SwApiContext.Provider value={{data}}>
      {children}
    </SwApiContext.Provider>
  )
}

