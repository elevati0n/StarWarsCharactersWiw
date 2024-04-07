import * as React from "react"
import { useSwapiContext } from "../../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "../CharacterCard/CharacterCard"
import { Container, Grid } from "@mui/material"
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
      <Container maxWidth={"lg"} className={"card-list"}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {characterList.map((character, index) =>
            <CharacterCard character={character} />
          )})
        </Grid>
      </Container>
  )
}
