// @ts-ignore
import React, { createContext, useContext, useEffect, useState } from "react"
//todo: make this read local storage to reduce network calls.
export const SwApiContext = createContext(new SWCatalog())

import SWCatalog from "./dataStructures/SWCatalog"
import useLocalStorageState from 'use-local-storage-state'
// @ts-ignore
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'G-BK0336BHEG'
}
export default function useSwRepoStorage() {
  const [swRepoStorage, setSwRepoStorage] = useLocalStorageState('WIW-StarWars', {
      defaultValue: new SWCatalog().asSwRepo()
    })

  return [swRepoStorage, setSwRepoStorage]

}

// @ts-ignore
export const SwApiApp = ({children}) => {
  // we need to store the data locally because it requires multiple calls.

  const swCatalog = useContext(SwApiContext)
  // const [localCatalog, setLocalCatalog] = useState(new SWCatalog())
  TagManager.initialize(tagManagerArgs)

  return (
    <SwApiContext.Provider value={swCatalog} >
      {children}
    </SwApiContext.Provider>
  )
}

