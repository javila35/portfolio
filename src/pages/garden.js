import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../lib/typography'

const garden = () => {
    
    return (
    <div css={css`padding-bottom: 0;`}>
        {allMdx.edges.map(({ node: post }) => (
          <div key={post.id} css={css`margin-bottom: 40px;`}>
            <h2 css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease'
              })}
            >
              <a href={post.frontmatter.slug} aria-label={`View ${post.frontmatter.title}`} >
                {post.frontmatter.title}
              </a>
            </h2>
            <div>
              {post.excerpt}{' '}
              <a href={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </a>
            </div>
          </div>
        })
    </div>
    )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`