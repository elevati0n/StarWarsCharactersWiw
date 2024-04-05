// @ts-ignore
import { useSwapi } from "react-swapi"
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../types/models--swapi-typescript/SW_API_KEYS"
import { useContext, useEffect, useState } from "react"
import { SwApiContext } from "../SwApiApp"


// we need to guard this because there is throttling and rate limiting.  also its better for network, etc to cache.
const useSwapiResource = ({ resource = "", options = {} }) => {
  return useSwapi(resource, options)
}

const characterDetails = (data: any) => data && data?.name ? ({
  name: data?.name,
  // check units !!
  heightInMeters: data?.height,
  massInKg: data?.mass,
  dateAddedToApiFormatted: data?.date,
  // check this
  numberOfFilmsIn: data?.films?.length,
  birthYear: data?.birth_year
}):{}

const characterSummary = (data: any) => data && data?.name ? ({
  name: data?.name,
}):{}

// @ts-ignore
const transformPersonDataToCharacter = (data: any = {}) => {
  console.dir({data})
  return {
    summary: characterSummary(data),
    details: characterDetails(data),
    personData: data,
    characterId: data.uid,
  }
}



export const useSwapiContext = () => {
  const swCatalog = useContext(SwApiContext)
  const {updatePeopleList, getPeopleList } = swCatalog.getAccessMethods()
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
  const transformPeopleDataToCharacter = (data: any = {}) => {
    if (!data?.results || !Array.isArray(data.results)) return []
    return data.results.map((personData: any) => {
      const character= transformPersonDataToCharacter(personData)
      swCatalog.getAccessMethods().addPerson({person: character})
      return character
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