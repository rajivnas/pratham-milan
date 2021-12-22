/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    menu: [
      { name: "About", to: "/about" },
      { name: "Facilities", to: "/facilities" },
      { name: "Gallery", to: "/gallery" },
      { name: "Contact", to: "/contact" },
    ],
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          `sliders`,
          `services`,
          `Achievements`,
          `testimonials`,
          "facilities",
          `galleries`,
        ],
        singleTypes: [
          `about-page`,
          `facility-page`,
          `gallery-page`,
          `send-inquiry`,
          `contact-page`,
          `decoration-page`,
          `catering-page`,
          `car-rental`,
          `guidelines-page`,
          `privacy-page`,
          `404-page`,
        ],
      },
    },
  ],
}
