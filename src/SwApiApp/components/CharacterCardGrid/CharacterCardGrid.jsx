import * as React from "react"
import { useSwapiContext } from "../../hooks/useSwapiContext"
//ts-ignore
import { CharacterCard } from "../CharacterCard/CharacterCard"
import { Container, Grid } from "@mui/material"
import { useEffect } from "react"
import "./index.css"
import { PEOPLE } from "../../types/models--swapi-typescript/SW_API_KEYS"
// we need to guard this because there is throttling and rate limiting.  also its better for network, etc to cache.

export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()
  return (
      <Container maxWidth={"lg"} className={"card-list"}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.isArray(characterList)? characterList.map((character, index) =>
            <CharacterCard character={character} />
          ):null})
        </Grid>
      </Container>
  )
}
