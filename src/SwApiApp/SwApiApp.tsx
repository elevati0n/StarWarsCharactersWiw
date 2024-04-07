// @ts-ignore
import React, { createContext, useContext } from "react"
// @ts-ignore
import TagManager from 'react-gtm-module'

import SWCatalog from "./dataStructures/SWCatalog"
// @ts-ignore
import { ActiveCardGrid, CharacterCardGrid, IntroCrawl } from "./components"

export const SwApiContext = createContext(new SWCatalog())
const tagManagerArgs = {
  gtmId: 'G-BK0336BHEG'
}

// @ts-ignore
export const SwApiApp = ({children}) => {
  // we need to store the data locally because it requires multiple calls.
  TagManager.initialize(tagManagerArgs)
  const swCatalog = useContext(SwApiContext)

  return (
    <SwApiContext.Provider value={swCatalog} >
      <IntroCrawl/>
      <ActiveCardGrid/>
      <CharacterCardGrid />
        {children}
    </SwApiContext.Provider>
  )
}
