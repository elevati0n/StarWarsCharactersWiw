// @ts-ignore
import React, { createContext, useContext, useEffect, useState } from "react"
import SWCatalog from "./dataStructures/SWCatalog"
import { useSwapiPeopleOptions } from "./hooks/useSwapiResources"
import { setState } from "gatsby/dist/utils/worker/child/state"
//todo: make this read local storage to reduce network calls.
export const SwApiContext = createContext(new SWCatalog().asSwRepo())
const OK_RESPONSE = "ok"

const checkForOkResponse = (data: any) => data && data?.message?.toLowerCase() === OK_RESPONSE

// @ts-ignore
export const SwApiApp = ({children}) => {
  // we need to store the data locally because it requires multiple calls.
  const swRepo = useContext(SwApiContext)
  const [localCatalog, setLocalCatalog] = useState(new SWCatalog())
  const { data } = useSwapiPeopleOptions()


  useEffect(() => {
    // on initial load, look for data (in localstorage(not implemented))
    console.dir(data)

    setLocalCatalog((currentValue) => checkForOkResponse(data)?
      localCatalog.updatePeopleList(data.results):
      currentValue)

    window.localCatalog = localCatalog
    window.dataCurrent = data
    window.swRepo = swRepo

  },[data])

  return (
    <SwApiContext.Provider value={localCatalog}>
      {children}
    </SwApiContext.Provider>
  )
}

