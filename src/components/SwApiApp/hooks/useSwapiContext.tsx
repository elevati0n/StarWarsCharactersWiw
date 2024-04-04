// @ts-ignore
import { useSwapi } from "react-swapi"
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../types/models--swapi-typescript/SW_API_KEYS"
import { useContext, useEffect, useState } from "react"
import { SwApiContext } from "../SwApiApp"


// we need to guard this because there is throttling and rate limiting.  also its better for network, etc to cache.
const useSwapiResource = ({ resource = "", options = {} }) => {
  return useSwapi(resource, options)
}

// @ts-ignore
const transformPeopleDataToCharacter = (data: any) => {
  // message containing list of characters (or error or nothing)
  // we want Character Types for the Card
  console.dir(data)
  return data
}

export const useSwapiContext = () => {
  const swCatalog = useContext(SwApiContext)
  const swRepo = swCatalog.asSwRepo()
  const { people: {updatePeopleList }} = swCatalog.getAccessMethods()
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

  const useInitPeopleList = () => {
    const { data } = useSwapiPeopleOptions()
    updatePeopleList(transformPeopleDataToCharacter(data))
    return data
  }

  const usePeopleList = () => {
    return swRepo.people
  }

  useEffect(() => {
    // @ts-ignore
    window.dataCatalog = swCatalog
    // @ts-ignore
    window.swRepo = swRepo
  }, [swCatalog, swRepo])

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
  useCharacterList: swRepo?.people?.length? usePeopleList: useInitPeopleList,
  hooks: {
      useSwapiPersonByName,
      useSwapiPersonById,
      useSwapiPlanetById,
      useSwapiSpeciesById,
      useSwapiFilmById,
      useSwapiPeopleOptions
    }
  }
}