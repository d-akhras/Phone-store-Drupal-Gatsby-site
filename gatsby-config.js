require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mobile Phones & Accessories Store`,
    description: `Gatsby site - Sourcing from Drupal CMS for master thesis in Software engineering - KSU`,
    author: `Eng. Dalal Al-Akhras`,
  },
  plugins: [
       {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://localhost/contenta/web/`,
       // baseUrl: `https://99b0-2a02-cb80-4083-7e5d-f564-188b-4745-a93b.in.ngrok.io/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`,
        // preview: true,
      },
    },



    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
