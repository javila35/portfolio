module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    author: 'Joe Avila',
    description: 'Portfolio website for Joseph Avila. Titles include: Full Stack Developer, Web Developer, Front End Developer, Back end Developer.',
    siteUrl: `https://www.joeavila.dev`,
    author: `Joseph Avila`,
    type: `Website`
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
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
