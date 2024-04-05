import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tilt from 'react-parallax-tilt';

import "./index.css"
// @ts-ignore
export const CharacterCard = ({ character }) => {

  return <Tilt
    className="parallax-effect-glare-scale box-assine "
    perspective={2000}
    glareEnable={true}
    glareMaxOpacity={0.55}
    scale={1.4}
  >
    <Card className={"card-wrapper "}>
      <CardHeader className={"card-front inner-element"}>{character.summary.name}</CardHeader>
      <CardContent className={"card-back inner-element"}>{character.summary.name}</CardContent>
    </Card>
  </Tilt>
}
