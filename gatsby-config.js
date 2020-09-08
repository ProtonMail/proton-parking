module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Proton Parking Page',
    },
    plugins: [
        `gatsby-plugin-scroll-reveal`,
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
                path: `${__dirname}/src/pictures`,
            },
          },
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
