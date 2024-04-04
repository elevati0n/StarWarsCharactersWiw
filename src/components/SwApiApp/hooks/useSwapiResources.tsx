// @ts-ignore
import { useSwapi } from "react-swapi"
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../types/models--swapi-typescript/SW_API_KEYS"
import { useContext, useEffect, useState } from "react"
import { SwApiContext } from "../SwApiApp"

// we need to guard this because there is throttling and rate limiting.  also its better for network, etc to cache.
const useSwapiResource = ({ resource = "", options = {} }) => {
  return useSwapi(resource, options)
}
const checkForOkResponse = (data: any) => data && data?.message?.toLowerCase() === OK_RESPONSE

export const useSwapiRepo = () => {
  const swRepo = useContext(SwApiContext)
  const [localCatalog, setLocalCatalog] = useState(SwApiContext)

  const useSwapiPersonByName = (name = "") => {
    return useSwapiResource({ resource: PEOPLE, options: { name: name } })
  }

  const useSwapiPersonById = (id = "") => {
    return useSwapiResource({ resource: PEOPLE, options: { id: id } })
  }

  const useSwapiPlanetById = (id = "") => {
    return useSwapiResource({ resource: PLANETS, options: { id: id } })
  }

  const useSwapiSpeciesById = (id = "") => {
    return useSwapiResource({ resource: SPECIES, options: { id: id } })
  }

  const useSwapiFilmById = (id = "") => {
    return useSwapiResource({ resource: FILMS, options: { id: id } })
  }

  const useSwapiPeopleOptions = ({ page = "", limit = "" } = { page: 1, limit: 500 }) => {
    return useSwapiResource({ resource: PEOPLE, options: { page, limit } })
  }

useEffect(() => {
    // @ts-ignore
    window.dataCatalog = swRepo
  }, [swRepo])

  useEffect(() => {
    // on initial load, look for data (in localstorage(not implemented))
    // console.dir(data)
    //
    // setLocalCatalog((currentValue) => checkForOkResponse(data)?
    //   swRepo.updatePeopleList(data.results):
    //   currentValue)
    //
    // window.localCatalog = localCatalog
    // window.dataCurrent = data
    // window.swRepo = swRepo

  },[])

return {
    useSwapiPersonByName,
    useSwapiPersonById,
    useSwapiPlanetById,
    useSwapiSpeciesById,
    useSwapiFilmById,
    useSwapiPeopleOptions
  }
}