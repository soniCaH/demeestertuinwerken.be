module.exports = {
  siteMetadata: {
    title: `Demeester Tuinwerken`,
    description: `Sinds 2015 ben ik zelfstandige tuinaannemer. Je kan bij mij terecht voor tuinaanleg en -onderhoud, algemene tuinwerken, opritten, grondwerken enz...`,
    author: `@KevinVRansbeeck`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1d4f1e`,
        theme_color: `#1d4f1e`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
  flags: {
    FAST_DEV: true,
    // LMDB_STORE: true,
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: false
  },
}
