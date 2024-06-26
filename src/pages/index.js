import * as React from "react"

import Layout from "../SwApiApp/layout/layout"
import Seo from "../SwApiApp/starterComponents/seo"

const IndexPage = () => (
  <Layout/>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
