module.exports = {
  siteMetadata: {
    title: 'Joe Avila || Portfolio',
    author: 'Joe Avila',
    description: 'Full Stack developer portfolio for Joseph Avila.',
    url: `https://www.joeavila.dev`,
    author: `Joseph Avila`,
    type: `Website`,
    twitterUsername: `@coderjoe206`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // Do I need to have all these extensions?
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 1035,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/lib/typography`
      },
    },
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
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`
  ],
}
