import React from 'react';
import BlogCard from './BlogCard';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPosts = () => {
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
                {allPosts ? renderPosts() : <p>Loading</p>}
            </div>
        </section>
)
};

export default BlogPosts;