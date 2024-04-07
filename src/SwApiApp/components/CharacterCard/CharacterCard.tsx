import React, { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tilt from 'react-parallax-tilt';
import "./index.css"
import { extractCharacterDetails, useSwapiContext } from "../../hooks/useSwapiContext"

import yaml from "yaml"
import { Grid } from "@mui/material"
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
    <Grid item xs={2} sm={4} md={4}>
    <article className={"card"}>
      <header className="card-header">
        <h2 className={"card-summary"}>{character?.name}</h2>
        <svg className="half-circle" viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>
      </header>

      <section className={`card-text${showDetails? " show":""}`}>
        <p>{showDetails? yaml.stringify(characterDetails): null}</p>
      </section>
      {/*<small className={"bonus"}>*/}
      {/*  <a href="">See More</a>*/}
      {/*</small>*/}
    </article>
    </Grid>

  )
}
