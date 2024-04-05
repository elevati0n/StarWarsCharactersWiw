import React, { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tilt from 'react-parallax-tilt';

import "./index.css"
import { extractCharacterDetails, useSwapiContext } from "../../hooks/useSwapiContext"
// @ts-ignore
export const CharacterCard = ({ character }) => {
  // flipped means its back side is up, showing details
  const [showDetails, setShowDetails] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  // const [isMoving, setIsMoving] = useState({moving: false, lastXAngle: 0})
  const { hooks } = useSwapiContext()
  const { useSwapiPersonByName } = hooks
  const characterDetails = useSwapiPersonByName(character?.name)

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
    onEnter={() => setShowDetails(true)}
    onLeave={() => setShowDetails(false)}
    flipHorizontally={isFlipped}
  >
    <Card raised={true} className={"card-wrapper" + isFlipped? " is-flipped": ""}>
      <CardContent className={"inner-element card-front"} >{character?.name}</CardContent>
      {showDetails? <CardContent className={"inner-element card-back"}><pre>{JSON.stringify(characterDetails, null, 2)}</pre></CardContent>: null}
    </Card>
  </Tilt>
}
