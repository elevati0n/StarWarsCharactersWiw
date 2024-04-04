// @ts-ignore
import { useSwapi } from "react-swapi"
import { FILMS, PEOPLE, PLANETS, SPECIES } from "../types/models--swapi-typescript/SW_API_KEYS"

export const useSwapiResource = ({ resource = "", options = {} }) => {
  return useSwapi(resource, options)
}

export const useSwapiPersonByName = (name = "") => {
  return useSwapiResource({ resource: PEOPLE, options: { name: name } })
}

export const useSwapiPersonById = (id = "") => {
  return useSwapiResource({ resource: PEOPLE, options: { id: id } })
}

export const useSwapiPlanetById = (id = "") => {
  return useSwapiResource({ resource: PLANETS, options: { id: id } })
}

export const useSwapiSpeciesById = (id = "") => {
  return useSwapiResource({ resource: SPECIES, options: { id: id } })
}

export const useSwapiFilmById = (id = "") => {
  return useSwapiResource({ resource: FILMS, options: { id: id } })
}

export const useSwapiPeopleOptions = ({ page = "", limit = "" } = { page: 1, limit: 500 }) => {
  return useSwapiResource({ resource: PEOPLE, options: { page, limit } })
}
