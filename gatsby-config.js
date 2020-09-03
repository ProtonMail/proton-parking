/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Proton Parking Page',
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: '',
                sitemap: '',
                policy: [{ userAgent: '*', disallow: '/' }],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pictures`,
                path: `${__dirname}/src/pictures/`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
