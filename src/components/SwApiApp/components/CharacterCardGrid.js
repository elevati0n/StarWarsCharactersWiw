import { useSwApiContext } from "../hooks/useSwApiContext"
import * as React from "react"

export const CharacterCardGrid = () => {
  const { swCatalog } = useSwApiContext()

  return <div>{JSON.stringify(swCatalog) ?? "No Data"}</div>

}