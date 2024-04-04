import { useSwApiContext } from "../hooks/useSwApiContext"
import * as React from "react"

export const CharacterCardGrid = () => {
  const { swRepo } = useSwApiContext()

  return <div>{JSON.stringify(swRepo) ?? "No Data"}</div>

}