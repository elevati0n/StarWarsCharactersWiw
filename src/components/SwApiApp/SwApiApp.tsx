// @ts-ignore
import React, { createContext, useContext, useEffect, useState } from "react"
import SWCatalog from "./dataStructures/SWCatalog"
import { useSwapiPeopleOptions } from "./hooks/useSwapiResources"
import { setState } from "gatsby/dist/utils/worker/child/state"
//todo: make this read local storage to reduce network calls.
const OK_RESPONSE = "ok"

const checkForOkResponse = (data: any) => data && data?.message?.toLowerCase() === OK_RESPONSE
// const sWCatalog =
export const SwApiContext = createContext(new SWCatalog())


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

