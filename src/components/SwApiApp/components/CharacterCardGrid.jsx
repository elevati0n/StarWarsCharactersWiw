import * as React from "react"
import { useSwapiContext } from "../hooks/useSwapiContext"
//ts-ignore
import Crawl from 'react-star-wars-crawl'

// Import the necessary styles, or include them another way with your build process
import 'react-star-wars-crawl/lib/index.css'

export const CharacterCardGrid = () => {
  const { useCharacterList } = useSwapiContext()
  const characterList = useCharacterList()

  return <Crawl
    title={<h1>WHEN I WORK INTERVIEW STEP IV</h1>}
    subTitle={<h2>Coding Challenge</h2>}
  >
    <section>
    <h3>Using a public API, display a list of all Star Wars characters using SWAPI - The Star Wars API.</h3>
    <p>For every character, we’d like to display a card</p>
    <p>Challenges that use a code generator (ie. Code pilot, ChatGPT) to complete the
challenge will not be accepted.</p>
    <p>Feel free to reach out to the When I Work team with questions.</p>
    </section>
  </Crawl>

}