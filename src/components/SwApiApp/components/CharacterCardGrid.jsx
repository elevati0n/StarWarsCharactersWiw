import * as React from "react"
import { useSwapiContext } from "../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "./CharacterCard"
import { Container, Grid } from "@mui/material"
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    zIndex:3
  }));

  return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/*<Grid item xs={4} sm={8} md={12}>*/}
          {/*  /!*active card here.*!/*/}
          {/*</Grid>*/}
          {characterList.map((character, index) =>
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item><CharacterCard character={character}/></Item>
              </Grid>
          )})
        </Grid>
  )
}
