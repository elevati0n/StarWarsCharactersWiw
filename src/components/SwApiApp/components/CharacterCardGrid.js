import * as React from "react"
import { useSwapiContext } from "../hooks/useSwapiContext"

export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()
  return <div>{JSON.stringify(characterList) ?? "No Data"}</div>
}