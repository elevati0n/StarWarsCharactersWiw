import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/starterComponents/seo"
import { SwApiApp } from "../components/SwApiApp/SwApiApp"
import { CharacterCardGrid } from "../components/SwApiApp/components/CharacterCardGrid"

// Import the necessary styles, or include them another way with your build process
import { ActiveCardGrid } from "../components/SwApiApp/components/ActiveCardGrid/ActiveCardGrid"

import "./layout.css"
const IndexPage = () => (
  <Layout>
    <SwApiApp>
      <ActiveCardGrid/>
      <CharacterCardGrid />
    </SwApiApp>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
