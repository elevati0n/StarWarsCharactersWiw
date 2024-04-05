import * as React from "react"
import { useSwapiContext } from "../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "./CharacterCard/CharacterCard"
import { Grid } from "@mui/material"
import { ActiveCardGrid } from "./ActiveCardGrid/ActiveCardGrid"
import { useEffect } from "react"
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()
  // const person = useSwapiPersonById(character?.personData?.uid)

  useEffect(() => {
    window.characterList = characterList
  },[characterList])

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    zIndex:3
  }));

  return (
    <>
      <ActiveCardGrid/>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 16, sm: 16, md: 16 }}>
        {characterList.map((character, index) =>
          <Grid item xs={16} sm={12} md={8} lg={6} key={index}>
              <CharacterCard character={character} />
          </Grid>
        )})
      </Grid>
      </>
  )
}
