module.exports = {
  siteMetadata: {
    title: 'Penguin and the man.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Penguin and the man.',
        short_name: 'SawaWebhop',
        start_url: '/',
        background_color: '#4285f4',
        theme_color: '#4285f4',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
