import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO'
import BlogPosts from '../components/blog/BlogPosts';

const Blog = ({ data }) => {
    return (
        <Layout>
            <SEO
                title="Joe Avila || Blog Posts"
            />
            <div id="main">
                <BlogPosts newPosts={data.allDevArticles.edges}/>
            </div>
        </Layout>
    )
};

// Export query here.
export const devQuery = graphql`
query blogPageQuery {
    allDevArticles {
      edges {
        node {
          article {
            id
            social_image
            title
            url
            readable_publish_date
          }
        }
      }
    }
  }
  
`
// Pass data prop down to blogposts



export default Blog;