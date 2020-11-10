module.exports = {
  siteMetadata: {
    title: 'Joe Avila || Portfolio',
    author: 'Joe Avila',
    description: 'Full Stack developer portfolio for Joseph Avila.',
    url: 'https://www.joeavila.dev',
    author: 'Joseph Avila',
    type: 'Website',
    twitterUsername: '@coderjoe206'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Joe Avila Portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links'
  ],
}
