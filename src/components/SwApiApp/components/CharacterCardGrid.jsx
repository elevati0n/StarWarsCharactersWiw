import * as React from "react"
import { useSwapiContext } from "../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "./CharacterCard"
import { Grid } from "@mui/material"


export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {/*<Grid item xs={4} sm={8} md={12}>*/}
      {/*  /!*active card here.*!/*/}
      {/*</Grid>*/}
      {characterList.map((character, index) =>
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CharacterCard character={character}/>
          </Grid>
      )})
    </Grid>
  )
}
