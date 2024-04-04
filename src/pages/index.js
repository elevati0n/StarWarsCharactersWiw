import * as React from "react"

import Layout from "../components/starterComponents/layout"
import Seo from "../components/starterComponents/seo"
import { SwApiApp } from "../components/SwApiApp/SwApiApp"
import { CharacterCardGrid } from "../components/SwApiApp/components/CharacterCardGrid"

const IndexPage = () => (
  <Layout>
    <SwApiApp>
      <CharacterCardGrid/>
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
