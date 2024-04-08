import React, { useEffect, useState } from "react"
import Tilt from "react-parallax-tilt"
import yaml from "yaml"
import { Grid } from "@mui/material"

import { useSwapiContext } from "../../hooks/useSwapiContext"
import { indexColors } from "./indexColors"
// @ts-ignore
import { BonusSection } from "./BonusSection"
import "./index.css"
// @ts-ignore
export const CharacterCard = ({ character }) => {
  // flipped means its back side is up, showing details
  const [showDetails, setShowDetails] = useState(true)
  const [showBonus, setShowBonus] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  // const [isMoving, setIsMoving] = useState({moving: false, lastXAngle: 0})
  const { hooks } = useSwapiContext()
  const { useSwapiPersonById } = hooks
  const characterDetails = useSwapiPersonById(character?.uid)
  const [backgroundColor, setBackgroundColor] = useState(0)


  useEffect(() => {
    setBackgroundColor((currentValue) => characterDetails?.colorIndex ?? currentValue)
  }, [characterDetails])

  useEffect(() => {
  }, [characterDetails?.homeworld])

  const handleClick = () => {
    setShowBonus(current => !current)
  }

  return (
    <Grid item xs={2} sm={4} md={4}>
      {showBonus ?
        <BonusSection
          characterName={character?.name}
          handleClick={handleClick}
          homeworldId={characterDetails?.homeworld}/>:
        null}
      <Tilt tiltReverse={true} scale={1.25} tiltEnable={false}>
        <article className={"card"} style={{ background: indexColors[backgroundColor+25] }}>
          <header className="card-header">
            <h2 className={"card-summary"}>{character?.name}</h2>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
          </header>

          <section className={`card-text${showDetails ? " show" : ""}`}>
            <p>{showDetails ? yaml.stringify(characterDetails) : null}</p>
          </section>
          <button className={"btn"} type={"button"} onClick={handleClick}>See Homeworld Data</button>
    </article>
    </Tilt>
    </Grid>

  )
}
