import React, { useState, useEffect } from 'react';
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

  const [allPosts, setPosts] = useState(queryData.allDevArticles.edges)

  useEffect(() => {
          fetch('https://www.joeavila.dev/___graphql/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                  query: `{
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
                  }`
              })
          })
          .then(res => res.json())
          .then(res => {
              if (checkNewPosts(res.data.allDevArticles.edges)) {
                  setPosts(res.data.allDevArticles.edges)
              }
          })
      })
  
      const checkNewPosts = (data) => {
          if (allPosts.length !== data.length) {
              return true
          };
          return false;
      }

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