/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://pratham-milan.netlify.app",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Pratham Milan`,
    description: `Pratham Milon is one of the most renowned wedding venues in Howrah, located on Domjur - Amta road, making it most accessible and convenient for all your guests.  `,
    author: `@Kishore`,
    twitterUsername: "@kishorenaskar2",
    image: "/twitter-img.png",
    keywords: [
      "Pratham Milan Garden",
      "Pratham Milan banquet hall",
      "Banquet hall in Domjur",
      "Banquet hall in Howrah",
      "Marriage hall in Howrah",
    ],
    siteUrl,

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
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `lightgray`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}
