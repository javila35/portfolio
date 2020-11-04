import React from 'react'
import { graphql } from 'gatsby'

/* 
To do:

Learn to render pages from MD files in a directory

*/


const garden = ({ data: { site } }) => {
    return (
      <div>
        {site.edges.map(({ node: post }) => (
          <div key={post.id}>
            <h2>
              <a href={post.frontmatter.slug} aria-label={`View ${post.frontmatter.title}`}>
                {post.frontmatter.title}
              </a>
            </h2>
            <div>
              {post.excerpt}{' '}
              <a href={post.frontmatter.slug} aria-label={`View ${post.frontmatter.title}`}>
              Read Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    )
};

export default garden;

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`