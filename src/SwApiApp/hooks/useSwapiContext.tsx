// @ts-ignore
import useSwapi from "../react-swapi-dev/src/hooks/useSwapi"
// @ts-ignore
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../types/models--swapi-typescript/SW_API_KEYS"
import { useContext, useEffect, useState } from "react"
import { SwApiContext } from "../SwApiApp"
import { useSwapiPeopleList } from "./useSwapiPeopleList"
// we need to guard this because there is throttling and rate limiting.  also its better for network, etc to cache.
const useSwapiResource = ({ resource = "", options = {} }) => {
  return useSwapi(resource, options)
}

export const extractCharacterDetails = (data: any) => data ? ({
  name: data?.name,
  // check units !!
  heightInMeters: data?.height,
  massInKg: data?.mass,
  dateAddedToApiFormatted: data?.created,
  // check this
  numberOfFilmsIn: data?.films?.length,
  birthYear: data?.birth_year
}):{}

const characterSummary = (data: any) => data && data?.name ? ({
  name: data?.name,
}):{}

// @ts-ignore
const transformPersonDataToCharacter = (data: any = {}) => {
  return {
    ...data,
  }
}



export const useSwapiContext = () => {
  const swCatalog = useContext(SwApiContext)
  const {updatePeopleList, getPeopleList } = swCatalog.getAccessMethods()
  const [localCatalog, setLocalCatalog] = useState(SwApiContext)

  // @ts-ignore
  const useSwapiPersonByName = (name) => {
    const { data, isLoading, error } = useSwapiResource({ resource: PEOPLE, options: { name: name } })
    if (data?.message === "ok") {
      swCatalog.getAccessMethods().addPerson({
        person: { ...swCatalog.people[data?.result[0].uid],  ...data?.result[0] } })
      console.log(data?.result[0])
      return extractCharacterDetails(data?.result[0].properties)
    }
  }

  const useSwapiPersonById = (id = "") => {
    const { data, isLoading, error } = useSwapiResource({ resource: PEOPLE, options: { id } })
    console.log(data)
    if (data?.message === "ok") {
      swCatalog.getAccessMethods().addPerson({person: data?.result[0]})
      return data?.result[0]
    }
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

  const useSwapiPeopleOptions = ({ page = "", limit = "" } = { page: 1, limit: 100 }) => {
    return useSwapiPeopleList()
  }
  const transformPeopleDataToCharacter = (data: any = {}) => {
    if (!data?.results || !Array.isArray(data.results)) return []
    return data.results.map((personData: any) => {
      swCatalog.getAccessMethods().addPerson({person: personData})
      return personData
    })
  }
  const useInitPeopleList = () => {
    const { data } = useSwapiPeopleOptions()
    const transformedData = transformPeopleDataToCharacter(data)
    updatePeopleList(transformedData)
    return transformedData
  }

  const usePeopleList = () => {
    return getPeopleList()
  }

  useEffect(() => {
    // @ts-ignore
    window.dataCatalog = swCatalog
    // @ts-ignore
  }, [swCatalog])

return {
  useCharacterList: swCatalog?.people?.length? usePeopleList: useInitPeopleList,
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