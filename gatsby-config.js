/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Star Wars Character Card Coding Test`,
    description: `Displays a list of Character Cards using the SW:API.`,
    author: `@elevati0n`,
    siteUrl: `https://starwars-characters-wiw.netlify.app/`,
  },
  // plugins: [
  //   `gatsby-plugin-image`,
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       name: `images`,
  //       path: `${__dirname}/src/images`,
  //     },
  //   },
  //   `gatsby-transformer-sharp`,
  //   `gatsby-plugin-sharp`,
  //   {
  //     // this is for favicons
  //     resolve: `gatsby-plugin-manifest`,
  //     options: {
  //       name: `gatsby-starter-default`,
  //       short_name: `starter`,
  //       start_url: `/`,
  //       background_color: `#663399`,
  //       // This will impact how browsers show your PWA/website
  //       // https://css-tricks.com/meta-theme-color-and-trickery/
  //       // theme_color: `#663399`,
  //       display: `minimal-ui`,
  //       icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  //     },
  //   },
  // ],
}
