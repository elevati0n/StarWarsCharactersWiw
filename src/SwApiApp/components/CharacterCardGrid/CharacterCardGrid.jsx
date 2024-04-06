import * as React from "react"
import { useSwapiContext } from "../../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "../CharacterCard/CharacterCard"
import { Grid } from "@mui/material"
import { useEffect } from "react"
import "./index.css"

export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()
  // const person = useSwapiPersonById(character?.personData?.uid)

  useEffect(() => {
    window.characterList = characterList
  },[characterList])

  return (
    <ul className={'card-list'}>
        {characterList.map((character, index) =>
              <CharacterCard character={character} />
        )})
    </ul>
  )
}
