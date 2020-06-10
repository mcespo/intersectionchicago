module.exports = {
  siteMetadata: {
    title: `Intersection Chicago`,
    description: `Intersection Chicago's purpose is to engage and educate communities through social contact and raise awareness of social issues.`,
    author: `Marvin Cespedes`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://intersectionchicago.us8.list-manage.com/subscribe/post?u=a69928549db042fb4b22a6cdd&id=0dcca60333`,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            variants: [`300`],
          },
          {
            family: `Esteban`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-55356396-2`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        icon: `src/images/favicon-196x196.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
