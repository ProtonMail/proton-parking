module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Proton Parking Page',
        description: 'Proton',
        author: 'ProtonTeam'

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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `GatsbyJS`,
              short_name: `GatsbyJS`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: `src/pictures/mountain.jpg`
            },
          },
    ],
}
