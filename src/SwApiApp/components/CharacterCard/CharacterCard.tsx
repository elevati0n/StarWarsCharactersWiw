import React, { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tilt from 'react-parallax-tilt';

import { extractCharacterDetails, useSwapiContext } from "../../hooks/useSwapiContext"
// @ts-ignore
export const CharacterCard = ({ character }) => {
  // flipped means its back side is up, showing details
  const [showDetails, setShowDetails] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)
  // const [isMoving, setIsMoving] = useState({moving: false, lastXAngle: 0})
  const { hooks } = useSwapiContext()
  const { useSwapiPersonByName } = hooks
  const characterDetails = useSwapiPersonByName(character?.name)

  return (
  //   <Tilt
  //   className={"parallax-effect-glare-scale "}
  //   // perspective={2000}
  //   glareEnable={true}
  //   // glareMaxOpacity={0.55}
  //   // transitionSpeed={9900}
  //   // makes it stay active, even if more than one (scaled)
  //   scale={1.2}
  //   reset={true}
  //   tiltReverse={true}
  //   onEnter={() => setShowDetails(true)}
  //   onLeave={() => setShowDetails(false)}
  //   flipHorizontally={isFlipped}
  // >
    <li>
      <h1>{character?.name}</h1>
      <span>
        <code>{JSON.stringify(characterDetails, null, 2)}</code>
      </span>
      {/*<Card raised={true} className={`card ${isFlipped ? ` is-flipped`: ""}`}>*/}
      {/*  <CardHeader className={"inner-element card-front"} title={character?.name}/>*/}
      {/*  {showDetails? <CardContent className={"inner-element card-back"}><code>{JSON.stringify(characterDetails, null, 2)}</code></CardContent>: null}*/}
      {/*</Card>*/}
    </li>

  // {/*</Tilt>*/}
  )
}
