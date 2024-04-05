import React, { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tilt from 'react-parallax-tilt';

import "./index.css"
// @ts-ignore
export const CharacterCard = ({ character }) => {
  // flipped means its back side is up, showing details
  const [isFlipped, setIsFlipped] = useState(false)
  const [isMoving, setIsMoving] = useState({moving: false, lastXAngle: 0})
  return <Tilt
    className={"parallax-effect-glare-scale "}
    perspective={2000}
    glareEnable={true}
    glareMaxOpacity={0.55}
    scale={1.45}
    transitionSpeed={2500}
    // makes it stay active, even if more than one (scaled)
    reset={true}
    tiltReverse={true}
    // onEnter={() => setIsFlipped(true)}
    // onLeave={() => setIsFlipped(false)}
    flipHorizontally={isFlipped}
  >
    <Card raised={true} className={"card-wrapper" + isFlipped? " is-flipped": ""}>
      <CardHeader className={"inner-element"}>{character.summary.name}</CardHeader>
      <CardContent className={"inner-element"}>{character.details.name}</CardContent>
    </Card>
  </Tilt>
}
