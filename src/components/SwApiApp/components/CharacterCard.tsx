import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React from "react"

// @ts-ignore
export const CharacterCard = ({character}) => {
  return <Card variant="outlined">
    <CardHeader>{character.summary.name}</CardHeader>
    <CardContent>
      {JSON.stringify(character)}
    </CardContent>
  </Card>
}
