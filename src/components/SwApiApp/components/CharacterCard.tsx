import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from "react"
import {CharacterCard } from "../types/StarWarsTypes"

const CharacterCard = (character: CharacterCard) => {
  return <Card variant="outlined">
    <CardContent>
      {JSON.stringify(character)}

    </CardContent>
  </Card>
}

export default CharacterCard