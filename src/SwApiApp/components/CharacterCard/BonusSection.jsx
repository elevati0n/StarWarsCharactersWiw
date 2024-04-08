import React from "react"
import Tilt from "react-parallax-tilt"
import yaml from "yaml"
import { useSwapiContext } from "../../hooks/useSwapiContext"
import { indexColors } from "./indexColors"


const WorldProfile = ({lookupPlanet: {data}}) => {
  console.log(data)
  return <ul>
    <li> Name: {data?.name} </li>
    <li> Terrain: {data?.terrain}</li>
    <li> Climate: {data?.climate}</li>
    <li> Population: {data?.population} </li>
  </ul>
}
export const BonusSection = ({characterName, homeworldId, handleClick}) => {
  const { hooks } = useSwapiContext()
  const { useSwapiPlanetById } = hooks
  const lookUpPlanet = useSwapiPlanetById(homeworldId)

  return <section className={"simple-modal"}>
    <Tilt tiltReverse={true} scale={1.5} tiltEnable={false} reset={false}>
      <article className={"hw-card card"} style={{ background: indexColors[homeworldId] }}>
        <header className="card-header">
          <h2 className={"card-summary"}>{characterName}</h2>
          <button className="btn" type={"button"} style={{ right: "10px", top: "10px", position: "absolute" }}
                  onClick={handleClick}>X
          </button>
        </header>
        <section className={`card-text show`}>


          <p>
            <WorldProfile lookupPlanet={lookUpPlanet}></WorldProfile>
          </p>
        </section>
      </article>
    </Tilt>
  </section>
}