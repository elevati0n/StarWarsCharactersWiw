import * as React from "react"
import { useSwapiContext } from "../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "./CharacterCard/CharacterCard"
import { Container, Grid } from "@mui/material"
import { ActiveCardGrid } from "./ActiveCardGrid/ActiveCardGrid"
import { useEffect } from "react"

export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()
  // const person = useSwapiPersonById(character?.personData?.uid)

  useEffect(() => {
    window.characterList = characterList
  },[characterList])

  return (
    <>
      <ActiveCardGrid/>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {characterList.map((character, index) => index > 2?
          <Grid item xs={2} sm={4} md={4} key={index}>
            {/*<Item>*/}
              <CharacterCard character={character} />
            {/*</Item>*/}
          </Grid>: null
        )})
      </Grid>
      </>
  )
}
