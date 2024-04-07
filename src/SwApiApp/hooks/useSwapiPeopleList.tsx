import { PEOPLE } from "../types/models--swapi-typescript/SW_API_KEYS"
import { useEffect } from "react"
// @ts-ignore
import { useSwapi } from "react-swapi"

export const useSwapiPeopleList = () => {
  const useSwapiResource = ({ resource = "", options = {} }) => {
    return useSwapi(resource, options)
  }
  
  return  useSwapiResource({ resource: PEOPLE, options: { limit:100 } })
}