import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogPosts = () => {

  const queryData = useStaticQuery(graphql`
  query {
    example {
      articles {
        id
        title
        url
        readable_publish_date
        tags
        description
        social_image
      }
    }
  }  
  `)

  const [allPosts, setPosts] = useState(queryData.example.articles)

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=javila35')
      .then(data => data.json())
      .then(data => setPosts(data))
  })

  const renderPosts = () => {
    return allPosts.map((post, index) => {
      return <BlogCard key={index} post={post} />
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