import * as React from "react"
import { useSwapiContext } from "../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "./CharacterCard/CharacterCard"
import { Grid } from "@mui/material"
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
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 16, sm: 16, md: 16 }}>
        {characterList.map((character, index) =>
          <Grid item xs={16} sm={12} md={8} lg={6} key={index}>
            {/*<Item>*/}
              <CharacterCard character={character} />
            {/*</Item>*/}
          </Grid>
        )})
      </Grid>
      </>
  )
}
