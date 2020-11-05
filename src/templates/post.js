import React from 'react'
import { graphql } from 'gatsby'

/* 
 My posts are not being brought in as I would expect.
 markdownRemark: post is returning null.
*/

export default function Template({ data }) {
    const { markdownRemark: post } = data
    
    return (
        <div>
            <article>
                hi king
                {console.log(data)}
                {/* <h1>{post.frontmatter.title}</h1> */}
                <div
                //   dangerouslySetInnerHTML={{ __html: post.html }}
                ></div>
            </article>
        </div>
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`