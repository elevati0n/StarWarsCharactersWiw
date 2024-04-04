import { createContext, useContext, useEffect } from "react"
// @ts-ignore
import { useSwapi } from "react-swapi"
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../types/models--swapi-typescript/SW_API_KEYS"
import SWCatalog from "../dataStructures/SWCatalog"
import { SwApiContext } from "../SwApiApp"
import {
  useSwapiResource,
  useSwapiPersonByName,
  useSwapiPersonById,
  useSwapiPlanetById,
  useSwapiSpeciesById,
  useSwapiFilmById,
  useSwapiPeopleOptions,
} from "./useSwapiResources"

export const useSwApiContext = () => {
  const swRepo = useContext(SwApiContext)


  useEffect(() => {
    // @ts-ignore
    window.dataCatalog = swRepo
  }, [swRepo])

  // useEffect(() => {
  //   // on initial load, look for data (in localstorage(not implemented))
  //   // console.dir(data)
  //   //
  //   setLocalCatalog((currentValue) => checkForOkResponse(data)?
  //     localCatalog.updatePeopleList(data.results):
  //     currentValue)
  //
  //   // window.localCatalog = localCatalog
  //   // window.dataCurrent = data
  //   // window.swRepo = swRepo
  //
  // },[data])

  return {
    swRepo,
    hooks: {
        useSwapiResource,
        useSwapiPersonByName,
        useSwapiPersonById,
        useSwapiPlanetById,
        useSwapiSpeciesById,
        useSwapiFilmById,
        useSwapiPeopleOptions,
    }
  }
}
