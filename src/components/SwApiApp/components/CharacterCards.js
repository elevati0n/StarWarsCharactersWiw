import { useSwApiContext } from "../hooks/useSwApiContext"
import * as React from "react"

export const CharacterCards = () => {
  const { useSwapiPeopleOptions } = useSwApiContext()
  const { data } = useSwapiPeopleOptions()

  return <div>{JSON.stringify(data)}</div>

}