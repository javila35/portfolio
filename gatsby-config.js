module.exports = {
  siteMetadata: {
    title: 'Joe Avila || Portfolio',
    author: 'Joe Avila',
    description: 'Full Stack develoepr portfolio for Joe Avila.',
    url: `https://www.joeavila.dev/`,
    author: `Joseph Avila`,
    type: `Website`,
    twitterUsername: `coderjoe206`,
    image: 'src/assets/images/ogImage.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Joe Avila Portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: `javila35`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`
  ],
}
