import { createContext, useContext, useEffect } from "react"
// @ts-ignore
import { useSwapi } from "react-swapi"
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../types/models--swapi-typescript/SW_API_KEYS"
import SWCatalog from "../dataStructures/SWCatalog"
import { SwApiContext } from "../SwApiApp"

export const useSwApiContext = () => {
  const swRepo = useContext(SwApiContext)

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
    window.dataCatalog = swRepo
  }, [swRepo])

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
