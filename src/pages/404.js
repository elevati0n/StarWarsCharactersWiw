import * as React from "react"

import Layout from "../SwApiApp/layout/layout"
import Seo from "../SwApiApp/starterComponents/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>Route doesn&#39;t exist.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
