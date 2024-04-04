import { createContext, useContext, useEffect } from "react"
// @ts-ignore
import { useSwapi } from "react-swapi"
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../enums/SW_API_KEYS"
import SWCatalog from "../dataStructures/SWCatalog"
const SwApiContext = createContext({data: new SWCatalog()})

const useSwApiContext = () => {
  const {data: swCatalog}= useContext(SwApiContext)

  const useSwapiResource = ({ resource = "", options = {} }) => {
    return useSwapi(resource, options)
  }

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
    window.dataCatalog = swCatalog
  }, [swCatalog])

  return {
    getData: {
      people: swCatalog.people,
      homeworlds: swCatalog.homeworlds,
      films: swCatalog.films,
      species: swCatalog.species
    },
    useSwapiPeopleOptions
  }
}

export {SwApiContext, useSwApiContext}