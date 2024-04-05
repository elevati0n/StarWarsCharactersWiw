import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from "react"

// @ts-ignore
export const CharacterCard = ({character}) => {
  return <Card variant="outlined">
    <CardContent>
      {JSON.stringify(character)}
    </CardContent>
  </Card>
}
