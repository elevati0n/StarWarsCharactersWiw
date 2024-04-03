import * as styles from "../components/index.module.css"
import * as React from "react"
import Layout from "../components/layout"

// random styles that were all over the project that were annoying me.

const headerDefaultStyle = {
  margin: `0 auto`,
  padding: `var(--space-4) var(--size-gutter)`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
}

const headerLinkDefaultStyle = {
  fontSize: `var(--font-sm)`,
  textDecoration: `none`,
}

const linkListToStyledList = (links) => links.map(link => (
  <li key={link.url} className={styles.listItem}>
    <a
      className={styles.listItemLink}
      href={`${link.url}${utmParameters}`}
    >
      {link.text} ↗
    </a>
    <p className={styles.listItemDescription}>{link.description}</p>
  </li>
))


const mainWrapperStyle = {
  margin: `0 auto`,
  maxWidth: `var(--size-content)`,
  padding: `var(--size-gutter)`,
}

const footerStyle = {
  marginTop: `var(--space-5)`,
  fontSize: `var(--font-sm)`,
}
const dateCopyRight = <>© {new Date().getFullYear()} &middot; Built with
  <a href="https://www.gatsbyjs.com">Gatsby</a></>

const defaultIndexLayout = () =>
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        h1Message
      </h1>
      <p className={styles.intro}>
        intro p
      </p>
    </div>
    <ul className={styles.list}>
      list style
    </ul>
  </Layout>