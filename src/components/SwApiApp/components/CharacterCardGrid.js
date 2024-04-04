import { useSwApiContext } from "../hooks/useSwApiContext"
import * as React from "react"
import { useEffect } from "react"
import { useSwapiRepo } from "../hooks/useSwapiResources"

export const CharacterCardGrid = () => {
  const { useSwapiPeopleOptions } = useSwapiRepo()
  const { data } = useSwapiPeopleOptions()
  return <div>{JSON.stringify(data) ?? "No Data"}</div>
}