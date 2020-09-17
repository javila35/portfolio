import React from 'react';
import BlogCard from './BlogCard';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPosts = ({ newPosts }) => {
    const queryData = useStaticQuery(graphql`
    {
      allDevArticles {
        edges {
          node {
            article {
              id
              social_image
              title
              url
              readable_publish_date
              tag_list
            }
          }
        }
      }
    }    
  `);

  const allPosts = queryData.allDevArticles.edges;

    const renderPosts = () => {
        return allPosts.map((post, index) => {
            return <BlogCard key={index} post={post.node.article} />
        })
    }

    return (
        <section id="one">
            <div className="row">
                {renderPosts()}
            </div>
        </section>
)
};

export default BlogPosts;