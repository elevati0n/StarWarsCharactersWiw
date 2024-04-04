import { useSwApiContext } from "../hooks/useSwApiContext"
import * as React from "react"
import { useSwapiPeopleOptions } from "../hooks/useSwapiResources"
import { useEffect } from "react"

export const CharacterCardGrid = () => {
  const { swRepo } = useSwApiContext()
  const { data } = useSwapiPeopleOptions()
  return <div>{JSON.stringify(data) ?? "No Data"}</div>
}